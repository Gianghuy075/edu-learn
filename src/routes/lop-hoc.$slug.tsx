import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen, Users, Clock, Star, UserCheck,
  Calendar, ChevronRight as ArrowRight, Megaphone,
} from "lucide-react";
import { toast } from "sonner";
import { AppLayout } from "@/components/AppLayout";
import { findSubject, formatVND, type Subject } from "@/lib/subjects";

export const Route = createFileRoute("/lop-hoc/$slug")({
  loader: ({ params }) => {
    const subject = findSubject(params.slug);
    if (!subject) throw notFound();
    return { subject };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Đăng ký ${loaderData?.subject.courseTitle ?? "khóa học"} — GDP-BaseEdu` },
      { name: "description", content: loaderData?.subject.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <AppLayout>
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Không tìm thấy môn học</h1>
        <Link to="/lop-hoc" className="text-primary hover:underline">← Quay lại danh sách môn học</Link>
      </div>
    </AppLayout>
  ),
  component: LopHocDetail,
});

function LopHocDetail() {
  const { subject } = Route.useLoaderData() as { subject: Subject };
  const [teacherId, setTeacherId] = useState(subject.teachers[0].id);
  const [slotId, setSlotId] = useState(subject.slots[0].id);

  const teacher = subject.teachers.find((t) => t.id === teacherId)!;
  const slot = subject.slots.find((s) => s.id === slotId)!;

  return (
    <AppLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Đăng ký khóa học & Chọn lớp</h1>
          <p className="text-sm text-muted-foreground">
            Vui lòng chọn giảng viên và lịch học phù hợp với kế hoạch của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course card */}
            <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col md:flex-row">
              <div className="relative md:w-64 shrink-0 aspect-video md:aspect-auto">
                <img src={subject.cover} alt={subject.name} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold rounded-md bg-brand-green text-white uppercase">
                  {subject.name}
                </span>
              </div>
              <div className="p-5 flex-1">
                <h2 className="text-xl font-bold text-primary mb-2">{subject.courseTitle}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{subject.description}</p>
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{subject.lessons} Bài giảng</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{subject.students} Học viên</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{subject.duration}</span>
                </div>
              </div>
            </div>

            {/* Teachers */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Giảng viên hướng dẫn</h3>
                </div>
                <span className="text-xs font-semibold text-primary">Bắt buộc</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subject.teachers.map((t) => {
                  const active = t.id === teacherId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTeacherId(t.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all bg-card flex items-center gap-3 ${
                        active ? "border-primary shadow-sm" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <img src={t.avatar} alt={t.name} loading="lazy" className="w-14 h-14 rounded-full object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{t.name}</div>
                        <div className="flex items-center gap-1 text-xs my-0.5">
                          <Star className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                          <span className="font-medium">{t.rating}</span>
                          <span className="text-muted-foreground">({t.reviews} đánh giá)</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{t.experience}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        active ? "border-primary bg-primary" : "border-border"
                      }`}>
                        {active && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slots */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Lịch học dự kiến</h3>
              </div>
              <div className="space-y-3">
                {subject.slots.map((s) => {
                  const active = s.id === slotId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSlotId(s.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all bg-card flex items-center gap-4 ${
                        active ? "border-primary shadow-sm" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        active ? "border-primary bg-primary" : "border-border"
                      }`}>
                        {active && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{s.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {s.days} | {s.time}
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        s.seats <= 5 ? "bg-brand-orange/15 text-brand-orange" : "bg-muted text-muted-foreground"
                      }`}>
                        Còn {s.seats} chỗ
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right sticky */}
          <aside className="space-y-4 lg:sticky lg:top-6 self-start">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-sidebar text-sidebar-foreground px-5 py-3 font-bold text-sm tracking-wide">
                CHI TIẾT ĐĂNG KÝ
              </div>
              <div className="p-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Khóa học:</span>
                  <span className="font-semibold text-right">{subject.courseTitle}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Giảng viên:</span>
                  <span className="font-semibold text-primary text-right">{teacher.name}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-foreground">Lịch học:</span>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{slot.name.replace(/\s*\(.*/, "")}</div>
                    <div className="text-xs text-muted-foreground">{slot.days} ({slot.time})</div>
                  </div>
                </div>
                <div className="border-t border-border pt-4 flex items-baseline justify-between">
                  <span className="text-muted-foreground">Tổng học phí:</span>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground line-through">{formatVND(subject.originalPrice)}</div>
                    <div className="text-xl font-bold text-primary">{formatVND(subject.price)}</div>
                  </div>
                </div>
                <button
                  onClick={() => toast.success("Đăng ký thành công!", { description: `${subject.courseTitle} - ${teacher.name}` })}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 flex items-center justify-center gap-2"
                >
                  Xác nhận đăng ký <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-muted-foreground italic text-center leading-relaxed">
                  * Bằng việc nhấn xác nhận, bạn đồng ý với các Điều khoản & Chính sách bảo mật của GDP-BaseEdu.
                </p>
              </div>
            </div>

            <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-4 flex gap-3">
              <Megaphone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="font-semibold text-brand-orange mb-1">Ưu đãi mùa hè!</div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  Nhập mã <span className="font-mono font-bold">SUMMER24</span> để giảm thêm 10% học phí khi đăng ký trước ngày 30/06.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
