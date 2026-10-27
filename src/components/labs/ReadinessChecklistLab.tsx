import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { CompetitionTrack } from '../../types';

interface PreFlightItem {
  id: string;
  title: string;
  desc: string;
}

const COMMON_ITEMS: PreFlightItem[] = [
  {
    id: 'c-1',
    title: 'Ý tưởng và bài toán mục tiêu',
    desc: 'Đội thi đã xác định rõ mục đích của đề tài và đối tượng thụ hưởng sản phẩm.'
  },
  {
    id: 'c-2',
    title: 'Tiêu chí kiểm chứng sản phẩm',
    desc: 'Viết trước kết quả nào được xem là đúng và cách kiểm tra kết quả đó.'
  },
  {
    id: 'c-3',
    title: 'Thiết bị làm việc kết nối Internet',
    desc: 'Máy tính có cài đặt trình duyệt hiện đại (Google Chrome hoặc Microsoft Edge).'
  },
  {
    id: 'c-4',
    title: 'Bảo vệ tài khoản và khóa truy cập',
    desc: 'Không dán khóa bí mật vào mã nguồn hoặc chia sẻ trong ảnh chụp màn hình.'
  },
  {
    id: 'c-5',
    title: 'Phân công vai trò trong nhóm',
    desc: 'Phân công thành viên phụ trách ý tưởng, kiểm thử giao diện và chuẩn bị thuyết minh.'
  },
  {
    id: 'c-6',
    title: 'Tâm thế chủ động thử nghiệm',
    desc: 'Sẵn sàng kiểm thử và tinh chỉnh từng bước cùng trợ lý AI trong buổi thực hành.'
  }
];

const TRACK_ITEMS: Record<CompetitionTrack, PreFlightItem[]> = {
  nckh: [
    {
      id: 'n-1',
      title: 'Dữ liệu mẫu và từ điển dữ liệu',
      desc: 'Có 10–20 dòng mẫu, tên cột, đơn vị đo và cách xử lý giá trị thiếu.'
    },
    {
      id: 'n-2',
      title: 'Đồng thuận và ẩn danh dữ liệu',
      desc: 'Đã bỏ thông tin định danh; có sự đồng thuận khi khảo sát con người.'
    },
    {
      id: 'n-3',
      title: 'Phương pháp phân tích và nguồn chuẩn',
      desc: 'Xác định phép tính, giả định thống kê và phiên bản quy chuẩn sử dụng.'
    }
  ],
  tech: [
    {
      id: 't-1',
      title: 'Sơ đồ khối và giao thức kết nối',
      desc: 'Ghi rõ cảm biến, bộ xử lý, cơ cấu chấp hành và HTTP/MQTT/WebSocket nếu có.'
    },
    {
      id: 't-2',
      title: 'Ngưỡng an toàn và dừng khẩn cấp',
      desc: 'Có giới hạn điều khiển, nút dừng vật lý và trạng thái an toàn khi mất mạng.'
    },
    {
      id: 't-3',
      title: 'Kịch bản thử nghiệm có giám sát',
      desc: 'Chỉ mô phỏng lỗi an toàn; không cho liên kết công khai điều khiển tải nguy hiểm.'
    }
  ]
};

export default function ReadinessChecklistLab({ track = 'nckh' }: { track?: CompetitionTrack }) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const items = [...TRACK_ITEMS[track], ...COMMON_ITEMS];

  const toggleItem = (id: string) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const percentage = Math.round((checkedIds.length / items.length) * 100);

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 my-6 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">
            Bảng kiểm tra độ sẵn sàng trước buổi tập huấn
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Danh sách thay đổi theo nhánh học; trạng thái ban đầu để trống để bạn tự xác nhận
          </p>
        </div>

        <div className="text-xs font-medium text-slate-600">
          Đạt: <span className="font-bold text-blue-600">{checkedIds.length}/{items.length}</span> ({percentage}%)
        </div>
      </div>

      <div className="my-3 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3">
        {items.map((item) => {
          const isDone = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3 rounded-lg border transition cursor-pointer flex items-start gap-2.5 select-none ${
                isDone
                  ? 'bg-blue-50/40 border-blue-200 text-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300" />
                )}
              </div>
              <div>
                <span className="text-xs font-semibold block text-slate-900">
                  {item.title}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
