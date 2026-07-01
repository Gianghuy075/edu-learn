import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Star,
  AlignLeft,
  BookOpen,
  CheckSquare,
  FileQuestion,
  Search,
  Bell,
  CircleHelp,
  Settings,
  LogOut,
  GraduationCap,
  Library,
  User,
  Newspaper,
  MessageSquare,
  Send,
  X,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef, type ReactNode } from "react";

const navItems = [
  { icon: Home, label: "Trang chủ", to: "/" as const },
  { icon: Star, label: "Khóa học", to: "/khoa-hoc" as const },
  { icon: CheckSquare, label: "Lớp học", to: "/lop-hoc" as const },
  { icon: BookOpen, label: "Luyện thi", to: "/exam-prep" as const },
  { icon: FileQuestion, label: "Đề thi thử", to: "/de-thi-thu" as const },
  { icon: Library, label: "Thư viện", to: "/thu-vien" as const },
  { icon: Newspaper, label: "Blog & Tin tức", to: "/blog" as const },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Xin chào! Mình là trợ lý ảo GDP-BaseEdu. Mình có thể giúp gì cho bạn hôm nay?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Cảm ơn bạn đã nhắn tin! Bạn có thể liên hệ trực tiếp hotline: 1900 8080 để được GDP-BaseEdu hỗ trợ nhanh nhất nhé.";
      const cleanText = text.toLowerCase();

      if (cleanText.includes("ielts") || cleanText.includes("luyện thi") || cleanText.includes("sat")) {
        reply = "GDP-BaseEdu cung cấp các lộ trình luyện thi chứng chỉ quốc tế IELTS 6.5+ thần tốc và SAT 1600 cực kỳ bài bản. Bạn hãy click chọn mục 'Luyện thi' ở menu trái để xem chi tiết nhé!";
      } else if (cleanText.includes("môn") || cleanText.includes("lớp") || cleanText.includes("học phí")) {
        reply = "Hệ thống có đầy đủ lớp học theo môn từ lớp 6 đến lớp 12 (Toán, Lý, Hóa, Văn, Anh, Sinh...). Hãy xem chi tiết tại mục 'Lớp học' hoặc 'Khóa học' nha!";
      } else if (cleanText.includes("thi thử") || cleanText.includes("đề thi") || cleanText.includes("kiểm tra")) {
        reply = "GDP-BaseEdu cung cấp ngân hàng đề thi thử THPTQG phong phú và miễn phí. Bạn hãy chọn mục 'Đề thi thử' để bắt đầu thử sức ngay nhé!";
      } else if (cleanText.includes("chào") || cleanText.includes("hello") || cleanText.includes("hi")) {
        reply = "Xin chào! Mình có thể giúp gì cho bạn? Bạn muốn tìm hiểu về lớp học theo môn, luyện thi chứng chỉ hay làm đề thi thử?";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const suggestions = [
    "Lộ trình ôn thi IELTS?",
    "Có những môn học nào?",
    "Làm sao thi thử THPTQG?",
  ];

  return (
    <div className="min-h-screen flex bg-[#f8f9fc] text-slate-800 font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 shrink-0 flex-col bg-white border-r border-slate-200 sticky top-0 h-screen">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 px-6 py-8">
          <div className="w-10 h-10 rounded-lg bg-[#0f2868] flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-xl text-[#0f2868] leading-tight">GDP-BaseEdu</div>
            <div className="text-[11px] text-slate-500 font-medium tracking-wide">Academic Excellence</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.to) && (item.to !== "/" || pathname === "/");
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active
                  ? "bg-[#0f2868] text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <item.icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-100">
          <button className="w-full py-3 mb-4 rounded-xl bg-[#2044c9] hover:bg-[#1a38a8] text-white text-sm font-semibold transition-colors">
            Upgrade to Pro
          </button>

          <div className="space-y-1">
            <button className="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </button>
            <button className="flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-10">
          {/* Search */}
          <div className="relative w-full max-w-lg">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm đề thi, giáo viên..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-100 border-transparent text-sm focus:bg-white focus:border-slate-300 focus:ring-0 outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4 sm:gap-6 ml-4">
            <button className="text-slate-500 hover:text-slate-700 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
            </button>
            <button className="text-slate-500 hover:text-slate-700 transition-colors hidden sm:block">
              <CircleHelp className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
            <button className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left">
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-800 leading-tight">Nguyễn Văn A</div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider">HỌC SINH LỚP 12</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-green-900" />
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="py-6 px-4 sm:px-6 w-full max-w-[1680px] mx-auto">
          {children}
        </main>

        {/* Floating Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`fixed bottom-6 right-6 w-14 h-14 bg-[#0f2868] text-white rounded-full shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all flex items-center justify-center z-50 group ${
            chatOpen ? "rotate-90 bg-slate-800" : ""
          }`}
          aria-label="Toggle AI assistant"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          
          {/* Tooltip / Sparkle effect */}
          {!chatOpen && (
            <span className="absolute -top-10 right-0 bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> Hỏi Trợ lý AI
            </span>
          )}
        </button>

        {/* Chat Window */}
        <div
          className={`fixed bottom-24 right-6 w-[360px] sm:w-[380px] h-[520px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right transform ${
            chatOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Header */}
          <header className="bg-[#0f2868] text-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">Trợ lý AI học tập</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] text-slate-200 font-semibold tracking-wide uppercase">GDP-BaseEdu Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-lg text-slate-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 items-end ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-[#0f2868]/10 flex items-center justify-center text-[#0f2868] shrink-0">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#0f2868] text-white rounded-br-none"
                      : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-end">
                <div className="w-7 h-7 rounded-full bg-[#0f2868]/10 flex items-center justify-center text-[#0f2868] shrink-0 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions (only show at start or when empty) */}
          {messages.length === 1 && !isTyping && (
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">Gợi ý câu hỏi:</span>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="bg-white border border-slate-200 hover:border-[#0f2868] text-[#0f2868] hover:bg-slate-50 transition-colors text-xs font-semibold px-2.5 py-1.5 rounded-lg"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 border-t border-slate-200 bg-white flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 bg-slate-100 border-transparent rounded-xl px-4 py-2.5 text-sm outline-none focus:bg-white focus:border-slate-300 transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-xl bg-[#0f2868] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
