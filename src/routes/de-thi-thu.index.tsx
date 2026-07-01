import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Clock, Users, Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { exams } from "@/lib/exams";

export const Route = createFileRoute("/de-thi-thu/")({
  head: () => ({
    meta: [
      { title: "Đề thi thử — GDP-BaseEdu" },
      { name: "description", content: "Danh sách bài kiểm tra" },
    ],
  }),
  component: ExamsPage,
});

const getSubjectColor = (subject: string) => {
  switch (subject) {
    case "Toán học": return { border: "border-l-blue-600", bg: "bg-blue-100", text: "text-blue-700" };
    case "Vật lý": return { border: "border-l-green-600", bg: "bg-green-100", text: "text-green-700" };
    case "Hóa học": return { border: "border-l-orange-600", bg: "bg-orange-100", text: "text-orange-700" };
    case "Tiếng Anh": return { border: "border-l-indigo-600", bg: "bg-indigo-100", text: "text-indigo-700" };
    case "Sinh học": return { border: "border-l-emerald-600", bg: "bg-emerald-100", text: "text-emerald-700" };
    default: return { border: "border-l-[#0f2868]", bg: "bg-slate-100", text: "text-slate-700" };
  }
};

function ExamsPage() {
  return (
    <AppLayout>
      <div className="space-y-8 pb-10">
        
        {/* Header Section */}
        <div>
          <h1 className="text-[28px] font-bold text-slate-800 mb-3 tracking-tight">Danh sách bài kiểm tra</h1>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            Hệ thống tổng hợp các đề kiểm tra định kỳ, cuối kỳ và đề thi thử đại học được biên soạn bởi các giáo viên giàu kinh nghiệm.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Môn học</label>
              <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-3 outline-none focus:border-slate-300 transition-colors">
                <option>Tất cả môn học</option>
                <option>Toán học</option>
                <option>Vật lý</option>
                <option>Hóa học</option>
                <option>Tiếng Anh</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Khối lớp</label>
              <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-3 outline-none focus:border-slate-300 transition-colors">
                <option>Tất cả khối</option>
                <option>Khối 12</option>
                <option>Khối 11</option>
                <option>Khối 10</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Loại kỳ thi</label>
              <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg px-4 py-3 outline-none focus:border-slate-300 transition-colors">
                <option>Tất cả loại</option>
                <option>Kiểm tra 15 phút</option>
                <option>Kiểm tra 1 tiết</option>
                <option>Thi thử THPTQG</option>
              </select>
            </div>

            <div>
              <button className="w-full bg-[#0f2868] hover:bg-[#1a3885] text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Filter className="w-4 h-4" /> Áp dụng bộ lọc
              </button>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((e, index) => {
            const colors = getSubjectColor(e.subject);
            const isHot = index === 0 || index === 3;
            const isNew = index === 1;

            return (
              <div 
                key={e.slug} 
                className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden border-l-4 ${colors.border} flex flex-col`}
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}>
                        {e.subject}
                      </span>
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                        {e.grade}
                      </span>
                    </div>
                    {isHot && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-red-600 text-white tracking-wider">
                        HOT
                      </span>
                    )}
                    {isNew && (
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-blue-600 text-white tracking-wider">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-800 mb-5 leading-snug line-clamp-2 min-h-[3rem]">
                    {e.title}
                  </h3>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm text-slate-600 mb-6 flex-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0f2868]" />
                      <span>{e.minutes} phút</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0f2868]" />
                      <span>{e.questions.length} câu hỏi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0f2868]" />
                      <span>15/12/2023</span> {/* Mocked date */}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0f2868]" />
                      <span>{(e.attempts / 1000).toFixed(1)}k lượt làm</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to="/de-thi-thu/$slug"
                    params={{ slug: e.slug }}
                    className="block w-full text-center py-2.5 border-2 border-[#0f2868] text-[#0f2868] font-bold rounded-lg hover:bg-[#0f2868] hover:text-white transition-colors"
                  >
                    Bắt đầu làm bài
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 pt-8">
          <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#0f2868] text-white font-semibold flex items-center justify-center">
            1
          </button>
          <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-50" disabled>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </AppLayout>
  );
}
