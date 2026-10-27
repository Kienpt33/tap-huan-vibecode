import React from 'react';
import ReadinessChecklistLab from './labs/ReadinessChecklistLab';
import DeployConfigGeneratorLab from './labs/DeployConfigGeneratorLab';
import TokenCalculatorLab from './labs/TokenCalculatorLab';
import { Gamepad2, Wrench, FlaskConical, HelpCircle, LayoutDashboard, Download } from 'lucide-react';
import { CompetitionTrack } from '../types';

interface TabProps {
  onSelectLesson: (id: string) => void;
  selectedTrack?: CompetitionTrack;
}

export function OverviewTab() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>TỔNG QUAN TẬP HUẤN</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cẩm Nang Khởi Động Vibe Coding Có Kiểm Chứng
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tài liệu đọc trước dành cho giáo viên và đội thi ở hai nhánh: nghiên cứu khoa học và giải pháp kỹ thuật.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-1">Mục tiêu cẩm nang</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Hiểu vai trò và giới hạn của AI, chuẩn bị dữ liệu/hệ thống, viết đặc tả có thể kiểm chứng và xuất bản an toàn.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-1">Mô phỏng không dùng API key</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Công cụ trong cẩm nang không gửi yêu cầu AI thật. Sản phẩm thật có thể cần xác thực; không đặt khóa bí mật trong mã frontend.
          </p>
        </div>
      </div>
    </div>
  );
}

export function TemplatesTab({ onSelectLesson, selectedTrack = 'nckh' }: TabProps) {
  const templates = [
    {
      title: 'Khảo sát chất lượng nước mặt địa phương',
      desc: 'Phân tích pH, DO, độ đục và đối chiếu đúng nhóm mục đích sử dụng trong QCVN 08:2023/BTNMT.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Môi trường',
      fileName: 'mau-nuoc-mat.csv',
      csv: 'ngay,tram,pH,DO_mg_L,do_duc_NTU\n2026-09-01,A,7.2,5.8,12\n2026-09-01,B,6.9,5.1,18\n2026-09-02,A,7.1,5.6,14',
    },
    {
      title: 'Khảo sát thời gian dùng màn hình và giấc ngủ',
      desc: 'Xử lý dữ liệu ẩn danh, vẽ tương quan và trình bày giới hạn của dữ liệu tự báo cáo; không suy diễn quan hệ nhân quả.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Hành vi',
      fileName: 'mau-giac-ngu-an-danh.csv',
      csv: 'ma_an_danh,gio_man_hinh,gio_ngu,diem_tap_trung\nHS001,2.5,8,8\nHS002,4,6.5,6\nHS003,1.5,8.5,9',
    },
    {
      title: 'Nghiên cứu hoạt tính kháng khuẩn thảo mộc',
      desc: 'So sánh dữ liệu vòng vô khuẩn mô phỏng; thí nghiệm vi sinh thật chỉ thực hiện trong phòng lab có người phụ trách.',
      lessonId: 'nckh-3',
      track: 'nckh',
      badge: 'NCKH Y sinh',
      fileName: 'mau-vong-khang-khuan.csv',
      csv: 'nhom,nong_do_phan_tram,lan_lap,duong_kinh_mm\ndoi_chung,0,1,0\ndich_chiet,25,1,8.2\ndich_chiet,25,2,8.0',
    },
    {
      title: 'Hệ thống tưới cây tự động vườn trường',
      desc: 'Bảng điều khiển kết nối cảm biến độ ẩm đất và dự báo thời tiết có nút tưới thủ công.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật IoT',
      fileName: 'mau-cam-bien-do-am.csv',
      csv: 'thoi_gian,do_am_dat_phan_tram,nhiet_do_C,trang_thai_bom\n08:00,42,29,tat\n09:00,35,31,tat\n10:00,28,33,bat',
    },
    {
      title: 'Thùng rác phân loại thông minh',
      desc: 'Tự động đếm lượt bỏ rác, đo dung lượng thùng chứa và phát âm thanh khích lệ.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật Môi trường',
      fileName: 'mau-thung-rac.csv',
      csv: 'thoi_gian,khoang_cach_cm,muc_day_phan_tram,loai_rac\n08:00,48,20,tai_che\n09:00,30,50,huu_co\n10:00,12,80,tai_che',
    },
    {
      title: 'Hệ thống đèn học bảo vệ mắt',
      desc: 'Đo cường độ ánh sáng và khoảng cách ngồi; cảnh báo tư thế theo ngưỡng do đội thi xác định và kiểm chứng.',
      lessonId: 'tech-3',
      track: 'tech',
      badge: 'Kỹ thuật Hỗ trợ học tập',
      fileName: 'mau-den-hoc.csv',
      csv: 'thoi_gian,do_sang_lux,khoang_cach_cm,muc_den\n19:00,280,35,60\n19:10,180,24,85\n19:20,320,38,45',
    },
  ];

  const filtered = templates.filter(t => t.track === selectedTrack);

  const downloadCsv = (fileName: string, csv: string) => {
    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>THƯ VIỆN ĐỀ TÀI MẪU</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ý Tưởng Khởi Động Cho {selectedTrack === 'nckh' ? 'Nhánh NCKH' : 'Nhánh Kỹ Thuật'}
          </h1>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Nội dung đã được lọc theo nhánh bạn chọn; mỗi ý tưởng cần tiêu chí kiểm chứng và giới hạn an toàn riêng.
          </p>
        </div>

        <span className="rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
          {selectedTrack === 'nckh' ? '🔬 Nhánh NCKH' : '⚙️ Nhánh Kỹ thuật'}
        </span>
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

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelectLesson(tpl.lessonId)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Mở bài thực hành →
              </button>
              <button
                onClick={() => downloadCsv(tpl.fileName, tpl.csv)}
                className="text-[11px] font-semibold text-slate-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" /> CSV mẫu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReadinessTab({ selectedTrack = 'nckh' }: Pick<TabProps, 'selectedTrack'>) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-2xs space-y-6">
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
          <Wrench className="w-3.5 h-3.5" />
          <span>HÀNH TRANG CHUẨN BỊ</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Kiểm Tra Sẵn Sàng Trước Buổi Tập Huấn
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tự kiểm tra các tiêu chí sẵn sàng để buổi học thực hành diễn ra thuận lợi nhất.
        </p>
      </div>

      <ReadinessChecklistLab track={selectedTrack} />
    </div>
  );
}

export function LabsTab({ selectedTrack = 'nckh' }: Pick<TabProps, 'selectedTrack'>) {
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
          Ước lượng Token, quan sát mô phỏng API và tạo QR có cảnh báo quyền riêng tư.
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
      a: 'Vibe coding là quy trình dùng ngôn ngữ tự nhiên để hỗ trợ tạo và sửa mã. Token là đơn vị mã hóa đầu vào/đầu ra của mô hình AI, không phải gói dữ liệu cảm biến. API là giao diện trao đổi giữa phần mềm; ứng dụng thật có thể cần khóa hoặc cơ chế xác thực.',
    },
    {
      q: '2. Hai nhánh học khác nhau như thế nào?',
      a: 'Nhánh NCKH tập trung vào dữ liệu, phương pháp phân tích, sai số và khả năng tái lập. Nhánh Giải pháp Kỹ thuật tập trung vào luồng tín hiệu, trạng thái thiết bị, giao thức, xác thực và an toàn khi điều khiển.',
    },
    {
      q: '3. Cần chuẩn bị những gì trước buổi tập huấn?',
      a: 'NCKH: câu hỏi nghiên cứu, từ điển dữ liệu, dữ liệu đã ẩn danh, phương pháp và nguồn chuẩn. Kỹ thuật: sơ đồ khối, giao thức, ngưỡng an toàn, trạng thái mất mạng và nút dừng vật lý. Cả hai cần tiêu chí nghiệm thu.',
    },
    {
      q: '4. Deploy sản phẩm lên môi trường thực tế nghĩa là gì?',
      a: 'Deploy là đưa bản build lên dịch vụ hosting. Gói miễn phí có hạn mức và điều khoản. QR chỉ mở URL; nó không tự kết nối phần cứng, tạo quyền truy cập hoặc bảo vệ dữ liệu.',
    },
    {
      q: '5. Có được đưa dữ liệu học sinh hoặc khóa truy cập vào AI không?',
      a: 'Không đưa tên, email, mã học sinh, dữ liệu sức khỏe, Wi‑Fi password hoặc API key vào prompt hay mã công khai. Hãy ẩn danh dữ liệu, xin đồng thuận phù hợp và chỉ chia sẻ phần tối thiểu cần thiết.',
    },
    {
      q: '6. Nếu sản phẩm không chạy tại nơi thi thì sao?',
      a: 'Chuẩn bị bản mô phỏng offline, video ngắn, ảnh chụp log và dữ liệu mẫu. Với thiết bị, ưu tiên trạng thái an toàn khi mất mạng và luôn có cách dừng bằng phần cứng.',
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
          Giải Đáp Nhanh Trước Khi Thực Hành
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tóm tắt các khái niệm, giới hạn, quyền riêng tư và phương án dự phòng cho hai nhánh.
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

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
        <strong className="text-slate-800">Nguồn nền tảng:</strong>{' '}
        <a className="text-blue-700 hover:underline" href="https://owasp.org/API-Security/" target="_blank" rel="noreferrer">OWASP API Security</a>,{' '}
        <a className="text-blue-700 hover:underline" href="https://vercel.com/docs/plans/hobby" target="_blank" rel="noreferrer">Vercel Hobby Plan</a>,{' '}
        <a className="text-blue-700 hover:underline" href="https://vanban.chinhphu.vn/?classid=1&docid=207647&pageid=27160&typegroupid=6" target="_blank" rel="noreferrer">Thông tư 01/2023/TT-BTNMT</a>.
        <span className="block mt-1 text-slate-500">Nội dung rà soát ngày 27/10/2026. Khi dùng quy chuẩn hoặc dịch vụ bên thứ ba, hãy kiểm tra phiên bản hiện hành.</span>
      </div>
    </div>
  );
}
