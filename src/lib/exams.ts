export type Question = {
  id: string;
  text: string;
  image?: string;
  options: string[];
  answer: number; // index of correct option
  explain?: string;
};

export type Exam = {
  slug: string;
  title: string;
  subject: string;
  subjectColor: string; // tailwind bg class token
  grade: string;
  minutes: number;
  attempts: number;
  difficulty: "Cơ bản" | "Trung bình" | "Nâng cao";
  description: string;
  questions: Question[];
};

export const exams: Exam[] = [
  {
    slug: "toan-thpt-de-01",
    title: "Đề thi thử THPTQG - Toán số 01",
    subject: "Toán học",
    subjectColor: "bg-brand-blue",
    grade: "Lớp 12",
    minutes: 20,
    attempts: 3420,
    difficulty: "Nâng cao",
    description:
      "Đề thi bám sát cấu trúc đề minh họa mới nhất của Bộ GD&ĐT, gồm các chuyên đề Hàm số, Logarit, Nguyên hàm - Tích phân và Hình học không gian.",
    questions: [
      {
        id: "q1",
        text: "Đạo hàm của hàm số y = x³ - 3x² + 2 là:",
        image: "https://placehold.co/600x200/e2e8f0/475569?text=Minh+h%E1%BB%8Da+To%C3%A1n+H%E1%BB%8Dc",
        options: ["3x² - 6x", "3x² - 3x", "x² - 6x", "3x² + 6x"],
        answer: 0,
        explain: "y' = 3x² - 6x (đạo hàm từng hạng tử).",
      },
      {
        id: "q2",
        text: "Nghiệm của phương trình log₂(x) = 3 là:",
        options: ["x = 6", "x = 8", "x = 9", "x = 16"],
        answer: 1,
        explain: "log₂(x) = 3 ⇔ x = 2³ = 8.",
      },
      {
        id: "q3",
        text: "Tích phân ∫₀¹ 2x dx bằng:",
        options: ["0", "1", "2", "4"],
        answer: 1,
        explain: "∫2x dx = x²; giá trị từ 0 → 1 là 1.",
      },
      {
        id: "q4",
        text: "Trong không gian Oxyz, khoảng cách từ điểm A(1;2;2) đến gốc tọa độ là:",
        options: ["2", "3", "√5", "5"],
        answer: 1,
        explain: "d = √(1² + 2² + 2²) = √9 = 3.",
      },
      {
        id: "q5",
        text: "Số phức z = 3 + 4i có mô-đun bằng:",
        options: ["5", "7", "12", "√7"],
        answer: 0,
        explain: "|z| = √(3² + 4²) = 5.",
      },
    ],
  },
  {
    slug: "ly-thpt-de-01",
    title: "Đề thi thử THPTQG - Vật lý số 01",
    subject: "Vật lý",
    subjectColor: "bg-brand-purple",
    grade: "Lớp 12",
    minutes: 15,
    attempts: 1980,
    difficulty: "Trung bình",
    description:
      "Đề luyện tập chương Dao động cơ, Sóng cơ và Điện xoay chiều, phù hợp học sinh đang tổng ôn cuối kỳ.",
    questions: [
      {
        id: "q1",
        text: "Chu kỳ dao động của con lắc lò xo phụ thuộc vào:",
        options: [
          "Khối lượng và độ cứng lò xo",
          "Biên độ dao động",
          "Vị trí ban đầu của vật",
          "Vận tốc ban đầu",
        ],
        answer: 0,
        explain: "T = 2π√(m/k).",
      },
      {
        id: "q2",
        text: "Đơn vị của tần số là:",
        options: ["Hz", "s", "m/s", "rad"],
        answer: 0,
      },
      {
        id: "q3",
        text: "Sóng âm truyền được trong môi trường:",
        options: ["Chân không", "Chất rắn, lỏng, khí", "Chỉ chất khí", "Chỉ chất rắn"],
        answer: 1,
      },
      {
        id: "q4",
        text: "Trong mạch RLC nối tiếp, cộng hưởng xảy ra khi:",
        options: ["ZL = ZC", "R = 0", "ZL = R", "ZC = R"],
        answer: 0,
      },
    ],
  },
  {
    slug: "anh-thpt-de-01",
    title: "Đề thi thử THPTQG - Tiếng Anh số 01",
    subject: "Tiếng Anh",
    subjectColor: "bg-brand-green",
    grade: "Lớp 12",
    minutes: 15,
    attempts: 4120,
    difficulty: "Cơ bản",
    description:
      "Đề tổng hợp ngữ pháp và từ vựng THPT, giúp học sinh làm quen với dạng câu hỏi trắc nghiệm quen thuộc.",
    questions: [
      {
        id: "q1",
        text: "She ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        answer: 1,
      },
      {
        id: "q2",
        text: "Choose the synonym of 'happy':",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        answer: 1,
      },
      {
        id: "q3",
        text: "If it ___ tomorrow, we will stay at home.",
        options: ["rain", "rains", "will rain", "rained"],
        answer: 1,
        explain: "Câu điều kiện loại 1: If + S + V(s/es), S + will + V.",
      },
      {
        id: "q4",
        text: "The book ___ by many students last year.",
        options: ["read", "was read", "reads", "is read"],
        answer: 1,
      },
    ],
  },
  {
    slug: "hoa-thpt-de-01",
    title: "Đề thi thử THPTQG - Hóa học số 01",
    subject: "Hóa học",
    subjectColor: "bg-brand-orange",
    grade: "Lớp 12",
    minutes: 15,
    attempts: 1560,
    difficulty: "Trung bình",
    description: "Ôn tập nhanh chuyên đề Este - Lipit và Kim loại kiềm.",
    questions: [
      {
        id: "q1",
        text: "Công thức tổng quát của este no, đơn chức, mạch hở là:",
        options: ["CnH2nO2", "CnH2n+2O2", "CnH2n-2O2", "CnH2nO"],
        answer: 0,
      },
      {
        id: "q2",
        text: "Kim loại nào sau đây thuộc nhóm kiềm?",
        options: ["Ca", "Mg", "Na", "Al"],
        answer: 2,
      },
      {
        id: "q3",
        text: "Chất nào sau đây là chất điện li mạnh?",
        options: ["CH₃COOH", "NaCl", "H₂O", "NH₃"],
        answer: 1,
      },
    ],
  },
];

export const findExam = (slug: string) => exams.find((e) => e.slug === slug);
