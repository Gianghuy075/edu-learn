import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Star,
  BookOpen,
  Clock,
  Users,
  CheckCircle2,
  PlayCircle,
  Award,
  Download,
  MessageCircle,
} from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { findCourse, formatVND, type Course } from "@/lib/courses";

export const Route = createFileRoute("/khoa-hoc/$slug")({
  loader: ({ params }) => {
    const course = findCourse(params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Khóa học"} — GDP-BaseEdu` },
      { name: "description", content: loaderData?.short ?? "Chi tiết khóa học tại GDP-BaseEdu." },
    ],
  }),
  component: CourseDetail,
  errorComponent: ({ error }) => (
    <AppLayout>
      <div className="py-20 text-center text-muted-foreground">{error.message}</div>
    </AppLayout>
  ),
  notFoundComponent: () => (
    <AppLayout>
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold mb-2">Không tìm thấy khóa học</h2>
        <Link to="/khoa-hoc" className="text-brand-blue hover:underline">
          ← Quay lại danh sách khóa học
        </Link>
      </div>
    </AppLayout>
  ),
});

function CourseDetail() {
  const course = Route.useLoaderData() as Course;

  return (
    <AppLayout>
      <div className="space-y-6">

        {/* Hero */}
        <section className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-purple text-white">
          <div className="grid md:grid-cols-2 gap-6 p-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded text-xs font-semibold ${course.levelColor}`}>
                  {course.level}
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/15">
                  {course.subject}
                </span>
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-white/15">
                  {course.grade}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{course.title}</h1>
              <p className="text-sm md:text-base opacity-95 leading-relaxed mb-5">{course.long}</p>
              <div className="flex flex-wrap items-center gap-5 text-sm">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  <b>{course.rating}</b>
                  <span className="opacity-80">(320 đánh giá)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString("vi-VN")} học viên
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {course.lessons} bài giảng
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {course.weeks} tuần
                </span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={course.image}
                alt={course.title}
                width={768}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Outcomes */}
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-blue" />
                Bạn sẽ đạt được gì?
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Syllabus */}
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-lg font-bold mb-4">Nội dung khóa học</h2>
              <div className="space-y-3">
                {course.syllabus.map((w, i) => (
                  <details key={i} open={i === 0} className="rounded-xl border bg-background group">
                    <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-brand-blue font-semibold">{w.week}</div>
                        <div className="font-semibold">{w.title}</div>
                      </div>
                      <span className="text-xs text-muted-foreground">{w.lessons.length} bài</span>
                    </summary>
                    <div className="px-4 pb-4 space-y-2 border-t pt-3">
                      {w.lessons.map((l) => (
                        <div key={l} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <PlayCircle className="w-4 h-4 text-brand-blue" />
                          {l}
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Teacher */}
            <section className="rounded-2xl border bg-card p-6">
              <h2 className="text-lg font-bold mb-4">Giảng viên</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {course.teacher.name.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-semibold">{course.teacher.name}</div>
                  <div className="text-sm text-brand-blue">{course.teacher.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{course.teacher.school}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Hơn 15 năm kinh nghiệm luyện thi, đã đồng hành cùng hàng ngàn học sinh đạt điểm cao trong các kỳ thi quốc gia.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border bg-card p-6 sticky top-6">
              <div className="text-3xl font-bold text-brand-blue mb-1">{formatVND(course.price)}</div>
              <div className="text-xs text-muted-foreground line-through mb-4">
                {formatVND(Math.round(course.price * 1.4))}
              </div>
              <button className="w-full py-3 rounded-lg bg-brand-blue text-white font-semibold hover:opacity-90 mb-2">
                Đăng ký học ngay
              </button>
              <button className="w-full py-3 rounded-lg border-2 border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5">
                Thêm vào yêu thích
              </button>
              <div className="border-t mt-5 pt-4 space-y-2.5 text-sm">
                <Row icon={BookOpen} label="Bài giảng" value={`${course.lessons} video`} />
                <Row icon={Clock} label="Thời lượng" value={`${course.weeks} tuần`} />
                <Row icon={Users} label="Học viên" value={course.students.toLocaleString("vi-VN")} />
                <Row icon={Download} label="Tài liệu" value="Trọn đời" />
                <Row icon={MessageCircle} label="Hỗ trợ" value="Livestream chữa bài" />
                <Row icon={Award} label="Chứng chỉ" value="Có" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof BookOpen; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-muted-foreground">
        <Icon className="w-4 h-4" />
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
