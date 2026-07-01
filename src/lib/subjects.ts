import subjectMath from "@/assets/course-math.jpg";
import subjectPhysics from "@/assets/course-physics.jpg";
import subjectLit from "@/assets/course-lit.jpg";
import subjectEnglish from "@/assets/course-english.jpg";
import subjectChemistry from "@/assets/subject-chemistry.jpg";
import subjectBiology from "@/assets/subject-biology.jpg";
import subjectHistory from "@/assets/subject-history.jpg";
import subjectInformatics from "@/assets/subject-informatics.jpg";
import teacherMale from "@/assets/teacher-male.jpg";
import teacherFemale from "@/assets/teacher-female.jpg";

export type Teacher = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  experience: string;
  avatar: string;
};

export type ClassSlot = {
  id: string;
  name: string;
  time: string;
  days: string;
  seats: number;
};

export type Subject = {
  slug: string;
  name: string;
  cover: string;
  courseCount: number;
  teacherCount: number;
  hot?: boolean;
  // Detail page
  courseTitle: string;
  description: string;
  lessons: number;
  students: string;
  duration: string;
  originalPrice: number;
  price: number;
  teachers: Teacher[];
  slots: ClassSlot[];
};

const commonTeachers: Teacher[] = [
  {
    id: "t1",
    name: "Thầy Nguyễn Minh Đức",
    rating: 4.9,
    reviews: 124,
    experience: "10 năm kinh nghiệm • Chuyên Toán",
    avatar: teacherMale,
  },
  {
    id: "t2",
    name: "Cô Trần Thị Lan Anh",
    rating: 4.8,
    reviews: 98,
    experience: "8 năm kinh nghiệm • Luyện thi THPT",
    avatar: teacherFemale,
  },
];

const commonSlots: ClassSlot[] = [
  { id: "s1", name: "Ca học 01 (Buổi tối)", days: "Thứ 2 - Thứ 4 - Thứ 6", time: "18:00 - 20:00", seats: 8 },
  { id: "s2", name: "Ca học 02 (Cuối tuần)", days: "Thứ 7 - Chủ Nhật", time: "08:30 - 11:30", seats: 15 },
  { id: "s3", name: "Ca học 03 (Buổi chiều)", days: "Thứ 3 - Thứ 5", time: "14:00 - 17:00", seats: 5 },
];

export const subjects: Subject[] = [
  {
    slug: "toan-hoc", name: "Toán học", cover: subjectMath, courseCount: 150, teacherCount: 12, hot: true,
    courseTitle: "Toán học nâng cao Lớp 12",
    description:
      "Chương trình luyện thi đại học chuyên sâu, tập trung vào Giải tích, Hình học không gian và các chuyên đề khó. Lộ trình tối ưu hóa điểm số cho các kỳ thi quốc gia.",
    lessons: 45, students: "1.2k", duration: "6 Tháng",
    originalPrice: 4500000, price: 3200000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "vat-ly", name: "Vật lý", cover: subjectPhysics, courseCount: 120, teacherCount: 8,
    courseTitle: "Vật lý 12 - Luyện thi THPTQG",
    description:
      "Tổng ôn 7 chương Vật lý 12 kèm bộ công thức rút gọn và mẹo giải nhanh trắc nghiệm, bám sát cấu trúc đề minh họa mới nhất.",
    lessons: 40, students: "980", duration: "5 Tháng",
    originalPrice: 4200000, price: 2900000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "hoa-hoc", name: "Hóa học", cover: subjectChemistry, courseCount: 95, teacherCount: 5,
    courseTitle: "Hóa học 12 - Tổng ôn chuyên đề",
    description:
      "Hệ thống hóa toàn bộ kiến thức Hóa hữu cơ và vô cơ lớp 12, luyện đề theo chuyên đề với video chữa chi tiết.",
    lessons: 38, students: "760", duration: "5 Tháng",
    originalPrice: 3900000, price: 2700000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "ngu-van", name: "Ngữ văn", cover: subjectLit, courseCount: 110, teacherCount: 15,
    courseTitle: "Ngữ văn 12 - Nghị luận & Phân tích",
    description:
      "Chinh phục dạng bài nghị luận xã hội & nghị luận văn học với kho luận điểm phong phú và kỹ năng mở – kết bài ấn tượng.",
    lessons: 32, students: "1.1k", duration: "4 Tháng",
    originalPrice: 3500000, price: 2400000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "sinh-hoc", name: "Sinh học", cover: subjectBiology, courseCount: 80, teacherCount: 4,
    courseTitle: "Sinh học 12 - Di truyền & Tiến hóa",
    description:
      "Nắm chắc các chuyên đề Di truyền, Tiến hóa và Sinh thái, luyện đề trắc nghiệm chuẩn cấu trúc THPT Quốc gia.",
    lessons: 36, students: "620", duration: "5 Tháng",
    originalPrice: 3800000, price: 2600000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "su-dia", name: "Sử & Địa", cover: subjectHistory, courseCount: 140, teacherCount: 10,
    courseTitle: "Sử & Địa 12 - Ôn thi tốt nghiệp",
    description:
      "Tổng hợp kiến thức Lịch sử Việt Nam và Địa lý kinh tế – xã hội, luyện tập kỹ năng làm bài trắc nghiệm nhanh chóng.",
    lessons: 34, students: "540", duration: "4 Tháng",
    originalPrice: 3400000, price: 2300000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "tieng-anh", name: "Tiếng Anh", cover: subjectEnglish, courseCount: 200, teacherCount: 25,
    courseTitle: "Tiếng Anh 12 - IELTS Foundation",
    description:
      "Bứt tốc 2+ điểm Tiếng Anh trong 8 tuần với lộ trình cá nhân hóa, tập trung 4 chuyên đề chiếm 80% đề thi.",
    lessons: 48, students: "2.1k", duration: "8 Tháng",
    originalPrice: 5200000, price: 3800000,
    teachers: commonTeachers, slots: commonSlots,
  },
  {
    slug: "tin-hoc", name: "Tin học", cover: subjectInformatics, courseCount: 60, teacherCount: 6,
    courseTitle: "Tin học - Lập trình cơ bản",
    description:
      "Học lập trình từ con số 0 với Python, xây dựng tư duy thuật toán và giải quyết bài toán thực tế.",
    lessons: 30, students: "480", duration: "4 Tháng",
    originalPrice: 3200000, price: 2200000,
    teachers: commonTeachers, slots: commonSlots,
  },
];

export const findSubject = (slug: string) => subjects.find((s) => s.slug === slug);

export const formatVND = (n: number) => n.toLocaleString("vi-VN") + "đ";
