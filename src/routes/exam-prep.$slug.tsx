import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { 
  Star, Users, Clock, Globe, Shield, 
  CheckCircle2, PlayCircle, FileText, Download, User as UserIcon,
  MessageCircle, Award
} from "lucide-react";

export const Route = createFileRoute("/exam-prep/$slug")({
  head: () => ({
    meta: [{ title: "Luyện thi IELTS 6.5+ Thần Tốc — GDP-BaseEdu" }],
  }),
  component: ExamPrepDetailPage,
});

function ExamPrepDetailPage() {
  return (
    <AppLayout>
      <div className="pb-24">
        

        {/* 2 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          
          {/* Main Content (Left) */}
          <div className="flex-1 min-w-0 space-y-10">
            
            {/* Header / Intro */}
            <div>
              <span className="inline-flex px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4 border border-red-100">
                Chứng chỉ IELTS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Luyện thi IELTS 6.5+ Thần Tốc
              </h1>
              <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                Khóa học thiết kế đặc biệt giúp học viên bứt phá điểm số IELTS trong 12 tuần với phương pháp học tập độc quyền, tập trung sâu vào kỹ năng Writing & Speaking.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-1.5 font-bold text-yellow-500">
                  <Star className="w-4 h-4 fill-yellow-500" /> 4.9 
                  <span className="text-slate-400 font-medium text-xs ml-1">(128 đánh giá)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-400" /> 1,250 học viên
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" /> Tiếng Việt, Tiếng Anh
                </div>
              </div>

              {/* Cover Video/Image */}
              <div className="w-full aspect-video bg-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer shadow-md">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Course Cover" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                     <PlayCircle className="w-10 h-10 text-white fill-white/10" />
                   </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-200 sticky top-20 bg-[#f8f9fc] z-10 pt-4">
              <button className="pb-3 border-b-2 border-[#0f2868] text-[#0f2868] font-bold text-sm">Tổng quan</button>
              <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Nội dung khóa học</button>
              <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Giảng viên</button>
              <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Đánh giá</button>
            </div>

            {/* What you'll learn */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Bạn sẽ học được gì?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Nắm vững format đề thi IELTS chuẩn xác nhất",
                  "Chiến thuật phân bổ thời gian làm Reading & Listening",
                  "Công thức triển khai ý tưởng Writing Task 2 đạt 7.0+",
                  "Template Speaking linh hoạt, tự nhiên như người bản xứ",
                  "Mẹo tránh bẫy tâm lý trong phòng thi",
                  "Được chấm chữa bài 1-1 hàng tuần bởi cựu giám khảo"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Nội dung khóa học</h2>
                  <p className="text-sm text-slate-500 mt-1">12 tuần • 48 bài giảng • 6 bài thi thử</p>
                </div>
                <button className="text-[#0f2868] text-sm font-semibold hover:underline">Mở rộng tất cả</button>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Module 1 (Open) */}
                <div className="border-b border-slate-200">
                  <button className="w-full bg-slate-50 p-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors">
                    <div className="font-bold text-slate-800">Tuần 1-2: Xây dựng nền tảng Vocabulary & Grammar</div>
                    <ChevronRight className="w-5 h-5 text-slate-400 rotate-90 transition-transform" />
                  </button>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between text-sm group cursor-pointer">
                      <div className="flex items-center gap-3 text-slate-700 group-hover:text-[#0f2868]">
                        <PlayCircle className="w-4 h-4 text-blue-500" /> Bài 1: Cấu trúc câu phức trong IELTS
                      </div>
                      <span className="text-slate-400 text-xs">45:00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm group cursor-pointer">
                      <div className="flex items-center gap-3 text-slate-700 group-hover:text-[#0f2868]">
                        <PlayCircle className="w-4 h-4 text-blue-500" /> Bài 2: Từ vựng chủ đề Environment & Technology
                      </div>
                      <span className="text-slate-400 text-xs">38:20</span>
                    </div>
                    <div className="flex items-center justify-between text-sm group cursor-pointer">
                      <div className="flex items-center gap-3 text-slate-700 group-hover:text-[#0f2868]">
                        <FileText className="w-4 h-4 text-orange-500" /> Bài tập thực hành Tuần 1
                      </div>
                      <span className="text-slate-400 text-xs font-semibold text-orange-500">Bắt buộc</span>
                    </div>
                  </div>
                </div>

                {/* Module 2 (Closed) */}
                <div className="border-b border-slate-200">
                  <button className="w-full bg-white p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                    <div className="font-bold text-slate-800">Tuần 3-5: Chiến thuật Reading & Listening</div>
                    <ChevronRight className="w-5 h-5 text-slate-400 transition-transform" />
                  </button>
                </div>
                
                {/* Module 3 (Closed) */}
                <div>
                  <button className="w-full bg-white p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                    <div className="font-bold text-slate-800">Tuần 6-12: Kỹ năng chuyên sâu Writing & Speaking</div>
                    <ChevronRight className="w-5 h-5 text-slate-400 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6">Giảng viên</h2>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                <img src="https://i.pravatar.cc/150?u=mshelena" alt="Ms. Helena" className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Ms. Helena Nguyen</h3>
                  <div className="text-[#0f2868] text-sm font-semibold mb-4">IELTS 8.5 (Speaking 9.0) - Giảng viên GDP-BaseEdu</div>
                  <div className="flex items-center gap-6 mb-4 text-sm text-slate-600 font-medium">
                    <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> 4.9 Rating</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 5k+ Học viên</span>
                    <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> TESOL Certified</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Với hơn 8 năm kinh nghiệm giảng dạy IELTS tại các trung tâm lớn, cô Helena nổi tiếng với phương pháp dạy học sinh động, tập trung vào bản chất ngôn ngữ thay vì học vẹt. Đặc biệt cô có lộ trình cá nhân hóa giúp học viên tăng ít nhất 1.0 band điểm Speaking trong vòng 1 tháng.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Sidebar (Right) */}
          <div className="w-full lg:w-[360px] shrink-0 sticky top-24">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
               {/* Pricing */}
               <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                 <div className="flex items-end gap-3 mb-2">
                   <span className="text-3xl font-extrabold text-slate-900">4.500.000đ</span>
                   <span className="text-lg text-slate-400 line-through font-semibold mb-1">6.000.000đ</span>
                 </div>
                 <div className="text-red-500 font-semibold text-sm flex items-center gap-1.5 mb-6">
                   <Clock className="w-4 h-4" /> Ưu đãi kết thúc sau 2 ngày!
                 </div>
                 <button className="w-full bg-[#0f2868] hover:bg-[#1a3885] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#0f2868]/30 transition-all hover:-translate-y-0.5 mb-3">
                   Đăng ký học ngay
                 </button>
                 <div className="text-center text-xs text-slate-500 font-medium">
                   Đảm bảo hoàn tiền trong 7 ngày đầu tiên
                 </div>
               </div>

               {/* Details List */}
               <div className="p-8 space-y-4 text-sm text-slate-600">
                 <div className="font-bold text-slate-800 mb-2 text-base">Thông tin khóa học</div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-slate-400" /> Thời lượng</div>
                   <span className="font-semibold text-slate-800">12 tuần</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3"><PlayCircle className="w-4 h-4 text-slate-400" /> Hình thức</div>
                   <span className="font-semibold text-slate-800">Video + Livestream</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3"><Download className="w-4 h-4 text-slate-400" /> Tài liệu</div>
                   <span className="font-semibold text-slate-800">Giáo trình + 20 PDF</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3"><Shield className="w-4 h-4 text-slate-400" /> Chứng nhận</div>
                   <span className="font-semibold text-slate-800">Cấp sau khóa học</span>
                 </div>
               </div>

               {/* Support contact */}
               <div className="p-6 bg-blue-50 m-2 rounded-2xl flex items-center gap-4 border border-blue-100">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                   <MessageCircle className="w-5 h-5 text-[#0f2868]" />
                 </div>
                 <div>
                   <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-0.5">Tư vấn trực tiếp</div>
                   <div className="text-sm font-bold text-slate-800">Hotline: 1900 8080</div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}
