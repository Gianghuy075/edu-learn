import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft, Clock, CheckCircle2, XCircle,
  RotateCcw, AlertCircle, Bookmark, ChevronRight
} from "lucide-react";
import { findExam, type Exam } from "@/lib/exams";

export const Route = createFileRoute("/de-thi-thu/$slug")({
  loader: ({ params }) => {
    const exam = findExam(params.slug);
    if (!exam) throw notFound();
    return { exam };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.exam.title ?? "Đề thi thử"} — GDP-BaseEdu` },
      { name: "description", content: loaderData?.exam.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-2xl font-bold mb-2">Không tìm thấy đề thi</h1>
      <Link to="/de-thi-thu" className="text-primary hover:underline">← Quay lại danh sách đề thi</Link>
    </div>
  ),
  component: ExamDetail,
});

function ExamDetail() {
  const { exam } = Route.useLoaderData() as { exam: Exam };
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(exam.minutes * 60);
  const [currentIdx, setCurrentIdx] = useState(0);

  const answeredCount = Object.keys(answers).length;
  const totalQ = exam.questions.length;
  const currentQ = exam.questions[currentIdx];

  const { score } = useMemo(() => {
    let c = 0;
    for (const q of exam.questions) if (answers[q.id] === q.answer) c++;
    return {
      score: Math.round((c / totalQ) * 100) / 10,
    };
  }, [answers, exam.questions, totalQ]);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setSubmitted(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const timeLow = secondsLeft < 60 && !submitted;

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setSecondsLeft(exam.minutes * 60);
    setCurrentIdx(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-foreground flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-primary tracking-tight">GDP-BaseEdu</Link>
          <div className="h-5 w-px bg-slate-300 hidden sm:block"></div>
          <h1 className="text-sm sm:text-base font-medium text-foreground line-clamp-1">
            {exam.title}
          </h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium ${timeLow ? "bg-destructive/10 text-destructive animate-pulse" : "bg-red-50 text-red-500"}`}>
            <Clock className="w-4 h-4" />
            <span className="tabular-nums">{mm}:{ss}</span>
          </div>
          <button
            onClick={() => setSubmitted(true)}
            disabled={submitted}
            className="bg-[#0f2868] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Nộp bài
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1680px] w-full mx-auto py-6 px-4 sm:px-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Column: Question Panel */}
        <div className="xl:col-span-8 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 flex-1 flex flex-col">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="bg-[#4466de] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Câu hỏi {currentIdx + 1} / {totalQ}
              </span>
              <button className="text-slate-500 hover:text-slate-800">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <p className="text-base font-medium leading-relaxed">
                {currentQ.text}
              </p>
              {/* @ts-ignore - for now if image exists */}
              {currentQ.image && (
                <div className="mt-4 rounded-lg overflow-hidden border border-slate-200">
                  {/* @ts-ignore */}
                  <img src={currentQ.image} alt="Hình minh họa" className="max-w-full max-h-[400px] object-contain" />
                </div>
              )}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto mb-8">
              {currentQ.options.map((opt, i) => {
                const isPicked = answers[currentQ.id] === i;
                const isRight = i === currentQ.answer;
                
                let btnCls = "bg-[#f8f9fc] border-slate-200 text-foreground hover:border-slate-300";
                let badgeCls = "bg-slate-200 text-slate-600";

                if (submitted) {
                  if (isRight) {
                    btnCls = "bg-brand-green/10 border-brand-green/50";
                    badgeCls = "bg-brand-green text-white";
                  } else if (isPicked) {
                    btnCls = "bg-destructive/10 border-destructive/50";
                    badgeCls = "bg-destructive text-white";
                  } else {
                    btnCls = "bg-[#f8f9fc] border-slate-200 opacity-60";
                    badgeCls = "bg-slate-200 text-slate-500";
                  }
                } else if (isPicked) {
                  btnCls = "bg-[#e8edff] border-[#4466de] ring-1 ring-[#4466de]";
                  badgeCls = "bg-[#0f2868] text-white";
                }

                return (
                  <button
                    key={i}
                    onClick={() => setAnswers(a => ({ ...a, [currentQ.id]: i }))}
                    disabled={submitted}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${btnCls}`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${badgeCls}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 text-sm font-medium">{opt}</span>
                    {submitted && isRight && <CheckCircle2 className="w-5 h-5 text-brand-green" />}
                    {submitted && isPicked && !isRight && <XCircle className="w-5 h-5 text-destructive" />}
                  </button>
                );
              })}
            </div>

            {submitted && currentQ.explain && (
              <div className="mb-8 p-4 rounded-xl bg-[#f8f9fc] border border-slate-200 text-sm flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-[#0f2868] shrink-0 mt-0.5" />
                <div className="leading-relaxed"><span className="font-semibold text-slate-800">Giải thích: </span><span className="text-slate-600">{currentQ.explain}</span></div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-between mt-4 pt-6 border-t border-slate-100 gap-4">
              <button
                onClick={() => setCurrentIdx(c => Math.max(0, c - 1))}
                disabled={currentIdx === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-[#0f2868] hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Câu trước
              </button>
              <button
                onClick={() => setCurrentIdx(c => Math.min(totalQ - 1, c + 1))}
                disabled={currentIdx === totalQ - 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f2868] text-white text-sm font-semibold hover:bg-[#1a3885] disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                Câu tiếp theo <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Info Alert */}
          <div className="bg-slate-200/50 text-slate-600 text-sm p-4 rounded-xl flex items-start gap-3 border border-slate-200">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>Hệ thống sẽ tự động lưu bài làm của bạn sau mỗi lần chọn đáp án. Nếu gặp sự cố, hãy liên hệ giám thị hoặc làm mới trang.</p>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-border p-6">
            <h2 className="font-bold text-lg mb-4 text-slate-800">Danh sách câu hỏi</h2>
            
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0f2868]"></span>
                <span className="text-slate-600">Đã làm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border border-slate-300 bg-transparent"></span>
                <span className="text-slate-600">Chưa làm</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2.5 mb-8">
              {exam.questions.map((q, i) => {
                const isAnswered = answers[q.id] !== undefined;
                const isCurrent = i === currentIdx;
                let bgCls = "bg-[#f1f5f9] text-slate-600 hover:bg-slate-200";
                
                if (submitted) {
                   const isRight = answers[q.id] === q.answer;
                   bgCls = isRight ? "bg-brand-green text-white" : (isAnswered ? "bg-destructive text-white" : "bg-slate-200 text-slate-400");
                } else if (isAnswered) {
                  bgCls = "bg-[#0f2868] text-white";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${bgCls} ${isCurrent && !submitted ? 'ring-2 ring-offset-2 ring-[#0f2868]' : ''}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-5 border-t border-slate-100">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-slate-600">Hoàn thành:</span>
                <span className="font-bold text-[#0f2868]">{answeredCount}/{totalQ}</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0f2868] transition-all duration-300" style={{ width: `${(answeredCount / totalQ) * 100}%` }} />
              </div>
            </div>
            
            {submitted && (
              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                 <div className="mx-auto w-24 h-24 rounded-full border-8 border-primary flex flex-col items-center justify-center mb-3">
                    <div className="text-2xl font-bold text-primary tabular-nums">{score.toFixed(1)}</div>
                  </div>
                  <div className="text-sm font-semibold mb-4">
                    {score >= 8 ? "🎉 Xuất sắc!" : score >= 6.5 ? "👏 Khá tốt!" : score >= 5 ? "💪 Cần cố gắng thêm" : "📚 Hãy ôn lại nhé"}
                  </div>
                  <button
                    onClick={reset}
                    className="w-full py-2.5 rounded-lg bg-[#e8edff] text-[#0f2868] font-semibold text-sm hover:bg-[#d0dbff] flex items-center justify-center gap-2 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Làm lại bài
                  </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e8edff] text-[#0f2868] flex items-center justify-center font-bold text-lg">
              TN
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm">Trần Văn Nghĩa</div>
              <div className="text-xs text-slate-500 mt-0.5">SBD: 2024-MATH-12-005</div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer / Copyright */}
      <footer className="text-center py-6 text-xs text-slate-500">
        © 2024 GDP-BaseEdu. Môi trường thi cử trực tuyến an toàn. Chúc bạn thi tốt!
      </footer>
    </div>
  );
}
