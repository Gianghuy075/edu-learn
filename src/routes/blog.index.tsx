import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { LayoutGrid, List, Calendar, Eye, ArrowRight, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [{ title: "Blog & Tin tức — GDP-BaseEdu" }],
  }),
  component: BlogListPage,
});

const blogPosts = [
  {
    id: "nhung-thay-doi-quan-trong",
    title: "Những thay đổi quan trọng trong quy chế tuyển sinh đại học 2024",
    excerpt: "Cập nhật các mốc thời gian và quy định mới nhất từ Bộ Giáo dục mà thí sinh cần nắm vững.",
    category: "TIN TỨC GIÁO DỤC",
    badgeColor: "bg-teal-500",
    date: "18 Tháng 10, 2023",
    author: "BTV GDP-BaseEdu",
    authorColor: "bg-indigo-300"
  },
  {
    id: "phuong-phap-pomodoro",
    title: "Phương pháp Pomodoro: Bí quyết tập trung cao độ khi ôn thi",
    excerpt: "Làm thế nào để duy trì sự tập trung trong 4 tiếng học liên tục mà không bị mệt mỏi.",
    category: "PHƯƠNG PHÁP HỌC TẬP",
    badgeColor: "bg-orange-500",
    date: "15 Tháng 10, 2023",
    author: "Thầy Nam Vũ",
    authorColor: "bg-green-500"
  },
  {
    id: "tong-hop-de-thi-ielts",
    title: "Tổng hợp bộ đề thi thử IELTS 2023 sát thực tế nhất",
    excerpt: "GDP-BaseEdu đã chọn lọc 10 bộ đề dự đoán cho kỹ năng Speaking và Writing đáng tin cậy.",
    category: "KINH NGHIỆM ÔN THI",
    badgeColor: "bg-blue-500",
    date: "12 Tháng 10, 2023",
    author: "Cô Mai Anh",
    authorColor: "bg-orange-300"
  },
  {
    id: "danh-sach-hoc-bong",
    title: "Công bố danh sách học bổng toàn phần du học Mỹ năm nay",
    excerpt: "Nhiều trường đại học danh tiếng vừa mở đơn xét tuyển học bổng với giá trị cực khủng.",
    category: "TIN TỨC GIÁO DỤC",
    badgeColor: "bg-teal-500",
    date: "10 Tháng 10, 2023",
    author: "BTV GDP-BaseEdu",
    authorColor: "bg-indigo-300"
  }
];

function BlogListPage() {
  return (
    <AppLayout>
      <div className="space-y-10 pb-16">
        
        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-7/12 aspect-[4/3] md:aspect-auto bg-slate-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
              alt="Featured post" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex px-3 py-1 bg-blue-50 text-[#0f2868] text-[11px] font-bold tracking-widest uppercase rounded-full mb-6 w-max">
              Kinh nghiệm ôn thi
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0f2868] leading-tight mb-5">
              Bí quyết đạt điểm tuyệt đối trong kỳ thi SAT: Lộ trình 3 tháng hiệu quả
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Chia sẻ chi tiết từ các thủ khoa về cách phân bổ thời gian, tài liệu ôn tập chuẩn xác và tâm lý phòng thi vững vàng để chinh phục mốc điểm mơ ước.
            </p>
            <div className="flex items-center gap-6 text-[13px] font-medium text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 25 Tháng 10, 2023
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" /> 2.4k lượt xem
              </div>
            </div>
            <Link 
              to="/blog/$slug" 
              params={{ slug: "bi-quyet-diem-cao-sat" }}
              className="bg-[#0f2868] hover:bg-[#1a3885] text-white font-bold py-3.5 px-8 rounded-lg w-max transition-colors"
            >
              Đọc bài viết
            </Link>
          </div>
        </div>

        {/* Header & View Toggle */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Bài viết mới nhất</h2>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:border-[#0f2868] transition-colors group cursor-pointer">
              {/* Card Image area */}
              <div className="w-full aspect-video bg-slate-100 relative">
                 <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop" 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <span className={`absolute top-4 left-4 ${post.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm z-10`}>
                   {post.category}
                 </span>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-[11px] font-medium text-slate-500 mb-3">{post.date}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-[#0f2868] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[13px] text-slate-600 mb-6 line-clamp-2 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                
                {/* Card Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${post.authorColor} flex items-center justify-center text-white text-xs font-bold shadow-inner`}>
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{post.author}</span>
                  </div>
                  <Link 
                    to="/blog/$slug" 
                    params={{ slug: post.id }}
                    className="text-[#0f2868] text-[13px] font-bold flex items-center gap-1.5 hover:underline"
                  >
                    Đọc tiếp <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 pt-8">
          <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#0f2868] text-white font-bold flex items-center justify-center shadow-md">
            1
          </button>
        </div>

      </div>
    </AppLayout>
  );
}
