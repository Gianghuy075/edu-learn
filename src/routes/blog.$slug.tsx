import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";
import { Calendar, Eye, Share2, Facebook, Twitter, Link as LinkIcon, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [{ title: "Bí quyết đạt điểm tuyệt đối trong kỳ thi SAT — GDP-BaseEdu" }],
  }),
  component: BlogDetailPage,
});

function BlogDetailPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pb-20">
        

        {/* Blog Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex px-3 py-1 bg-blue-50 text-[#0f2868] text-[11px] font-bold tracking-widest uppercase rounded-full mb-6">
            Kinh nghiệm ôn thi
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-8">
            Bí quyết đạt điểm tuyệt đối trong kỳ thi SAT: Lộ trình 3 tháng hiệu quả
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold shadow-inner">
                B
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800">BTV GDP-BaseEdu</div>
                <div className="text-xs">Chuyên gia tư vấn</div>
              </div>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> 25 Tháng 10, 2023
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> 2.4k lượt xem
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] bg-slate-100 rounded-2xl md:rounded-[2rem] overflow-hidden mb-12 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop" 
            alt="Hero cover" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Social Share Sticky Sidebar */}
          <div className="hidden lg:flex flex-col items-center gap-4 w-12 shrink-0 pt-4">
            <div className="sticky top-32 flex flex-col items-center gap-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Chia sẻ</span>
              <div className="w-px h-8 bg-slate-200"></div>
              <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-600 hover:text-white transition-all">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <article className="flex-1 min-w-0 text-slate-700 text-base md:text-lg leading-relaxed">
            <p className="mb-6">
              Kỳ thi SAT (Scholastic Assessment Test) luôn là một trong những cột mốc quan trọng nhất đối với học sinh có dự định du học Mỹ. Việc đạt điểm tuyệt đối 1600/1600 không phải là nhiệm vụ bất khả thi nếu bạn có một lộ trình ôn tập khoa học và tâm lý phòng thi vững vàng.
            </p>
            
            <p className="mb-8">
              Trong bài viết này, GDP-BaseEdu sẽ chia sẻ chi tiết từ các thủ khoa về cách phân bổ thời gian trong 3 tháng cuối cùng, tài liệu ôn tập chuẩn xác và các mẹo làm bài thi hiệu quả nhất.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Tháng 1: Củng cố nền tảng và phát hiện lỗ hổng kiến thức</h2>
            
            <p className="mb-6">
              Trong tháng đầu tiên của lộ trình 3 tháng, mục tiêu lớn nhất của bạn không phải là giải đề liên tục, mà là rà soát lại toàn bộ kiến thức nền tảng. Rất nhiều học sinh mắc sai lầm khi lao vào luyện đề ngay từ đầu mà bỏ qua bước củng cố này.
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li><strong className="text-slate-900">Phần Toán (Math):</strong> Xem lại các công thức Đại số (Algebra), Phân tích dữ liệu (Problem Solving and Data Analysis) và Toán cao cấp (Advanced Math).</li>
              <li><strong className="text-slate-900">Phần Đọc (Reading):</strong> Làm quen với 5 loại văn bản thường xuất hiện: Văn học, Lịch sử, Khoa học xã hội, và 2 bài Khoa học tự nhiên. Tập trung vào việc xây dựng từ vựng.</li>
              <li><strong className="text-slate-900">Phần Viết (Writing & Language):</strong> Ôn tập vững chắc các quy tắc ngữ pháp cơ bản như sự hòa hợp chủ vị, dấu câu, và cấu trúc song song.</li>
            </ul>

            <blockquote className="border-l-4 border-[#0f2868] bg-[#f8f9fc] p-6 rounded-r-xl my-10 italic text-slate-600 font-medium">
              "Bí quyết lớn nhất để nâng điểm Reading là đọc thật nhiều các bài báo khoa học và tạp chí tiếng Anh hàng ngày thay vì chỉ cắm cúi vào sách luyện thi SAT." - Nguyễn Trần Bảo Ngọc (SAT 1590)
            </blockquote>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Tháng 2: Luyện đề và phân tích lỗi sai</h2>
            
            <p className="mb-6">
              Sau khi đã vững kiến thức nền, tháng thứ 2 là thời điểm vàng để bạn bắt tay vào giải các đề thi thật (Past Papers) hoặc các bộ đề chuẩn từ College Board. Tuy nhiên, số lượng đề không quan trọng bằng chất lượng sau mỗi lần giải.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-3">Checklist phân tích lỗi sai:</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-start gap-3"><input type="checkbox" checked readOnly className="mt-1" /> Ghi chép lại câu sai vào một quyển sổ riêng (Error Log).</label>
                <label className="flex items-start gap-3"><input type="checkbox" checked readOnly className="mt-1" /> Phân loại lỗi sai: Sai do thiếu kiến thức, sai do bất cẩn, hay sai do áp lực thời gian?</label>
                <label className="flex items-start gap-3"><input type="checkbox" checked readOnly className="mt-1" /> Tìm hiểu sâu lý do tại sao phương án mình chọn lại sai và phương án đúng lại hợp lý.</label>
              </div>
            </div>

            <p className="mb-6">
              Đừng nản lòng nếu điểm số trong giai đoạn này chưa cao như kỳ vọng. Đây là lúc não bộ đang điều chỉnh để làm quen với áp lực thời gian của bài thi thật.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-indigo-300 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-inner">
                B
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-xl text-slate-900 mb-1">BTV GDP-BaseEdu</div>
                <p className="text-sm text-slate-500 mb-3">Nhóm chuyên gia tư vấn giáo dục và tuyển sinh đại học quốc tế tại GDP-BaseEdu với hơn 10 năm kinh nghiệm.</p>
                <button className="text-[#0f2868] text-sm font-bold hover:underline">Xem thêm bài viết của tác giả</button>
              </div>
            </div>
            
          </article>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-slate-900">Bài viết liên quan</h2>
             <Link to="/blog" className="text-sm font-bold text-[#0f2868] flex items-center gap-1 hover:underline">
               Xem tất cả <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "nhung-thay-doi-quan-trong",
                title: "Những thay đổi quan trọng trong quy chế tuyển sinh đại học 2024",
                category: "TIN TỨC",
                date: "18/10/2023"
              },
              {
                id: "phuong-phap-pomodoro",
                title: "Phương pháp Pomodoro: Bí quyết tập trung cao độ khi ôn thi",
                category: "PHƯƠNG PHÁP",
                date: "15/10/2023"
              },
              {
                id: "tong-hop-de-thi-ielts",
                title: "Tổng hợp bộ đề thi thử IELTS 2023 sát thực tế nhất",
                category: "TÀI LIỆU",
                date: "12/10/2023"
              }
            ].map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="w-full aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop" alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-slate-800 uppercase tracking-wider">{post.category}</div>
                </div>
                <div className="text-[11px] font-medium text-slate-500 mb-2">{post.date}</div>
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-[#0f2868] transition-colors">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
