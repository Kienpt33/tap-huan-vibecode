import React, { useState } from 'react';
import { QrCode, Check } from 'lucide-react';

export default function DeployConfigGeneratorLab() {
  const [sampleProjectUrl, setSampleProjectUrl] = useState('https://sang-tao-khkt.vercel.app');
  const [copied, setCopied] = useState(false);

  const isValidUrl = (() => {
    try {
      const parsed = new URL(sampleProjectUrl);
      return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    } catch {
      return false;
    }
  })();
  const qrCodeUrl = isValidUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(sampleProjectUrl)}&bgcolor=ffffff&color=0f172a`
    : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(sampleProjectUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 my-6 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">
            Công cụ tạo mã QR triển lãm cho đường dẫn sản phẩm
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Nhập đường link trang web sau khi xuất bản để tạo mã QR in lên poster dự thi
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4 text-[11px]">
        {[
          ['01', 'Build', 'Chạy build và sửa toàn bộ lỗi.'],
          ['02', 'Bảo mật', 'Đặt khóa ở biến môi trường, không ở frontend.'],
          ['03', 'Deploy', 'Chọn gói phù hợp và kiểm tra hạn mức.'],
          ['04', 'Kiểm tra', 'Mở trên máy khác; chuẩn bị bản offline.'],
        ].map(([number, title, description]) => (
          <div key={number} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <span className="font-mono font-bold text-blue-600">{number}</span>
            <strong className="ml-1.5 text-slate-800">{title}</strong>
            <p className="mt-1 leading-relaxed text-slate-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-center">
        <div className="lg:col-span-7 space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            Khi tham gia triển lãm KHKT, mã QR giúp Ban Giám Khảo và khách tham quan mở trang web sản phẩm trực tiếp từ điện thoại thông minh mà không cần gõ lại địa chỉ URL dài.
          </p>

          <div>
            <label className="text-xs font-medium text-slate-700 block mb-1">
              Đường dẫn trang web sau khi Deploy:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={sampleProjectUrl}
                onChange={(e) => setSampleProjectUrl(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-mono focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white"
                placeholder="https://ten-du-an.vercel.app"
              />
              <button
                onClick={handleCopyLink}
                disabled={!isValidUrl}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 border border-slate-300 text-slate-700 rounded-lg text-xs font-medium transition flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : 'Sao chép'}
              </button>
            </div>
          </div>

          {!isValidUrl && (
            <p className="text-[11px] text-rose-600">Hãy nhập liên kết bắt đầu bằng http:// hoặc https://.</p>
          )}

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-[11px] leading-relaxed text-amber-900">
            Ảnh QR được tạo bởi dịch vụ bên thứ ba qrserver.com; liên kết bạn nhập sẽ được gửi tới dịch vụ này. Không nhập URL chứa token hoặc thông tin bí mật.
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-medium text-slate-700 mb-2 flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-slate-600" />
            Mã QR Poster Demo
          </span>

          <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
            {isValidUrl ? (
              <img
                src={qrCodeUrl}
                alt="Mã QR mở liên kết sản phẩm"
                className="w-32 h-32 object-contain block"
                loading="lazy"
              />
            ) : (
              <div className="w-32 h-32 grid place-items-center text-[11px] text-slate-400">Chưa có QR hợp lệ</div>
            )}
          </div>

          <span className="text-[11px] text-slate-500 mt-2">
            QR chỉ mở liên kết; không tự tạo kết nối hoặc quyền điều khiển thiết bị
          </span>
        </div>
      </div>
    </div>
  );
}
