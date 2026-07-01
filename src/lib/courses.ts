import courseMath from "@/assets/course-math.jpg";
import courseLit from "@/assets/course-lit.jpg";
import courseEnglish from "@/assets/course-english.jpg";
import coursePhysics from "@/assets/course-physics.jpg";

export type Course = {
  slug: string;
  title: string;
  subject: string;
  grade: string;
  level: string;
  levelColor: string;
  rating: number;
  lessons: number;
  weeks: number;
  students: number;
  price: number;
  image: string;
  teacher: { name: string; title: string; school: string };
  short: string;
  long: string;
  outcomes: string[];
  syllabus: { week: string; title: string; lessons: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "luyen-de-toan-vao-10",
    title: "Luyện đề Toán vào 10",
    subject: "Toán học",
    grade: "Lớp 9",
    level: "Cấp 2",
    levelColor: "bg-brand-green",
    rating: 4.9,
    lessons: 24,
    weeks: 6,
    students: 1280,
    price: 899000,
    image: courseMath,
    teacher: {
      name: "Thầy Nguyễn Văn An",
      title: "Thạc sĩ Toán học",
      school: "THPT Chuyên Hà Nội – Amsterdam",
    },
    short: "Lộ trình bứt phá điểm số vào các trường Công lập hàng đầu.",
    long: "Khóa học tổng hợp toàn bộ dạng đề Toán tuyển sinh vào lớp 10 trong 5 năm gần nhất, phân loại theo mức độ và có video chữa chi tiết từng câu.",
    outcomes: [
      "Nắm chắc 12 dạng bài trọng tâm trong đề thi vào 10",
      "Thành thạo kỹ năng phân tích đề và trình bày lời giải",
      "Tự tin đạt 8.5+ trong kỳ thi tuyển sinh",
      "Được chữa đề trực tiếp cùng giáo viên hàng tuần",
    ],
    syllabus: [
      {
        week: "Tuần 1",
        title: "Rút gọn biểu thức & Bài toán liên quan",
        lessons: ["Bài 1: Rút gọn căn thức", "Bài 2: Các bài toán chứng minh", "Bài 3: Đề thi thử tuần 1"],
      },
      {
        week: "Tuần 2",
        title: "Hệ phương trình & Bài toán thực tế",
        lessons: ["Bài 4: Giải hệ phương trình", "Bài 5: Bài toán chuyển động", "Bài 6: Đề thi thử tuần 2"],
      },
      {
        week: "Tuần 3",
        title: "Hàm số bậc hai & Đồ thị",
        lessons: ["Bài 7: Parabol và đường thẳng", "Bài 8: Tìm tham số m", "Bài 9: Đề thi thử tuần 3"],
      },
      {
        week: "Tuần 4",
        title: "Hình học phẳng – Đường tròn",
        lessons: ["Bài 10: Tứ giác nội tiếp", "Bài 11: Tiếp tuyến & cát tuyến", "Bài 12: Đề thi thử tuần 4"],
      },
      {
        week: "Tuần 5 – 6",
        title: "Luyện đề tổng hợp & Chữa đề",
        lessons: ["12 đề thi thử sát cấu trúc mới", "Livestream chữa đề mỗi cuối tuần"],
      },
    ],
  },
  {
    slug: "ky-nang-viet-van-nghi-luan",
    title: "Kỹ năng Viết Văn nghị luận",
    subject: "Ngữ văn",
    grade: "Lớp 12",
    level: "Nâng cao",
    levelColor: "bg-brand-orange",
    rating: 4.8,
    lessons: 18,
    weeks: 4,
    students: 940,
    price: 750000,
    image: courseLit,
    teacher: {
      name: "Cô Trần Thị Mai",
      title: "Tiến sĩ Ngữ văn",
      school: "ĐH Sư phạm Hà Nội",
    },
    short: "Chinh phục dạng bài nghị luận xã hội & nghị luận văn học.",
    long: "Xây dựng tư duy phân tích, cách mở bài ấn tượng và luận điểm sắc bén, giúp bài viết đạt điểm cao trong kỳ thi THPT Quốc gia.",
    outcomes: [
      "Thành thạo cấu trúc bài NLXH và NLVH",
      "Kho luận điểm & dẫn chứng phong phú",
      "Kỹ năng mở – kết bài ấn tượng",
      "Được cô chấm chữa bài cá nhân",
    ],
    syllabus: [
      { week: "Tuần 1", title: "Nền tảng nghị luận", lessons: ["Cấu trúc bài NLXH", "Cấu trúc bài NLVH"] },
      { week: "Tuần 2", title: "Kỹ thuật lập luận", lessons: ["Luận điểm – Luận cứ", "Dẫn chứng đắt giá"] },
      { week: "Tuần 3", title: "Phân tích tác phẩm trọng tâm", lessons: ["Tây Tiến", "Việt Bắc", "Đất Nước"] },
      { week: "Tuần 4", title: "Luyện đề & chữa bài", lessons: ["8 đề luyện tập", "Livestream chữa bài"] },
    ],
  },
  {
    slug: "cap-toc-tieng-anh-thpt",
    title: "Cấp tốc Tiếng Anh THPT",
    subject: "Tiếng Anh",
    grade: "Lớp 12",
    level: "Cấp tốc",
    levelColor: "bg-brand-blue",
    rating: 5.0,
    lessons: 30,
    weeks: 8,
    students: 2100,
    price: 1200000,
    image: courseEnglish,
    teacher: {
      name: "Ms. Lê Hồng Nhung",
      title: "IELTS 8.5 – MA TESOL",
      school: "British Council Vietnam",
    },
    short: "Bứt tốc 2+ điểm Tiếng Anh trong 8 tuần với lộ trình cá nhân hóa.",
    long: "Tập trung vào 4 chuyên đề trọng tâm chiếm 80% đề thi: Ngữ pháp, Từ vựng, Đọc hiểu và Chức năng giao tiếp.",
    outcomes: [
      "Nắm 100% ngữ pháp trọng tâm THPT",
      "1500+ từ vựng theo chủ đề đề thi",
      "Kỹ năng làm bài đọc trong 12 phút",
      "Cam kết tăng ít nhất 2 điểm",
    ],
    syllabus: [
      { week: "Tuần 1-2", title: "Ngữ pháp trọng tâm", lessons: ["Thì động từ", "Câu điều kiện", "Mệnh đề quan hệ"] },
      { week: "Tuần 3-4", title: "Từ vựng theo chủ đề", lessons: ["Education", "Environment", "Technology"] },
      { week: "Tuần 5-6", title: "Kỹ năng đọc hiểu", lessons: ["Skimming & Scanning", "Suy luận ngữ nghĩa"] },
      { week: "Tuần 7-8", title: "Luyện đề tổng hợp", lessons: ["10 đề bám sát cấu trúc"] },
    ],
  },
  {
    slug: "tong-on-vat-ly-12",
    title: "Tổng ôn Vật Lý 12",
    subject: "Vật lý",
    grade: "Lớp 12",
    level: "Cấp 3",
    levelColor: "bg-brand-purple",
    rating: 4.7,
    lessons: 20,
    weeks: 5,
    students: 860,
    price: 950000,
    image: coursePhysics,
    teacher: {
      name: "Thầy Phạm Quốc Bảo",
      title: "Thạc sĩ Vật lý",
      school: "THPT Chuyên KHTN",
    },
    short: "Tổng ôn toàn diện kiến thức 12 và luyện đề thi minh họa mới nhất.",
    long: "Hệ thống lại toàn bộ 7 chương Vật lý 12 kèm bộ công thức rút gọn và mẹo giải nhanh trắc nghiệm.",
    outcomes: [
      "Bản đồ tư duy 7 chương Vật lý 12",
      "Bộ 200 công thức giải nhanh",
      "Kỹ năng bấm máy Casio thần tốc",
      "Chinh phục 9+ điểm THPTQG",
    ],
    syllabus: [
      { week: "Tuần 1", title: "Dao động cơ", lessons: ["Con lắc lò xo", "Con lắc đơn"] },
      { week: "Tuần 2", title: "Sóng cơ & Sóng âm", lessons: ["Giao thoa", "Sóng dừng"] },
      { week: "Tuần 3", title: "Điện xoay chiều", lessons: ["Mạch RLC", "Máy biến áp"] },
      { week: "Tuần 4", title: "Sóng ánh sáng & Lượng tử", lessons: ["Giao thoa ánh sáng", "Hiệu ứng quang điện"] },
      { week: "Tuần 5", title: "Luyện đề tổng hợp", lessons: ["6 đề thi thử THPTQG"] },
    ],
  },
];

export const findCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const formatVND = (n: number) => n.toLocaleString("vi-VN") + "đ";
