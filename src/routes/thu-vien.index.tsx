import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { FileQuestion, BookOpen, FileText, TrendingUp, Download, Bookmark, FileBox, File, Filter } from "lucide-react";

export const Route = createFileRoute("/thu-vien/")({
  head: () => ({
    meta: [{ title: "Thư viện tài liệu — GDP-BaseEdu" }],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <AppLayout>
      <div className="space-y-6 pb-20 relative">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white p-8 md:p-12 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold tracking-wider mb-6">
              HỌC LIỆU 2024
            </div>
            <h1 className="text-3xl md:text-[34px] font-bold mb-4 tracking-tight">Thư viện tài liệu GDP-BaseEdu</h1>
            <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-xl">
              Khám phá hơn 10.000+ tài liệu học tập, đề thi và sách giáo khoa điện tử chất lượng cao dành cho mọi cấp học.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-12"></div>
        </div>

        {/* 2 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Column (Sidebar) */}
          <div className="w-full lg:w-72 shrink-0 space-y-6">
            {/* Filter Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-800 mb-6">
                <Filter className="w-5 h-5" /> Bộ lọc
              </h2>
              
              {/* Khối lớp */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-800 mb-4 uppercase tracking-wide">Khối lớp</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#0f2868] focus:ring-[#0f2868]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Lớp 12</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-[#0f2868] focus:ring-[#0f2868]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Lớp 11</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#0f2868] focus:ring-[#0f2868]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Lớp 10</span>
                  </label>
                </div>
              </div>
              
              {/* Môn học */}
              <div>
                <h3 className="text-xs font-bold text-slate-800 mb-4 uppercase tracking-wide">Môn học</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-[#e8edff] text-[#0f2868] transition-colors">Toán học</button>
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Vật lý</button>
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Hóa học</button>
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Tiếng Anh</button>
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Ngữ văn</button>
                  <button className="py-2.5 px-2 text-[11px] font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">Sinh học</button>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
               <h3 className="text-sm font-bold text-slate-800 mb-5">Thống kê cá nhân</h3>
               <div className="space-y-4">
                 <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                   <span className="text-sm font-medium text-slate-600">Đã tải về</span>
                   <span className="font-bold text-lg text-[#0f2868]">12</span>
                 </div>
                 <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-slate-600">Đã lưu</span>
                   <span className="font-bold text-lg text-green-600">08</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column (Main Content) */}
          <div className="flex-1 w-full min-w-0 space-y-10">
            {/* Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border-2 border-[#0f2868] text-[#0f2868] transition-all">
                <FileQuestion className="w-7 h-7 mb-3" />
                <span className="text-xs font-bold text-center">Đề thi thử</span>
              </button>
              <button className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-500 hover:border-[#0f2868] hover:text-[#0f2868] transition-all">
                <BookOpen className="w-7 h-7 mb-3 text-slate-400" />
                <span className="text-xs font-bold text-center">Sách giáo khoa</span>
              </button>
              <button className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-500 hover:border-[#0f2868] hover:text-[#0f2868] transition-all">
                <FileText className="w-7 h-7 mb-3 text-slate-400" />
                <span className="text-xs font-bold text-center">Tài liệu chuyên đề</span>
              </button>
              <button className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-500 hover:border-[#0f2868] hover:text-[#0f2868] transition-all">
                <TrendingUp className="w-7 h-7 mb-3 text-slate-400" />
                <span className="text-xs font-bold text-center">Bài tập nâng cao</span>
              </button>
            </div>

            {/* Popular Documents */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[17px] font-bold text-slate-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> 
                  Tài liệu phổ biến nhất
                </h2>
                <button className="text-[13px] font-semibold text-[#0f2868] hover:underline">Xem tất cả</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Popular Card 1 */}
                <Link to="/thu-vien/$slug" params={{ slug: "chuyen-de-giai-tich-12" }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex gap-5 hover:border-[#0f2868] transition-colors group">
                  <div className="w-[100px] shrink-0 rounded-xl bg-[#e8edff] flex flex-col items-center justify-center p-3 relative overflow-hidden border border-[#d0dbff]">
                     <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-lg">PDF</span>
                     <BookOpen className="w-8 h-8 text-[#0f2868] mb-3 group-hover:scale-110 transition-transform" />
                     <span className="text-[9px] font-bold text-[#0f2868] text-center uppercase tracking-widest">TOÁN HỌC 11</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-800 text-[15px] mb-2 leading-snug group-hover:text-[#0f2868] transition-colors">Bộ đề thi THPT Quốc gia môn Toán - Năm 2024</h3>
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-slate-400" /> 2.4k</span>
                        <span className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-slate-400" /> 4.2 MB</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#f1f5f9] hover:bg-[#0f2868] hover:text-white text-[#0f2868] font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Download className="w-3.5 h-3.5" /> Tải xuống
                    </button>
                  </div>
                </Link>

                {/* Popular Card 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex gap-5">
                  <div className="w-[100px] shrink-0 rounded-xl bg-[#dcfce7] flex flex-col items-center justify-center p-3 relative overflow-hidden border border-[#bbf7d0]">
                     <span className="absolute top-0 right-0 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-lg">DOCX</span>
                     <FileText className="w-8 h-8 text-green-700 mb-3" />
                     <span className="text-[9px] font-bold text-green-700 text-center uppercase tracking-widest">NGỮ VĂN 12</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-800 text-[15px] mb-2 leading-snug">Phân tích các tác phẩm văn học lớp 12 trọng tâm</h3>
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                        <span className="flex items-center gap-1.5"><Download className="w-3.5 h-3.5 text-slate-400" /> 1.8k</span>
                        <span className="flex items-center gap-1.5"><File className="w-3.5 h-3.5 text-slate-400" /> 1.5 MB</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#f1f5f9] hover:bg-slate-200 text-[#0f2868] font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Download className="w-3.5 h-3.5" /> Tải xuống
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Documents */}
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-slate-200 pb-2">
                <h2 className="text-[17px] font-bold text-slate-800">Tất cả tài liệu</h2>
                <div className="flex items-center gap-2 text-[13px] text-slate-500">
                  <span>Sắp xếp theo:</span>
                  <select className="font-semibold text-slate-700 bg-transparent outline-none cursor-pointer">
                    <option>Mới nhất</option>
                    <option>Phổ biến nhất</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* List Item 1 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex items-center gap-5 hover:border-slate-300 transition-colors">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                    <FileBox className="w-7 h-7 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-[15px] truncate mb-1.5">Tóm tắt công thức Giải tích 11 - Học kỳ II</h4>
                    <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>TOÁN HỌC</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>1.2 MB</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>456 LƯỢT TẢI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors"><Bookmark className="w-5 h-5" /></button>
                    <button className="border border-[#0f2868] text-[#0f2868] hover:bg-[#0f2868] hover:text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors">
                      Tải xuống
                    </button>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex items-center gap-5 hover:border-slate-300 transition-colors">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    <FileText className="w-7 h-7 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 text-[15px] truncate mb-1.5">100 Cấu trúc Tiếng Anh thông dụng lớp 12</h4>
                    <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>TIẾNG ANH</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>850 KB</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>1,120 LƯỢT TẢI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors"><Bookmark className="w-5 h-5" /></button>
                    <button className="border border-[#0f2868] text-[#0f2868] hover:bg-[#0f2868] hover:text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-colors">
                      Tải xuống
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0f2868] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center z-50 group">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
      </button>
    </AppLayout>
  );
}
