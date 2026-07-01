import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ZoomOut, ZoomIn, Maximize2,
  User, FileText, File, Eye, Download, Printer, Bookmark,
  ArrowRight, Sigma, FunctionSquare, Calculator, BookOpen, TrendingUp
} from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/thu-vien/$slug")({
  head: () => ({
    meta: [{ title: "Chi tiết tài liệu — GDP-BaseEdu" }],
  }),
  component: DocumentDetailsPage,
});

function DocumentDetailsPage() {
  return (
    <AppLayout>
      <div className="flex flex-col min-h-[calc(100vh-160px)]">
        

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-800">Chuyên đề Giải tích 12 - Tích phân & Ứng dụng</h1>
            <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-green-100 text-green-700 uppercase tracking-widest">
              Advanced
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <button className="hover:text-[#0f2868] transition-colors"><ZoomOut className="w-4 h-4" /></button>
            <span className="text-sm font-semibold w-12 text-center">100%</span>
            <button className="hover:text-[#0f2868] transition-colors"><ZoomIn className="w-4 h-4" /></button>
            <div className="w-px h-4 bg-slate-300"></div>
            <button className="hover:text-[#0f2868] transition-colors"><Maximize2 className="w-4 h-4" /></button>
          </div>
        </div>

        {/* 2 Column Layout */}
        <div className="flex flex-col xl:flex-row gap-6 flex-1">
          
          {/* Left Column (Main Content) */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            
            {/* Mock PDF Viewer */}
            <div className="bg-[#f1f5f9] rounded-2xl border border-slate-200 p-6 md:p-10 flex flex-col items-center relative overflow-hidden">
              {/* Paper */}
              <div className="w-full max-w-[800px] aspect-[1/1.414] bg-white shadow-xl shadow-slate-300/50 rounded-sm relative flex flex-col items-center justify-between">
                {/* Header Bar of Paper */}
                <div className="w-full h-8 bg-[#0f2868] absolute top-0 left-0"></div>
                
                {/* Dummy Content Lines */}
                <div className="w-full px-12 pt-20 pb-12 flex-1 flex flex-col gap-6">
                  {/* Top block */}
                  <div className="flex justify-between items-start">
                     <div className="space-y-3 w-1/3">
                        <div className="h-4 bg-slate-100 rounded-md w-full"></div>
                        <div className="h-4 bg-slate-100 rounded-md w-3/4"></div>
                     </div>
                     <div className="w-16 h-16 bg-[#0f2868] rounded-lg text-white font-bold flex items-center justify-center text-xl">
                        12
                     </div>
                  </div>
                  
                  {/* Text lines */}
                  <div className="space-y-4 mt-8">
                     <div className="h-4 bg-slate-100 rounded-md w-full"></div>
                     <div className="h-4 bg-slate-100 rounded-md w-11/12"></div>
                     <div className="h-4 bg-slate-100 rounded-md w-4/5"></div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full aspect-[2/1] bg-[#f8f9fc] border-2 border-dashed border-slate-200 rounded-xl mt-6 flex items-center justify-center">
                    <span className="text-slate-400 font-medium text-sm">Mathematics Equation Diagram</span>
                  </div>

                  {/* More text lines */}
                  <div className="space-y-4 mt-6">
                     <div className="h-4 bg-slate-100 rounded-md w-full"></div>
                     <div className="h-4 bg-slate-100 rounded-md w-full"></div>
                     <div className="h-4 bg-slate-100 rounded-md w-3/4"></div>
                  </div>
                </div>

                <div className="pb-8 text-xs text-slate-400 font-medium">Page 1 of 42</div>
              </div>
              
              {/* Fake scrollbar */}
              <div className="absolute right-2 top-2 bottom-2 w-2 bg-slate-200 rounded-full">
                <div className="w-full h-32 bg-slate-400 rounded-full"></div>
              </div>
            </div>

            {/* Document Description */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Document Description</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                This comprehensive guide focuses on advanced Calculus topics for Grade 12 students, specifically covering Integrals and their applications in geometry and physics. Designed by academic experts at GDP-BaseEdu, it includes 200+ practice problems, step-by-step solutions, and exam-taking strategies tailored for the national curriculum.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-[#f1f5f9] text-slate-600 text-xs font-semibold hover:bg-slate-200 cursor-pointer transition-colors">#calculus</span>
                <span className="px-3 py-1.5 rounded-full bg-[#f1f5f9] text-slate-600 text-xs font-semibold hover:bg-slate-200 cursor-pointer transition-colors">#grade12</span>
                <span className="px-3 py-1.5 rounded-full bg-[#f1f5f9] text-slate-600 text-xs font-semibold hover:bg-slate-200 cursor-pointer transition-colors">#math_prep</span>
                <span className="px-3 py-1.5 rounded-full bg-[#f1f5f9] text-slate-600 text-xs font-semibold hover:bg-slate-200 cursor-pointer transition-colors">#integrals</span>
              </div>
            </div>

            {/* Related Materials */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Related Materials</h3>
                  <p className="text-sm text-slate-500 mt-1">You might also find these useful for your studies.</p>
                </div>
                <button className="text-sm font-semibold text-[#0f2868] flex items-center gap-1 hover:underline">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Tập bản đồ Giải tích lớp 12", badge: "NEW", badgeCls: "bg-green-500", icon: Sigma },
                  { title: "100 Đề thi thử THPT Quốc gia", badge: "PREMIUM", badgeCls: "bg-blue-600", icon: Calculator },
                  { title: "Hình học không gian lớp 12", icon: FunctionSquare },
                  { title: "Sổ tay công thức Toán 12", icon: BookOpen },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 hover:border-slate-300 transition-colors group cursor-pointer flex flex-col">
                    <div className="w-full aspect-[4/3] bg-[#f8f9fc] rounded-lg mb-4 flex items-center justify-center relative">
                      {item.badge && (
                        <span className={`absolute top-2 left-2 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm tracking-wider ${item.badgeCls}`}>
                          {item.badge}
                        </span>
                      )}
                      <item.icon className="w-8 h-8 text-slate-300 group-hover:text-[#0f2868] transition-colors" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-[13px] leading-snug mb-3 flex-1">{item.title}</h4>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-medium text-slate-400">158 Pages</span>
                      <button className="w-6 h-6 rounded bg-[#f1f5f9] text-[#0f2868] flex items-center justify-center hover:bg-slate-200 transition-colors">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full xl:w-[320px] shrink-0 space-y-6">
            
            {/* Details Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-800">Details</h3>
                  <div className="text-[11px] text-slate-500 mt-0.5">Uploaded on Oct 12, 2023</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <User className="w-4 h-4" /> Author
                  </div>
                  <span className="font-semibold text-slate-800">Mr. Hoang Nam</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <File className="w-4 h-4" /> File Size
                  </div>
                  <span className="font-semibold text-slate-800">4.5 MB</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <BookOpen className="w-4 h-4" /> Pages
                  </div>
                  <span className="font-semibold text-slate-800">42</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Eye className="w-4 h-4" /> Views
                  </div>
                  <span className="font-semibold text-slate-800">2.4k</span>
                </div>
              </div>

              <button className="w-full bg-[#0f2868] hover:bg-[#1a3885] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mb-3 shadow-sm shadow-[#0f2868]/20">
                <Download className="w-4 h-4" /> Download PDF
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Printer className="w-4 h-4" /> Print
                </button>
                <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
                  <Bookmark className="w-4 h-4" /> Save
                </button>
              </div>
            </div>

            {/* Author Profile */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center">
              <img src="https://i.pravatar.cc/150?img=11" alt="Mr. Hoang Nam" className="w-16 h-16 rounded-full border-2 border-white shadow-sm mb-3" />
              <h3 className="font-bold text-slate-800">Mr. Hoang Nam</h3>
              <div className="text-[11px] font-bold text-[#0f2868] uppercase tracking-wider mb-3">Senior Mathematics Lead</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-5 px-2">
                20+ years of teaching experience. Specialized in Olympic math preparation.
              </p>
              <button className="w-full bg-white border border-[#0f2868] hover:bg-slate-50 text-[#0f2868] font-bold text-xs py-2 rounded-lg transition-colors">
                View Full Profile
              </button>
            </div>

            {/* Promo Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white p-6 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">Mock Exams 2024</h3>
                <p className="text-xs opacity-90">Enroll now for early access materials.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
        <div>© 2024 GDP-BaseEdu Academic Platform. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Contact Support</a>
        </div>
      </footer>
    </AppLayout>
  );
}
