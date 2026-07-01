import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal, Star, BookOpen, Clock, Users, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { courses, formatVND } from "@/lib/courses";
import exam10 from "@/assets/exam-10.jpg";
import examSpec from "@/assets/exam-specialized.jpg";
import examUni from "@/assets/exam-university.jpg";

export const Route = createFileRoute("/khoa-hoc")({
  head: () => ({
    meta: [
      { title: "Khóa học — GDP-BaseEdu" },
      { name: "description", content: "Tổng hợp khóa ôn thi trọng điểm và khóa học đề xuất tại GDP-BaseEdu." },
    ],
  }),
  component: CoursesPage,
});

const featured = [
  { title: "Ôn thi vào lớp 10", tag: "Cấp 2", tagColor: "bg-brand-green", desc: "Lộ trình bứt phá điểm số vào các trường Công lập hàng đầu.", img: exam10 },
  { title: "Ôn thi trường chuyên", tag: "Nâng cao", tagColor: "bg-brand-orange", desc: "Chinh phục đề thi khó nhằn của các trường Chuyên & Năng khiếu.", img: examSpec },
  { title: "Ôn thi Đại học (THPTQG)", tag: "Cấp 3", tagColor: "bg-brand-blue", desc: "Tổng ôn toàn diện kiến thức 12 và luyện đề thi minh họa mới nhất.", img: examUni },
];

function CoursesPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Khóa ôn thi trọng điểm</h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Chương trình ôn luyện chuyên sâu giúp học sinh nắm vững kiến thức trọng tâm và kỹ năng làm bài để đạt kết quả cao nhất trong các kỳ thi quốc gia.
            </p>
          </div>
          <button className="shrink-0 px-5 py-2.5 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:opacity-90">
            Đăng ký
          </button>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 p-3 rounded-2xl border bg-card">
          <div className="flex-1 min-w-[200px] flex items-center gap-2 px-3">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              className="flex-1 bg-transparent outline-none text-sm py-2"
              placeholder="Tìm kiếm khóa học hoặc mã đề thi..."
            />
          </div>
          <div className="text-sm px-3 py-2 rounded-lg border bg-background">Khối lớp: Tất cả</div>
          <div className="text-sm px-3 py-2 rounded-lg border bg-background">Môn học: Tất cả</div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white text-sm font-medium">
            <SlidersHorizontal className="w-4 h-4" />
            Lọc kết quả
          </button>
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((f) => (
            <article key={f.title} className="relative rounded-2xl overflow-hidden h-56 group">
              <img src={f.img} alt={f.title} loading="lazy" width={768} height={512} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <span className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold text-white ${f.tagColor}`}>{f.tag}</span>
              <div className="relative h-full flex flex-col justify-end p-5 text-white">
                <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-xs opacity-90 leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Recommended */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Khóa học đề xuất</h2>
            <Link to="/khoa-hoc" className="text-sm text-brand-blue hover:underline flex items-center gap-1">
              Xem tất cả khóa học <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((c) => (
              <Link
                key={c.slug}
                to="/khoa-hoc/$slug"
                params={{ slug: c.slug }}
                className="rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative">
                  <img src={c.image} alt={c.title} loading="lazy" width={768} height={512} className="w-full h-36 object-cover" />
                  <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 rounded-md px-2 py-0.5 text-xs font-semibold">
                    <Star className="w-3 h-3 fill-brand-orange text-brand-orange" />
                    {c.rating}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold mb-3 line-clamp-2">{c.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{c.lessons} Bài giảng</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{c.weeks} Tuần</span>
                  </div>
                  <div className="mt-auto pt-3 border-t flex items-center justify-between">
                    <span className="font-bold text-sm">{formatVND(c.price)}</span>
                    <span className="px-3 py-1.5 rounded-md bg-brand-blue text-white text-xs font-semibold">
                      Tham gia
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why GDP-BaseEdu */}
        <section className="relative rounded-2xl bg-brand-blue text-white p-8 overflow-hidden">
          <h2 className="text-2xl font-bold mb-6">Tại sao nên ôn luyện tại GDP-BaseEdu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Giảng viên ưu tú", desc: "Đội ngũ thầy cô từ các trường chuyên và đại học danh tiếng." },
              { title: "Cập nhật liên tục", desc: "Lộ trình bám sát cấu trúc đề thi mới nhất của Bộ Giáo Dục." },
              { title: "Ngân hàng đề thi", desc: "Hơn 10.000+ đề thi thử có lời giải chi tiết và video hướng dẫn." },
              { title: "Theo dõi tiến độ", desc: "Hệ thống AI phân tích điểm mạnh, điểm yếu của từng học sinh." },
            ].map((b) => (
              <div key={b.title} className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/15 shrink-0 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{b.title}</div>
                  <p className="text-xs opacity-90 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
