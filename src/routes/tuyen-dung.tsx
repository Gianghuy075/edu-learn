import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  User,
  Mail,
  Phone,
  Upload,
  X,
  Send,
  Users,
  Rocket,
  Gift,
  Building,
} from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/tuyen-dung")({
  head: () => ({
    meta: [
      { title: "Tuyển dụng đồng đội — GDP-BaseEdu" },
      {
        name: "description",
        content: "Gia nhập đội ngũ GDP-BaseEdu để cùng nhau xây dựng nền tảng giáo dục tương lai vượt trội tại Việt Nam.",
      },
    ],
  }),
  component: RecruitmentPage,
});

interface Job {
  id: string;
  title: string;
  category: "teaching" | "technology" | "operations" | "advisory";
  type: string;
  location: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const JOBS_DATA: Job[] = [
  {
    id: "teaching-math-physics",
    title: "Giảng viên chuyên môn Toán / Vật Lý / Hóa Học (Luyện thi Đại học & Chuyên)",
    category: "teaching",
    type: "Full-time / Part-time",
    location: "Hà Nội / Hybrid",
    salary: "15 - 30 triệu VNĐ",
    experience: "Từ 2 năm trở lên",
    description: "Giảng dạy, ôn luyện thi chất lượng cao cho học sinh lớp 9 thi vào 10 chuyên hoặc học sinh lớp 12 luyện thi THPTQG đạt điểm số bứt phá vượt trội.",
    requirements: [
      "Tốt nghiệp ngành Sư phạm hoặc các ngành có liên quan tại ĐH Sư Phạm, ĐH KHTN, ĐHQGHN,...",
      "Có tối thiểu 2 năm kinh nghiệm giảng dạy ôn thi, có định hướng giảng dạy rõ ràng.",
      "Tác phong sư phạm chuyên nghiệp, giọng nói rõ ràng truyền cảm, không ngọng, nói lắp.",
      "Có tư duy đổi mới phương pháp dạy, ứng dụng tốt công nghệ vào bài giảng."
    ],
    benefits: [
      "Mức thu nhập cạnh tranh dựa trên năng lực và số lượng học sinh đăng ký khóa học.",
      "Được hỗ trợ xây dựng thương hiệu cá nhân chuyên nghiệp và tài trợ quay dựng bài giảng.",
      "Làm việc trong môi trường giáo dục số năng động, hỗ trợ tối đa từ đội ngũ trợ giảng.",
      "Bảo hiểm đầy đủ và các chính sách thưởng lễ, tết, du lịch hàng năm hấp dẫn."
    ]
  },
  {
    id: "tech-fullstack-dev",
    title: "Kỹ sư Phát triển Phần mềm Fullstack (React / Node.js / Python)",
    category: "technology",
    type: "Full-time",
    location: "Hà Nội / Hybrid",
    salary: "20 - 42 triệu VNĐ",
    experience: "Từ 2 năm kinh nghiệm",
    description: "Tham gia phát triển hệ thống quản lý học tập LMS (Learning Management System), ngân hàng câu hỏi đề thi thông minh và các tính năng cá nhân hóa lộ trình học tập bằng công nghệ AI.",
    requirements: [
      "Có ít nhất 2 năm kinh nghiệm làm việc thực tế với React, Next.js, Node.js (Express/NestJS) hoặc Python.",
      "Nắm vững cơ sở dữ liệu quan hệ (PostgreSQL) và phi quan hệ (MongoDB, Redis).",
      "Có kiến thức về Cloud (AWS/GCP), CI/CD và kiến trúc Microservices là lợi thế lớn.",
      "Tư duy logic tốt, khả năng tự nghiên cứu công nghệ mới nhanh và làm việc nhóm hiệu quả."
    ],
    benefits: [
      "Lương cứng hấp dẫn kèm theo lương tháng 13 và các khoản thưởng dự án theo KPI.",
      "Được cấp Macbook Pro/Laptop cấu hình cao để làm việc phục vụ tối đa hiệu suất.",
      "Cơ hội làm chủ công nghệ và phát triển thăng tiến lên Tech Lead trong vòng 1-2 năm.",
      "Hưởng trọn gói chăm sóc sức khỏe định kỳ và tham gia các hoạt động Teambuilding đa dạng."
    ]
  },
  {
    id: "ops-content-dev",
    title: "Chuyên viên Nghiên cứu & Biên soạn Đề thi (Content Developer)",
    category: "operations",
    type: "Full-time / Part-time",
    location: "Hà Nội / Online",
    salary: "10 - 18 triệu VNĐ",
    experience: "Từ 1 năm kinh nghiệm",
    description: "Nghiên cứu xu hướng đề thi mới nhất của Bộ Giáo dục & Đào tạo, tổ chức biên soạn ngân hàng đề thi thử chất lượng cao kèm giải chi tiết cho học sinh toàn quốc.",
    requirements: [
      "Có chuyên môn giỏi ở một trong các môn: Toán, Vật lý, Hóa học, Ngữ văn, Tiếng Anh.",
      "Thấu hiểu cấu trúc đề thi tốt nghiệp THPTQG, đề thi đánh giá năng lực ĐHQG Hà Nội / TP.HCM.",
      "Sử dụng thành thạo các công cụ soạn thảo, gõ công thức (MathType, LaTeX) là một lợi thế.",
      "Cần thận, tỉ mỉ, có trách nhiệm cao với độ chính xác học thuật của nội dung."
    ],
    benefits: [
      "Thu nhập hấp dẫn đi kèm thưởng theo doanh số lượt tải/sử dụng tài nguyên học liệu.",
      "Lịch làm việc linh hoạt (đáp ứng hình thức làm việc trực tuyến một phần).",
      "Nâng cao kiến thức chuyên môn thông qua các khóa đào tạo phương pháp sư phạm hiện đại.",
      "Môi trường tôn trọng học thuật, khuyến khích sáng tạo nội dung mới mẻ."
    ]
  },
  {
    id: "advisory-counselor",
    title: "Chuyên viên Tư vấn Tuyển sinh & Định hướng Học tập (Admission Counselor)",
    category: "advisory",
    type: "Full-time",
    location: "Hà Nội / TP. Hồ Chí Minh",
    salary: "8 - 25 triệu VNĐ (Lương cứng + Thưởng)",
    experience: "Không yêu cầu kinh nghiệm",
    description: "Tiếp nhận thông tin khách hàng tiềm năng đăng ký trên hệ thống, tư vấn định hướng lộ trình ôn luyện phù hợp và đồng hành cùng phụ huynh/học sinh trong suốt khóa học.",
    requirements: [
      "Giọng nói truyền cảm, dễ nghe, có kỹ năng giao tiếp và thuyết phục tốt qua điện thoại.",
      "Yêu thích lĩnh vực giáo dục, có sự thấu hiểu tâm lý phụ huynh và học sinh phổ thông.",
      "Chăm chỉ, kiên trì, chịu được áp lực doanh số và ham học hỏi.",
      "Chưa có kinh nghiệm sẽ được công ty đào tạo chuyên nghiệp từ A-Z có trả lương."
    ],
    benefits: [
      "Lương cơ bản cạnh tranh + hoa hồng không giới hạn theo doanh số (thực nhận trung bình từ 12-25M).",
      "Lộ trình thăng tiến rõ ràng lên vị trí Trưởng nhóm tuyển sinh sau 6 tháng nếu đạt kết quả xuất sắc.",
      "Được tham gia các khóa huấn luyện chuyên sâu về kỹ năng mềm, kỹ năng bán hàng và xử lý từ chối.",
      "Được giảm 50 - 100% học phí các khóa học trên hệ thống dành cho người thân trong gia đình."
    ]
  }
];

const CATEGORIES = [
  { value: "all", label: "Tất cả vị trí" },
  { value: "teaching", label: "Giảng dạy" },
  { value: "technology", label: "Công nghệ" },
  { value: "operations", label: "Vận hành học thuật" },
  { value: "advisory", label: "Tư vấn & Chăm sóc" },
];

const BENEFITS = [
  {
    icon: Rocket,
    title: "Tốc độ phát triển nhanh",
    desc: "Cơ hội thăng tiến rộng mở không dựa trên thâm niên mà dựa hoàn toàn trên năng lực đóng góp thực tế.",
    color: "text-brand-blue bg-blue-50 border-blue-100",
  },
  {
    icon: Users,
    title: "Đồng đội xuất sắc",
    desc: "Làm việc cùng những đồng nghiệp trẻ trung, đầy nhiệt huyết, giỏi công nghệ và có tư duy giáo dục hiện đại.",
    color: "text-brand-green bg-green-50 border-green-100",
  },
  {
    icon: Gift,
    title: "Chế độ đãi ngộ vượt trội",
    desc: "Mức lương cạnh tranh, thưởng nóng liên tục khi vượt KPI và chế độ phúc lợi toàn diện cho cả gia đình.",
    color: "text-brand-orange bg-orange-50 border-orange-100",
  },
];

const FAQS = [
  {
    q: "Quy trình phỏng vấn tại GDP-BaseEdu gồm những vòng nào?",
    a: "Thông thường quy trình sẽ gồm 3 bước: (1) Sàng lọc hồ sơ CV trực tuyến, (2) Phỏng vấn chuyên môn sơ bộ trực tuyến hoặc trực tiếp, và (3) Thử thách thực tế (Dạy thử đối với giáo viên hoặc Test kỹ năng code đối với lập trình viên) trước khi nhận offer chính thức.",
  },
  {
    q: "GDP-BaseEdu có chấp nhận sinh viên mới tốt nghiệp hoặc ứng viên trái ngành không?",
    a: "Có, ở một số vị trí như Chuyên viên Tư vấn Tuyển sinh hoặc Trợ giảng học thuật, chúng tôi luôn chào đón các bạn trẻ nhiệt huyết, chưa có nhiều kinh nghiệm. Bạn sẽ được tham gia khóa đào tạo nội bộ chuyên nghiệp của công ty.",
  },
  {
    q: "Thời gian và hình thức làm việc tại công ty như thế nào?",
    a: "Chúng tôi áp dụng mô hình làm việc Hybrid linh hoạt (kết hợp làm tại văn phòng và làm việc từ xa) tùy theo đặc thù của từng bộ phận. Thời gian làm việc hành chính từ Thứ 2 đến Thứ 6 và sáng Thứ 7.",
  },
];

function RecruitmentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Apply Modal State
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cvLink: "",
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.cvLink.trim()) {
      toast.error("Vui lòng điền đầy đủ các trường thông tin bắt buộc!");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Nộp hồ sơ ứng tuyển thành công! GDP-BaseEdu sẽ liên hệ lại với bạn trong vòng 2-3 ngày làm việc.");
      setApplyingJob(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        cvLink: "",
        coverLetter: "",
      });
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="space-y-16 pb-12">
        {/* HERO SECTION */}
        <section className="relative rounded-3xl bg-gradient-to-br from-[#0f2868] via-[#153488] to-[#2044c9] text-white overflow-hidden py-16 px-8 sm:px-12 md:px-16 shadow-xl">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full -ml-20 -mb-20 blur-2xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/10">
              <Building className="w-3.5 h-3.5" /> Tuyển dụng GDP-BaseEdu
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Kiến Tạo Tương Lai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-200">
                Cùng Đồng Đội Xuất Sắc
              </span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed max-w-2xl">
              GDP-BaseEdu là nền tảng học tập trực tuyến đột phá dành cho học sinh Việt Nam. Chúng tôi liên tục tìm kiếm các đồng đội tận tâm, nhiệt huyết và mong muốn tái định nghĩa trải nghiệm giáo dục số chất lượng cao.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#job-positions"
                className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-95 flex items-center gap-2"
              >
                Xem các vị trí ứng tuyển <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process-timeline"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-colors border border-white/20 backdrop-blur-sm"
              >
                Tìm hiểu quy trình tuyển dụng
              </a>
            </div>
          </div>
        </section>

        {/* WHY WORK HERE / BENEFITS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Tại sao bạn sẽ yêu thích làm việc tại GDP-BaseEdu?</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Chúng tôi xây dựng một môi trường làm việc cởi mở, minh bạch và tạo mọi điều kiện để từng cá nhân tỏa sáng hết mình trong sự nghiệp.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border rounded-2xl p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${benefit.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* STATS HIGHLIGHT */}
        <section className="bg-slate-50 border rounded-3xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-sm">
          {[
            { value: "50+", label: "Thành viên cốt cán" },
            { value: "2M+", label: "Học viên tin dùng" },
            { value: "95%", label: "Mức độ hài lòng" },
            { value: "Hybrid", label: "Chế độ làm việc linh hoạt" },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0f2868]">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* JOB POSITIONS SECTION */}
        <section id="job-positions" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-brand-blue" /> Cơ hội nghề nghiệp đang mở
              </h2>
              <p className="text-sm text-slate-500">
                Hãy chọn phòng ban phù hợp và ứng tuyển ngay hôm nay.
              </p>
            </div>
            {/* SEARCH */}
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kiếm vị trí công việc..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-brand-blue focus:ring-0 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.value
                    ? "bg-[#0f2868] text-white shadow-md"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 animate-fadeIn"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* JOBS GRID */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-blue text-[11px] font-bold uppercase tracking-wider">
                          {job.category === "teaching"
                            ? "Giảng dạy"
                            : job.category === "technology"
                            ? "Công nghệ"
                            : job.category === "operations"
                            ? "Vận hành"
                            : "Tư vấn & CSKH"}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-bold">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 hover:text-brand-blue transition-colors">
                        {job.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {job.description}
                    </p>

                    {/* METADATA */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-slate-400" /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" /> {job.experience}
                      </span>
                    </div>

                    {/* DETAILED ACCORDION SECTION */}
                    <details className="group border-t pt-4">
                      <summary className="list-none flex items-center gap-1 cursor-pointer text-xs font-bold text-slate-500 hover:text-slate-700 select-none">
                        Xem chi tiết yêu cầu & đãi ngộ
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm animate-fadeIn">
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-700">Yêu cầu công việc:</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-700">Quyền lợi được hưởng:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((ben, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                                {ben}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="w-full md:w-auto px-6 py-3 bg-[#0f2868] hover:bg-[#2044c9] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 text-center cursor-pointer"
                    >
                      Ứng tuyển ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 border rounded-2xl py-12 text-center text-slate-500 space-y-2">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="font-bold text-slate-700">Không tìm thấy vị trí tuyển dụng phù hợp</div>
              <p className="text-xs">Hãy thử thay đổi từ khóa tìm kiếm hoặc lọc theo phòng ban khác.</p>
            </div>
          )}
        </section>

        {/* PROCESS SECTION */}
        <section id="process-timeline" className="space-y-10 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Quy trình ứng tuyển đơn giản</h2>
            <p className="text-sm text-slate-500">
              Quy trình nhanh gọn giúp bạn ứng tuyển và nhận kết quả phỏng vấn nhanh chóng.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Nộp hồ sơ", desc: "Ứng viên nộp CV trực tuyến qua hệ thống hoặc nút Ứng tuyển." },
                { step: "02", title: "Sàng lọc & Test", desc: "Đội ngũ HR xem xét hồ sơ và liên hệ làm bài test chuyên môn." },
                { step: "03", title: "Phỏng vấn", desc: "Trao đổi sâu sắc về kinh nghiệm chuyên môn, văn hóa công việc." },
                { step: "04", title: "Onboarding", desc: "Nhận thư mời nhận việc (Offer letter) và chào mừng gia nhập." },
              ].map((step, i) => (
                <div key={i} className="bg-white border rounded-2xl p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-brand-blue font-extrabold text-sm flex items-center justify-center mx-auto border border-blue-100">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">Câu hỏi thường gặp</h2>
            <p className="text-sm text-slate-500">
              Giải đáp một số thắc mắc của ứng viên khi ứng tuyển vào GDP-BaseEdu.
            </p>
          </div>
          
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-sm text-slate-700 hover:text-brand-blue transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* APPLY MODAL */}
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white border rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col relative max-h-[90vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0f2868] to-[#153488] text-white p-6 relative">
                <button
                  onClick={() => setApplyingJob(null)}
                  className="absolute right-4 top-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded uppercase tracking-wider text-blue-200">
                    Nộp Hồ Sơ Ứng Tuyển
                  </span>
                  <h3 className="text-lg font-black leading-tight pr-6">
                    {applyingJob.title}
                  </h3>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleApplySubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Họ và tên ứng viên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Địa chỉ Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nguyenvana@gmail.com"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Số điện thoại liên hệ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0987654321"
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* CV Link */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5 text-slate-400" /> Link CV của bạn (Google Drive/Dropbox,...) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.cvLink}
                    onChange={(e) => setFormData({ ...formData, cvLink: e.target.value })}
                    placeholder="https://drive.google.com/file/d/your-cv-link"
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                  />
                  <p className="text-[10px] text-slate-400 font-normal">Vui lòng mở quyền chia sẻ (Public/Anyone with link) để HR có thể mở xem.</p>
                </div>

                {/* Cover Letter */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Thư giới thiệu / Lời nhắn tới HR (Không bắt buộc)</label>
                  <textarea
                    rows={3}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Chia sẻ lý do bạn muốn đồng hành cùng GDP-BaseEdu..."
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex gap-3 border-t">
                  <button
                    type="button"
                    onClick={() => setApplyingJob(null)}
                    className="flex-1 py-3 border rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors text-center cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-[#0f2868] hover:bg-[#2044c9] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95 disabled:opacity-50 text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>Đang xử lý...</>
                    ) : (
                      <>
                        Gửi hồ sơ ứng tuyển <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
