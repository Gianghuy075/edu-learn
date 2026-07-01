import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Bell, Sparkles, Shapes, ArrowRight, Star, BookOpen } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { subjects } from "@/lib/subjects";

export const Route = createFileRoute("/lop-hoc/")({
  head: () => ({
    meta: [
      { title: "Lớp học theo môn — GDP-BaseEdu" },
      { name: "description", content: "Khám phá khóa học theo môn học tại GDP-BaseEdu: Toán, Lý, Hóa, Văn, Sinh, Sử-Địa, Tiếng Anh, Tin học." },
      { property: "og:title", content: "Lớp học theo môn — GDP-BaseEdu" },
      { property: "og:description", content: "Hệ thống giáo dục đa dạng với lộ trình học tập cho từng bộ môn." },
    ],
  }),
  component: LopHocPage,
});

const featured = [
  { subject: "Toán học", title: "Luyện thi THPT Quốc gia - Chuyên đề Hàm số & Tích phân", lessons: 32, teacher: "Thầy Nguyễn An", rating: 4.9, slug: "toan-hoc" },
  { subject: "Tiếng Anh", title: "IELTS Breakthrough: Writing & Speaking Mastery", lessons: 48, teacher: "Cô Mai Linh", rating: 4.8, slug: "tieng-anh" },
  { subject: "Vật lý", title: "Vật lý 12: Nắm vững các định luật Điện học & Quang học", lessons: 24, teacher: "Thầy Quang Đăng", rating: 4.9, slug: "vat-ly" },
];

function LopHocPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Top bar */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Tìm kiếm môn học hoặc khóa học..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="px-5 py-2.5 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:opacity-90">
            Đăng ký
          </button>
          <button className="p-2.5 rounded-full bg-card border border-border">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-sidebar text-sidebar-foreground p-8 md:p-10">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Khám phá khóa học theo môn</h1>
            <p className="text-sm md:text-base opacity-85 leading-relaxed">
              Hệ thống giáo dục đa dạng với các lộ trình học tập được thiết kế riêng biệt cho từng bộ môn, giúp học sinh nắm vững kiến thức cốt lõi và phát triển tư duy sáng tạo.
            </p>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-4 gap-3 opacity-25">
            {["∑", "π", "H₂O", "λ", "α", "Σ", "∫", "≠"].map((s) => (
              <div key={s} className="w-14 h-14 rounded-lg border border-white/30 flex items-center justify-center text-xl font-bold">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Subject grid header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shapes className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Danh mục môn học</h2>
          </div>
          <Link to="/lop-hoc" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            Tất cả môn học <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subjects.map((s) => (
            <Link
              key={s.slug}
              to="/lop-hoc/$slug"
              params={{ slug: s.slug }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.cover} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                {s.hot && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-md bg-brand-orange text-white">HOT</span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-base mb-1">{s.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{s.courseCount}+ khóa học có sẵn</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-card bg-gradient-to-br from-primary to-brand-purple" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">+{s.teacherCount} Giáo viên</span>
                </div>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-accent px-3 py-1.5 rounded-md">
                    Xem chi tiết <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2 pt-4">
          <Sparkles className="w-5 h-5 text-brand-orange" />
          <h2 className="text-xl font-bold">Khóa học tiêu biểu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((f) => (
            <Link
              key={f.title}
              to="/lop-hoc/$slug"
              params={{ slug: f.slug }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-brand-purple/10 to-brand-orange/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-bold text-2xl">
                  GDP-BaseEdu
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="text-primary font-semibold">{f.subject}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{f.lessons} Bài học</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug mb-3 line-clamp-2">{f.title}</h3>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple" />
                    <span className="text-muted-foreground">{f.teacher}</span>
                  </div>
                  <span className="flex items-center gap-1 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-brand-orange text-brand-orange" />
                    {f.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="text-center text-xs text-muted-foreground pt-6 border-t border-border">
          © 2026 GDP-BaseEdu Academic Portal. Tất cả quyền được bảo lưu.
          <div className="mt-2 flex justify-center gap-4">
            <a className="hover:text-primary">Về chúng tôi</a>
            <a className="hover:text-primary">Điều khoản dịch vụ</a>
            <a className="hover:text-primary">Liên hệ hỗ trợ</a>
          </div>
        </footer>
      </div>
    </AppLayout>
  );
}
