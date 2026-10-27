import React, { useState } from 'react';
import ReadinessChecklistLab from './labs/ReadinessChecklistLab';
import DeployConfigGeneratorLab from './labs/DeployConfigGeneratorLab';
import TokenCalculatorLab from './labs/TokenCalculatorLab';
import { Gamepad2, Wrench, FlaskConical, HelpCircle, LayoutDashboard, ArrowRight } from 'lucide-react';
import { CompetitionTrack } from '../types';

interface TabProps {
  onGoToCourse: () => void;
  onSelectLesson: (id: string) => void;
  selectedTrack?: CompetitionTrack;
  onSelectTrack?: (track: CompetitionTrack) => void;
}

export function OverviewTab({ onGoToCourse, onSelectTrack, selectedTrack = 'nckh' }: TabProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>TỔNG QUAN TẬP HUẤN</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cẩm Nang Khởi Động: Vibe Coding Sáng Tạo
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tài liệu đọc trước dành cho Thầy Cô và các Đội thi Khoa học Kỹ thuật & Nghiên cứu Khoa học.
        </p>
      </div>

      {/* Track Selection Prompt */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <h3 className="font-bold text-slate-900 text-sm">
          Bước đầu tiên: Bạn tham gia bảng thi nào?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => {
              if (onSelectTrack) onSelectTrack('nckh');
              onGoToCourse();
            }}
            className={`p-4 rounded-xl border text-left transition flex items-start gap-3 bg-white ${
              selectedTrack === 'nckh' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-2xl">🔬</span>
            <div>
              <strong className="text-slate-900 text-sm block font-bold">Bảng Nghiên Cứu Khoa Học (NCKH)</strong>
              <span className="text-xs text-slate-500 mt-0.5 block leading-relaxed">
                Đề tài kiểm định giả thuyết (Sinh, Hóa, Môi trường, Y học, Xã hội). Vibe Coding giúp phân tích số liệu thực nghiệm.
              </span>
            </div>
          </button>

          <button
            onClick={() => {
              if (onSelectTrack) onSelectTrack('tech');
              onGoToCourse();
            }}
            className={`p-4 rounded-xl border text-left transition flex items-start gap-3 bg-white ${
              selectedTrack === 'tech' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-2xl">⚙️</span>
            <div>
              <strong className="text-slate-900 text-sm block font-bold">Bảng Công Nghệ Kỹ Thuật (KHKT)</strong>
              <span className="text-xs text-slate-500 mt-0.5 block leading-relaxed">
                Đề tài chế tạo thiết bị, IoT, Robot, phần mềm giải pháp. Vibe Coding giúp xây dựng Dashboard điều khiển.
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-1">Mục tiêu cẩm nang</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Nắm vững 4 câu hỏi cốt lõi: Vibe coding & Token/API là gì, Ứng dụng cụ thể cho bảng thi, Thành phần cần chuẩn bị, và Quy trình Deploy lên môi trường thực tế.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-1">Không yêu cầu API key</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Học sinh và giáo viên chỉ cần nắm bản chất cách kết nối, không phải tự mua hay nhập bất kỳ mã khóa kỹ thuật nào.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TemplatesTab({ onSelectLesson }: TabProps) {
  const [filter, setFilter] = useState<'all' | 'nckh' | 'tech'>('all');

  const templates = [
    {
      title: 'Đánh giá chất lượng nước sinh hoạt địa phương',
      desc: 'Phân tích chỉ số pH, DO, độ đục và tự động đối chiếu với quy chuẩn nước mặt QCVN.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Môi trường',
    },
    {
      title: 'Khảo sát ánh sáng xanh và giấc ngủ học sinh',
      desc: 'Xử lý số liệu 120 phiếu điều tra, vẽ biểu đồ tương quan và tính toán độ tin cậy.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Hành vi',
    },
    {
      title: 'Nghiên cứu hoạt tính kháng khuẩn thảo mộc',
      desc: 'So sánh đường kính vòng vô khuẩn qua các nồng độ dung dịch chiết xuất tự nhiên.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Y sinh',
    },
    {
      title: 'Hệ thống tưới cây tự động vườn trường',
      desc: 'Bảng điều khiển kết nối cảm biến độ ẩm đất và dự báo thời tiết có nút tưới thủ công.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật IoT',
    },
    {
      title: 'Thùng rác phân loại thông minh',
      desc: 'Tự động đếm lượt bỏ rác, đo dung lượng thùng chứa và phát âm thanh khích lệ.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật Môi trường',
    },
    {
      title: 'Hệ thống đèn học bảo vệ mắt',
      desc: 'Đo cường độ ánh sáng bàn học và cảnh báo tư thế cúi gần để chống tật khúc xạ.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật Y tế',
    },
  ];

  const filtered = templates.filter(t => filter === 'all' || t.track === filter);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>THƯ VIỆN ĐỀ TÀI MẪU</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mẫu Ý Tưởng Cho Cả 2 Bảng Thi
          </h1>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Xem các ví dụ đề tài tiêu biểu của Bảng Nghiên cứu Khoa học và Bảng Công nghệ Kỹ thuật.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              filter === 'all' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilter('nckh')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              filter === 'nckh' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            🔬 Bảng NCKH
          </button>
          <button
            onClick={() => setFilter('tech')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              filter === 'tech' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600'
            }`}
          >
            ⚙️ Bảng Kỹ Thuật
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tpl, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-slate-200 hover:border-blue-300 bg-white transition space-y-2 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">
                {tpl.badge}
              </span>
              <h3 className="font-bold text-slate-900 text-sm mt-2">{tpl.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{tpl.desc}</p>
            </div>

            <button
              onClick={() => onSelectLesson(tpl.lessonId)}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Xem lộ trình bài học →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReadinessTab() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>HÀNH TRANG CHUẨN BỊ</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Nâng Cấp & Chuẩn Bị Cho Buổi Tập Huấn
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tự kiểm tra các tiêu chí sẵn sàng để buổi học thực hành diễn ra thuận lợi nhất.
        </p>
      </div>

      <ReadinessChecklistLab />
    </div>
  );
}

export function LabsTab() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>THƯ VIỆN TRẢI NGHIỆM</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Công Cụ Thử Nghiệm Trực Quan
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Trực tiếp trải nghiệm tính toán Token, mô phỏng cầu nối API và tạo mã QR xuất bản sản phẩm.
        </p>
      </div>

      <TokenCalculatorLab />
      <DeployConfigGeneratorLab />
    </div>
  );
}

export function HelpTab() {
  const faqs = [
    {
      q: '1. Vibe coding là gì? Token và API là gì?',
      a: 'Vibe coding là cách lập trình bằng ngôn ngữ tự nhiên: bạn mô tả ý tưởng và dữ liệu, AI viết mã nguồn. Token là các mẩu đơn vị ngôn ngữ mà AI đếm để xử lý văn bản. API là cầu nối truyền nhận dữ liệu giữa ứng dụng của bạn và máy chủ AI (bạn không cần phải tự nhập hay mua API key).',
    },
    {
      q: '2. Ứng dụng Vibe coding cho Bảng NCKH và Bảng KHKT khác nhau như thế nào?',
      a: 'Bảng NCKH: Dùng Vibe coding để lập trình trang web phân tích số liệu thực nghiệm, tính toán thống kê và vẽ biểu đồ tương quan. Bảng Công nghệ Kỹ thuật: Dùng Vibe coding để làm Dashboard điều khiển thiết bị phần cứng, hiển thị cảm biến và tạo nút bấm kiểm thử sự cố cho Giám khảo thử.',
    },
    {
      q: '3. Cần chuẩn bị những gì trước buổi tập huấn?',
      a: 'NCKH: Bản tóm tắt giả thuyết và 1 bảng số liệu đo đạc thực nghiệm mẫu (CSV/Excel). KHKT: Sơ đồ khối thiết bị phần cứng và bảng thông số ngưỡng cảm biến đo lường.',
    },
    {
      q: '4. Deploy sản phẩm lên môi trường thực tế nghĩa là gì?',
      a: 'Đưa ứng dụng từ máy tính lên mạng Internet qua các dịch vụ miễn phí như Vercel để có link HTTPS và in mã QR dán lên poster báo cáo hoặc dán trực tiếp lên thiết bị kỹ thuật để Ban Giám Khảo quét điện thoại thử nghiệm.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>HỎI ĐÁP & HỖ TRỢ</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Giải Đáp 4 Câu Hỏi Cốt Lõi Cho 2 Bảng Thi
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tóm tắt câu trả lời cho các thắc mắc chung về NCKH và Công nghệ Kỹ thuật.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm">{faq.q}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
