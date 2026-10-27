import React from 'react';
import { ExternalLink, UserCheck, AlertTriangle } from 'lucide-react';

export default function AiStudioLoginGuide() {
  const steps = [
    ['1', 'Kiểm tra tài khoản', 'Người sử dụng phải từ 18 tuổi trở lên. Với tài khoản trường học, hãy hỏi quản trị viên nếu bị chặn.'],
    ['2', 'Mở Google AI Studio', 'Truy cập aistudio.google.com bằng Chrome hoặc Edge và chọn Sign in.'],
    ['3', 'Đăng nhập', 'Dùng tài khoản Google của giáo viên và đọc điều khoản trước khi đồng ý.'],
    ['4', 'Bắt đầu tạo', 'Mở chế độ Build để mô tả ứng dụng bạn muốn AI hỗ trợ xây dựng.'],
  ];

  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900">Đăng nhập trong 4 bước</h4>
          <p className="mt-1 text-xs text-slate-500">Giáo viên thực hiện; học sinh tiểu học không tự đăng nhập AI Studio.</p>
        </div>
        <a
          href="https://aistudio.google.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700"
        >
          Mở Google AI Studio <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-4 grid gap-2.5 md:grid-cols-2">
        {steps.map(([number, title, description]) => (
          <div key={number} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white font-mono text-xs font-bold text-blue-600">{number}</span>
            <div>
              <strong className="block text-xs text-slate-900">{title}</strong>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-900">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <p><strong>Không đưa lên AI Studio:</strong> tên học sinh, ảnh khuôn mặt, điểm số gắn danh tính, hồ sơ sức khỏe, mật khẩu hoặc tài liệu mật.</p>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
        <UserCheck className="h-4 w-4 text-emerald-600" />
        Nếu gặp lỗi 403, hãy kiểm tra tuổi trên tài khoản, khu vực hỗ trợ hoặc liên hệ quản trị viên Google Workspace.
      </div>
    </div>
  );
}
