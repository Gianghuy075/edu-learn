import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { Star, Clock, Users, ChevronRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/exam-prep/")({
  head: () => ({
    meta: [{ title: "Lớp luyện thi chứng chỉ quốc tế — GDP-BaseEdu" }],
  }),
  component: ExamPrepListPage,
});

const courses = [
  {
    id: "ielts-6-5-than-toc",
    title: "Luyện thi IELTS 6.5+ Thần Tốc",
    description: "Khóa học thiết kế đặc biệt giúp học viên bứt phá điểm số IELTS trong 12 tuần với phương pháp học tập độc quyền.",
    category: "IELTS",
    badgeColor: "bg-red-500",
    instructor: "Ms. Helena",
    rating: 4.9,
    reviews: 128,
    duration: "12 tuần",
    students: "1.2k+",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sat-1500-masterclass",
    title: "SAT 1500+ Masterclass",
    description: "Lộ trình toàn diện chinh phục mức điểm 1500+ SAT, tập trung mạnh vào Toán nâng cao và Kỹ năng Đọc hiểu.",
    category: "SAT",
    badgeColor: "bg-blue-600",
    instructor: "Mr. Hoang Nam",
    rating: 5.0,
    reviews: 245,
    duration: "16 tuần",
    students: "850+",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "toeic-850-thuc-chien",
    title: "Luyện thi TOEIC 850+ Thực Chiến",
    description: "Khóa học tập trung giải đề thi thật TOEIC Format mới nhất, mẹo tránh bẫy và tối ưu thời gian làm bài.",
    category: "TOEIC",
    badgeColor: "bg-amber-500",
    instructor: "Mr. David",
    rating: 4.8,
    reviews: 312,
    duration: "8 tuần",
    students: "3.5k+",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "dgnl-dhqg-ha-noi",
    title: "Luyện thi ĐGNL ĐHQG Hà Nội",
    description: "Hệ thống toàn bộ kiến thức cấp 3, rèn luyện tư duy logic và kỹ năng giải quyết vấn đề theo cấu trúc đề ĐGNL.",
    category: "ĐGNL",
    badgeColor: "bg-emerald-600",
    instructor: "Thầy Hữu Thắng",
    rating: 4.7,
    reviews: 156,
    duration: "10 tuần",
    students: "2.1k+",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
  }
];

function ExamPrepListPage() {
  return (
    <AppLayout>
      <div className="space-y-10 pb-20">
        
        {/* Hero Banner */}
        <div className="rounded-3xl bg-[#0f2868] text-white p-10 md:p-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wider mb-6">
                <BookOpen className="w-3.5 h-3.5" /> CHƯƠNG TRÌNH ĐÀO TẠO
             </span>
             <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
               Chinh phục mục tiêu<br className="hidden md:block"/> với các lớp luyện thi quốc tế
             </h1>
             <p className="text-blue-100 text-lg mb-8 max-w-xl leading-relaxed">
               Hệ thống khóa học IELTS, SAT, TOEIC được thiết kế độc quyền bởi các chuyên gia học thuật hàng đầu, cam kết đầu ra bằng văn bản.
             </p>
             <button className="bg-white text-[#0f2868] font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-slate-50 hover:-translate-y-0.5 transition-all">
               Nhận tư vấn miễn phí
             </button>
          </div>
          
          {/* Decor elements */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-10"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {['Tất cả', 'IELTS', 'SAT', 'TOEIC', 'ĐGNL'].map((tab, idx) => (
            <button 
              key={tab}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                idx === 0 
                  ? "bg-[#0f2868] text-white shadow-md shadow-[#0f2868]/20" 
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:border-[#0f2868]/50 hover:shadow-md transition-all">
              {/* Image */}
              <div className="w-full aspect-[16/9] relative bg-slate-100 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm ${course.badgeColor}`}>
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <div className="flex items-center gap-1.5 text-yellow-500 font-bold">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-medium text-xs">({course.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs">
                    <Users className="w-4 h-4" /> {course.students}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-[#0f2868] transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>

                {/* Footer Info */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-200">
                        <img src={`https://i.pravatar.cc/150?u=${course.id}`} alt="Instructor" className="w-full h-full object-cover"/>
                     </div>
                     <div>
                       <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Giảng viên</div>
                       <div className="text-sm font-semibold text-slate-700">{course.instructor}</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-1.5 text-slate-500 text-sm font-semibold bg-slate-50 px-3 py-1.5 rounded-lg">
                     <Clock className="w-4 h-4" /> {course.duration}
                   </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="px-6 pb-6">
                <Link 
                  to="/exam-prep/$slug" 
                  params={{ slug: course.id }}
                  className="w-full bg-[#f8f9fc] hover:bg-[#0f2868] text-[#0f2868] hover:text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors border border-transparent hover:border-[#0f2868]"
                >
                  Xem chi tiết <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}
