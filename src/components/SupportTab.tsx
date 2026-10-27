import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  CircleHelp,
  Copy,
  KeyRound,
  MonitorPlay,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

const COMMON_ISSUES = [
  {
    icon: KeyRound,
    title: 'Không đăng nhập được',
    answer: 'Google AI Studio yêu cầu người sử dụng từ 18 tuổi trở lên. Học sinh không tự đăng nhập; hãy nhờ giáo viên hoặc phụ huynh hỗ trợ. Với tài khoản trường học, có thể cần quản trị viên cho phép.',
  },
  {
    icon: MonitorPlay,
    title: 'Không thấy New app hoặc Preview',
    answer: 'Mở biểu tượng menu ☰, tìm mục Build rồi chọn New app. Sau khi AI tạo xong, tìm nút Preview ở phía trên khu vực ứng dụng.',
  },
  {
    icon: RefreshCw,
    title: 'AI tạo lâu hoặc báo lỗi',
    answer: 'Chờ thêm một lúc, kiểm tra Internet và thử gửi lại một lần. Nếu vẫn lỗi, rút gọn prompt và chỉ yêu cầu tạo những chức năng quan trọng nhất.',
  },
  {
    icon: Sparkles,
    title: 'Ứng dụng tạo ra chưa đúng',
    answer: 'Ghi rõ một điều đang sai, yêu cầu AI sửa đúng một việc, sau đó mở lại Preview để kiểm tra. Không yêu cầu sửa quá nhiều việc trong cùng một câu.',
  },
];

export default function SupportTab() {
  const [difficulty, setDifficulty] = useState('');
  const [copied, setCopied] = useState(false);

  const copySupportMessage = async () => {
    if (!difficulty.trim()) return;
    await navigator.clipboard.writeText(`Tôi cần hỗ trợ sử dụng VibeLab: ${difficulty.trim()}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-w-0 space-y-6 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-2xs md:p-10">
      <div>
        <div className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
          <CircleHelp className="h-3.5 w-3.5" />
          <span>Hỗ trợ sử dụng</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Bạn đang gặp khó khăn gì?</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
          Xem cách xử lý nhanh hoặc mô tả vấn đề để tạo một tin nhắn nhờ giáo viên hỗ trợ.
        </p>
      </div>

      <section aria-labelledby="quick-help-title">
        <h2 id="quick-help-title" className="text-sm font-bold text-slate-900">Cách xử lý nhanh</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {COMMON_ISSUES.map(({ icon: Icon, title, answer }) => (
            <details key={title} className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-blue-200 open:bg-blue-50/50">
              <summary className="flex cursor-pointer list-none items-center gap-3 p-4 text-sm font-semibold text-slate-800">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-2xs"><Icon className="h-4 w-4" /></span>
                <span>{title}</span>
                <ChevronDown className="ml-auto h-4 w-4 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-4 pl-15 text-xs leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="other-help-title" className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        <div>
          <h2 id="other-help-title" className="text-base font-bold text-slate-900">Khó khăn khác</h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">Phụ huynh, học sinh hoặc giáo viên có thể tự mô tả vấn đề tại đây.</p>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <label htmlFor="other-difficulty" className="sr-only">Mô tả khó khăn khác</label>
          <input
            id="other-difficulty"
            value={difficulty}
            onChange={event => setDifficulty(event.target.value)}
            placeholder="Nhập khó khăn bạn đang gặp…"
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          <button
            type="button"
            onClick={copySupportMessage}
            disabled={!difficulty.trim()}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Đã sao chép' : 'Sao chép để gửi giáo viên'}
          </button>
        </div>

        <p className="mt-3 text-[10px] leading-relaxed text-slate-400">
          Nội dung không được lưu. Không nhập tên, email, số điện thoại, mật khẩu hoặc thông tin riêng tư của học sinh.
        </p>
      </section>
    </div>
  );
}
