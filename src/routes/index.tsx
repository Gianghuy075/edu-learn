import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Star,
  ChevronRight,
  PencilRuler,
  FlaskConical,
  BookOpen,
  FileText,
  Download,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Youtube,
  Facebook,
} from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import heroImg from "@/assets/hero-students.jpg";
import coursesGrid from "@/assets/courses-grid.jpg";
import exam10 from "@/assets/exam-10.jpg";
import examSpec from "@/assets/exam-specialized.jpg";
import examUni from "@/assets/exam-university.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GDP-BaseEdu — Nền tảng giáo dục hiện đại" },
      {
        name: "description",
        content:
          "Học trực tuyến với khóa học theo khối, theo môn và luyện thi chuyên sâu cho học sinh Việt Nam.",
      },
    ],
  }),
  component: Index,
});

// Sidebar items are defined in AppLayout

const grades = [
  {
    tag: "Tiểu học",
    tagColor: "bg-brand-orange",
    title: "Khối Tiểu học",
    count: "24 khóa học",
    rating: "4.8",
    desc: "Nền tảng vững chắc cho những bước chân đầu tiên vào hành trình tri thức.",
  },
  {
    tag: "Khối 6",
    tagColor: "bg-brand-green",
    title: "Khối 6",
    count: "18 khóa học",
    rating: "4.9",
    desc: "Làm quen với môi trường THCS và các phương pháp học tập mới.",
  },
  {
    tag: "Khối 7",
    tagColor: "bg-brand-blue",
    title: "Khối 7",
    count: "16 khóa học",
    rating: "4.7",
    desc: "Tăng tốc phát triển tư duy logic và các kỹ năng phân tích cơ bản.",
  },
  {
    tag: "Khối 8",
    tagColor: "bg-brand-purple",
    title: "Khối 8",
    count: "20 khóa học",
    rating: "4.8",
    desc: "Chinh phục các kiến thức trọng tâm chuẩn bị cho năm học cuối cấp.",
  },
  {
    tag: "Khối 9",
    tagColor: "bg-brand-orange",
    title: "Khối 9",
    count: "22 khóa học",
    rating: "4.9",
    desc: "Giai đoạn nước rút ôn thi chuyển cấp và các kỳ thi học sinh giỏi.",
  },
  {
    tag: "Khối 10",
    tagColor: "bg-brand-green",
    title: "Khối 10",
    count: "25 khóa học",
    rating: "4.8",
    desc: "Bản lề cấp THPT với chương trình giáo dục phổ thông mới.",
  },
  {
    tag: "Khối 11",
    tagColor: "bg-brand-blue",
    title: "Khối 11",
    count: "28 khóa học",
    rating: "4.7",
    desc: "Làm chủ kiến thức chuyên sâu và định hình các môn thi thế mạnh.",
  },
  {
    tag: "Khối 12",
    tagColor: "bg-brand-purple",
    title: "Khối 12",
    count: "35 khóa học",
    rating: "4.9",
    desc: "Tổng ôn kiến thức, luyện đề thi thử bám sát đề minh họa THPTQG.",
  },
];

const subjects = [
  { name: "Toán học", count: "150+ khóa học từ cơ bản đến nâng cao", teachers: 10, btn: "bg-brand-blue text-white" },
  { name: "Vật lý", count: "95+ khóa học chuyên sâu thí nghiệm", teachers: 8, btn: "bg-brand-green text-white" },
  { name: "Hóa học", count: "110+ khóa học lý thuyết & bài tập", teachers: 10, btn: "bg-brand-orange text-white" },
  { name: "Ngữ văn", count: "120+ khóa học phân tích tác phẩm", teachers: 15, btn: "bg-brand-purple/20 text-brand-purple" },
  { name: "Sinh học", count: "80+ khóa học khám phá sự sống", teachers: 6, btn: "bg-brand-green text-white" },
  { name: "Sử & Địa", count: "200+ khóa học lịch sử & địa lý", teachers: 20, btn: "bg-muted text-foreground" },
];

const exams = [
  { title: "Ôn thi vào lớp 10", desc: "Hệ thống kiến thức trọng tâm lớp 9 và giải đề thực chiến.", img: exam10 },
  { title: "Ôn thi trường chuyên", desc: "Bồi dưỡng năng lực và kỹ năng làm bài thi chuyên khó.", img: examSpec },
  { title: "Ôn thi Đại học", desc: "Toàn diện kiến thức 3 năm THPT, hướng tới mục tiêu 27+ điểm.", img: examUni },
];

const homeDocuments = [
  {
    id: "chuyen-de-giai-tich-12",
    title: "Bộ đề thi THPT Quốc gia môn Toán - Năm 2024",
    subject: "Toán học",
    grade: "Lớp 11",
    size: "4.2 MB",
    downloads: "2.4k",
    type: "PDF",
    bg: "bg-[#e8edff] border-[#d0dbff] text-[#0f2868]",
  },
  {
    id: "van-hoc-12",
    title: "Phân tích các tác phẩm văn học lớp 12 trọng tâm",
    subject: "Ngữ văn",
    grade: "Lớp 12",
    size: "1.5 MB",
    downloads: "1.8k",
    type: "DOCX",
    bg: "bg-[#dcfce7] border-[#bbf7d0] text-green-700",
  },
  {
    id: "tieng-anh-12",
    title: "100 Cấu trúc Tiếng Anh thông dụng lớp 12",
    subject: "Tiếng Anh",
    grade: "Lớp 12",
    size: "850 KB",
    downloads: "1.1k",
    type: "PDF",
    bg: "bg-orange-50 border-orange-100 text-orange-700",
  },
];

const homeBlogs = [
  {
    slug: "bi-quyet-diem-cao-sat",
    title: "Bí quyết đạt điểm tuyệt đối trong kỳ thi SAT: Lộ trình 3 tháng hiệu quả",
    category: "Kinh nghiệm ôn thi",
    date: "25 Tháng 10, 2023",
    readTime: "8 phút đọc",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "nhung-thay-doi-quan-trong",
    title: "Những thay đổi quan trọng trong quy chế tuyển sinh đại học 2024",
    category: "Tin tức giáo dục",
    date: "18 Tháng 10, 2023",
    readTime: "5 phút đọc",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "phuong-phap-pomodoro",
    title: "Phương pháp Pomodoro: Bí quyết tập trung cao độ khi ôn thi",
    category: "Phương pháp học tập",
    date: "15 Tháng 10, 2023",
    readTime: "6 phút đọc",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
  },
];

const slides = [
  {
    img: heroImg,
    title: "Chinh phục mọi kỳ thi",
    desc: "Lộ trình ôn thi chuyên sâu, bám sát cấu trúc đề thi mới nhất từ Bộ Giáo dục và Đào tạo.",
    btnText: "Bắt đầu ôn tập",
    to: "/de-thi-thu",
    gradient: "from-brand-green/90 via-brand-green/70",
    btnTextColor: "text-brand-green",
  },
  {
    img: examUni,
    title: "Khóa ôn luyện THPTQG 2026",
    desc: "Học tập toàn diện cùng đội ngũ giáo viên chuyên môn cao, tự tin đạt điểm 9+, 10.",
    btnText: "Xem các môn học",
    to: "/lop-hoc",
    gradient: "from-[#0f2868]/95 via-[#0f2868]/70",
    btnTextColor: "text-[#0f2868]",
  },
  {
    img: examSpec,
    title: "Luyện thi chứng chỉ quốc tế",
    desc: "Chương trình ôn luyện IELTS, SAT tinh gọn, cam kết chuẩn đầu ra cùng giáo trình độc quyền.",
    btnText: "Xem lộ trình",
    to: "/exam-prep",
    gradient: "from-brand-purple/95 via-brand-purple/75",
    btnTextColor: "text-brand-purple",
  },
];

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppLayout>
      <div className="space-y-10">
        {/* Hero Slider */}
        <section className="relative rounded-2xl overflow-hidden h-64 md:h-80">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  width={1280}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} to-transparent`} />
                <div className="relative h-full flex flex-col justify-center px-8 md:px-12 text-white max-w-xl z-10">
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">{slide.title}</h1>
                  <p className="text-sm md:text-base mb-6 opacity-95 leading-relaxed">
                    {slide.desc}
                  </p>
                  <Link
                    to={slide.to}
                    className={`self-start px-6 py-2.5 rounded-lg bg-white ${slide.btnTextColor} font-semibold text-sm hover:bg-white/90 transition-colors`}
                  >
                    {slide.btnText}
                  </Link>
                </div>
              </div>
            );
          })}
          
          {/* Pagination Indicators */}
          <div className="absolute bottom-6 left-8 md:left-12 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Khóa học theo khối */}
        <section>
          <SectionHeader title="Khóa học theo khối" to="/khoa-hoc" />
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
            {grades.map((g) => (
              <article
                key={g.title}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative">
                  <img src={coursesGrid} alt={g.title} loading="lazy" width={768} height={512} className="w-full h-40 object-cover" />
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded ${g.tagColor}`}>
                    {g.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-lg">{g.title}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-brand-orange text-brand-orange" />
                        <span className="font-medium">{g.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{g.count}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{g.desc}</p>
                  </div>
                  <Link
                    to="/khoa-hoc"
                    className="block w-full text-center py-2 bg-slate-50 hover:bg-[#0f2868] hover:text-white border border-slate-200 text-[#0f2868] text-xs font-bold rounded-lg transition-colors mt-auto"
                  >
                    Khám phá ngay
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Lớp học theo môn */}
        <section>
          <SectionHeader title="Lớp học theo môn" to="/lop-hoc" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subjects.map((s) => (
              <article key={s.name} className="rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-36">
                  <img src={coursesGrid} alt={s.name} loading="lazy" width={768} height={512} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                  <div className="absolute top-4 right-4 text-white text-right">
                    <div className="text-[10px] font-semibold uppercase tracking-wider opacity-90">Giáo viên tiêu biểu</div>
                    <div className="flex justify-end mt-1 items-center gap-1">
                      <div className="flex -space-x-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-white/80 border-2 border-white flex items-center justify-center text-[9px] font-bold text-brand-blue">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-semibold ml-1">+{s.teachers}</span>
                    </div>
                    <div className="text-xl font-bold mt-2">{s.name}</div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">{s.count}</p>
                  <Link to="/lop-hoc" className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${s.btn}`}>
                    Xem chi tiết
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Khóa ôn thi */}
        <section>
          <SectionHeader title="Khóa ôn thi" hideAll />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {exams.map((e) => (
              <article key={e.title} className="relative rounded-2xl overflow-hidden h-56 group">
                <img src={e.img} alt={e.title} loading="lazy" width={768} height={512} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-5 text-white">
                  <h3 className="font-bold text-lg mb-1">{e.title}</h3>
                  <p className="text-xs opacity-90 mb-3 leading-relaxed">{e.desc}</p>
                  <Link to="/exam-prep" className="self-start px-4 py-1.5 rounded-md bg-brand-blue text-white text-xs font-semibold">
                    Xem lộ trình
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Thư viện tài liệu */}
        <section>
          <SectionHeader title="Thư viện tài liệu nổi bật" to="/thu-vien" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between hover:border-[#0f2868] transition-colors group"
              >
                <div>
                  <div className="flex gap-4 items-start mb-4">
                    <div className={`w-14 h-14 shrink-0 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden border ${doc.bg}`}>
                      <FileText className="w-6 h-6 mb-1" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">{doc.type}</span>
                    </div>
                    <div>
                      <div className="flex gap-1.5 items-center mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{doc.subject}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{doc.grade}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 text-[14px] leading-snug group-hover:text-[#0f2868] transition-colors line-clamp-2">
                        {doc.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-5">
                    <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-slate-400" /> {doc.downloads} tải về</span>
                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-slate-400" /> {doc.size}</span>
                  </div>
                </div>
                <Link
                  to="/thu-vien/$slug"
                  params={{ slug: doc.id }}
                  className="w-full bg-[#f8f9fc] hover:bg-[#0f2868] hover:text-white text-[#0f2868] font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all mt-auto"
                >
                  <Download className="w-3.5 h-3.5" /> Xem & Tải xuống
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tin tức & Blog */}
        <section>
          <SectionHeader title="Tin tức & Blog mới nhất" to="/blog" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeBlogs.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:border-[#0f2868] transition-colors group"
              >
                <div className="w-full aspect-[16/10] bg-slate-100 relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f2868] text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="font-bold text-slate-800 text-[15px] leading-snug group-hover:text-[#0f2868] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTAs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-8">
          <CtaCard icon={PencilRuler} title="Trang làm đề" desc="Hàng ngàn đề thi thử miễn phí cập nhật liên tục." color="purple" to="/de-thi-thu" />
          <CtaCard icon={FlaskConical} title="Trang làm kiểm tra" desc="Luyện tập theo chương, đánh giá tiến độ tức thì." color="green" to="/exam-prep" />
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-16 pb-12 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0f2868] flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-[#0f2868] leading-tight">GDP-BaseEdu</div>
                  <div className="text-[11px] text-slate-500 font-medium tracking-wide">Academic Excellence</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                GDP-BaseEdu là nền tảng học tập trực tuyến hàng đầu dành cho học sinh Việt Nam, cung cấp các khóa học chất lượng cao từ cơ bản đến ôn thi đại học chuyên sâu.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#0f2868] shrink-0" />
                  <span>123 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0f2868] shrink-0" />
                  <span>1900 8080 - 024 7300 8080</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0f2868] shrink-0" />
                  <span>support@gdp-baseedu.edu.vn</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-[15px] uppercase tracking-wider">Khám phá</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/khoa-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Khóa học theo khối</Link></li>
                <li><Link to="/lop-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Lớp học theo môn</Link></li>
                <li><Link to="/exam-prep" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Luyện thi chứng chỉ</Link></li>
                <li><Link to="/de-thi-thu" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Đề thi thử THPTQG</Link></li>
                <li><Link to="/thu-vien" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Thư viện học liệu</Link></li>
              </ul>
            </div>

            {/* Column 3: Subjects/Courses */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-[15px] uppercase tracking-wider">Chương trình</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/lop-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Toán học Lớp 10-12</Link></li>
                <li><Link to="/lop-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Vật lý Chuyên sâu</Link></li>
                <li><Link to="/lop-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Hóa học Lý thuyết</Link></li>
                <li><Link to="/lop-hoc" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Ngữ văn Trọng tâm</Link></li>
                <li><Link to="/exam-prep" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Tiếng Anh & IELTS</Link></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-[15px] uppercase tracking-wider">Hỗ trợ</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Hướng dẫn thanh toán</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Chính sách bảo mật</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Điều khoản sử dụng</a></li>
                <li><a href="#" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Câu hỏi thường gặp</a></li>
                <li><Link to="/blog" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors">Tin tức giáo dục</Link></li>
                <li><Link to="/tuyen-dung" className="text-slate-600 hover:text-[#0f2868] hover:underline transition-colors font-semibold text-brand-blue">Tuyển dụng</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright row */}
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-medium">
              © {new Date().getFullYear()} GDP-BaseEdu. Bản quyền thuộc về Công ty Cổ phần Giáo dục GDP-BaseEdu Việt Nam.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0f2868] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </AppLayout>
  );
}

function SectionHeader({ title, hideAll, to }: { title: string; hideAll?: boolean; to?: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="w-1 h-5 rounded bg-brand-blue" />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {!hideAll && (
        <Link to={to ?? "/"} className="text-sm text-brand-blue hover:underline flex items-center gap-1">
          Xem tất cả <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

function CtaCard({
  icon: Icon,
  title,
  desc,
  color,
  to,
}: {
  icon: typeof PencilRuler;
  title: string;
  desc: string;
  color: "purple" | "green";
  to: string;
}) {
  const styles =
    color === "purple"
      ? "bg-brand-purple/10 border-brand-purple/30"
      : "bg-brand-green/10 border-brand-green/30";
  const iconBg = color === "purple" ? "bg-brand-purple" : "bg-brand-green";
  return (
    <Link to={to} className={`flex items-center gap-4 p-5 rounded-2xl border-2 border-dashed ${styles} hover:shadow-md transition-shadow`}>
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="font-semibold mb-0.5">{title}</div>
        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </Link>
  );
}
