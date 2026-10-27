import { LessonCard, CompetitionTrackInfo } from '../types';

export const COMPETITION_TRACKS: Record<'nckh' | 'tech', CompetitionTrackInfo> = {
  nckh: {
    id: 'nckh',
    title: 'Bảng Nghiên Cứu Khoa Học (NCKH)',
    shortTitle: 'Nghiên cứu Khoa học',
    badge: 'Khảo sát & Thực nghiệm',
    icon: '🔬',
    targetDescription: 'Dành cho các đề tài xuất phát từ câu hỏi nghiên cứu, giả thuyết khoa học (Sinh học, Hóa học, Môi trường, Y sinh, Khoa học Xã hội & Hành vi). Cần thu thập dữ liệu, phân tích thống kê và kiểm định giả thuyết.',
    exampleTopics: [
      'Đánh giá chất lượng nguồn nước sinh hoạt tại địa phương',
      'Nghiên cứu ảnh hưởng của thời gian sử dụng điện thoại đến thị lực học sinh',
      'Khảo sát hoạt tính kháng khuẩn của tinh dầu sả chanh',
      'Thực trạng và giải pháp giảm thiểu rác thải nhựa tại trường học'
    ],
    vibeCodingBenefit: 'Dùng Vibe Coding để tạo Web App phân tích số liệu thực nghiệm tự động, vẽ biểu đồ phân bố và bảng tra cứu kết quả cho Hội đồng Giám khảo.'
  },
  tech: {
    id: 'tech',
    title: 'Bảng Công Nghệ Kỹ Thuật (KHKT)',
    shortTitle: 'Công nghệ Kỹ thuật',
    badge: 'Mô hình & Thiết bị',
    icon: '⚙️',
    targetDescription: 'Dành cho các đề tài chế tạo thiết bị, hệ thống cơ điện tử, robot, thiết bị IoT và phần mềm ứng dụng giải quyết các bài toán kỹ thuật đời sống.',
    exampleTopics: [
      'Hệ thống tưới cây tự động dựa trên độ ẩm đất và dự báo thời tiết',
      'Thùng rác thông minh tự động mở nắp và phân loại rác tái chế',
      'Thiết bị cảnh báo sớm rò rỉ khí gas và cháy nổ nhà bếp',
      'Đèn bàn học thông minh tự động điều chỉnh độ sáng bảo vệ mắt'
    ],
    vibeCodingBenefit: 'Dùng Vibe Coding để xây dựng Bảng điều khiển (Dashboard) kết nối cảm biến thời gian thực, có nút bấm mô phỏng sự cố để Giám khảo bấm thử.'
  }
};

export const LESSONS_NCKH: LessonCard[] = [
  {
    id: 'nckh-1',
    stepNumber: '01',
    title: 'Vibe Coding trong Nghiên Cứu Khoa Học',
    duration: '8 PHÚT',
    description: 'Hiểu đúng cách dùng ngôn ngữ tự nhiên để chỉ đạo AI xây dựng công cụ phân tích số liệu nghiên cứu mà không cần giỏi lập trình.',
    theme: 'blue',
    questionId: 1,
    track: 'nckh',
    keyPoints: [
      'Nhà nghiên cứu đóng vai trò đưa ra giả thuyết và câu hỏi khoa học.',
      'AI đóng vai trò lập trình viên hỗ trợ viết các hàm tính toán thống kê và trực quan hóa dữ liệu.',
      'Giúp học sinh và giáo viên tập trung 100% vào phương pháp nghiên cứu và tính xác thực của thí nghiệm.'
    ],
    samplePrompt: 'Tôi có một bảng số liệu khảo sát gồm 100 học sinh về số giờ ngủ và điểm thi. Hãy viết cho tôi một ứng dụng web tính giá trị trung bình, độ lệch chuẩn và vẽ biểu đồ phân tán (scatter plot) thể hiện mối tương quan giữa hai yếu tố này.',
    contentHtml: `
      <h3>1. Vibe Coding giúp ích gì cho đề tài NCKH?</h3>
      <p>Trong đề tài Nghiên cứu Khoa học, điều quý giá nhất là <strong>ý tưởng nghiên cứu, phương pháp thực nghiệm và tính liêm chính của số liệu</strong>. Tuy nhiên, nhiều nhóm học sinh gặp khó khăn khi phải xử lý hàng trăm mẫu khảo sát hoặc số liệu đo đạc.</p>
      
      <p>Với <strong>Vibe Coding</strong>, bạn không cần phải học code Python hay R phức tạp. Bạn chỉ cần mô tả bằng tiếng Việt:</p>
      <div class="p-3.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 my-3 font-mono">
        "Hãy viết cho tôi một trang web cho phép tải file Excel khảo sát môi trường nước lên, tự động tính chỉ số WQI và hiển thị biểu đồ so sánh giữa 5 điểm lấy mẫu."
      </div>
      <p>AI sẽ đóng vai trò trợ lý thống kê, lập tức viết mã nguồn tạo ra trang web phân tích theo đúng tiêu chuẩn khoa học bạn yêu cầu.</p>
    `,
  },
  {
    id: 'nckh-2',
    stepNumber: '02',
    title: 'Hiểu bản chất Token & API (Không cần cài đặt)',
    duration: '10 PHÚT',
    description: 'Hiểu Token là các mẩu từ ngữ và API là người đưa thư kết nối web với AI. Bạn KHÔNG cần phải tự mua hay nhập bất kỳ API key nào.',
    theme: 'green',
    questionId: 1,
    track: 'nckh',
    keyPoints: [
      'Token là các mẩu từ ngữ nhỏ mà mô hình AI đếm để tiếp nhận toàn bộ bài báo nghiên cứu.',
      'API là cây cầu dữ liệu kết nối ứng dụng nghiên cứu của bạn với siêu máy tính AI.',
      'Học sinh và giáo viên chỉ cần hiểu nguyên lý vận hành, hoàn toàn không cần phải lấy hay nhập API key phức tạp.'
    ],
    samplePrompt: 'Gửi yêu cầu phân tích dữ liệu qua API: Ứng dụng gửi số liệu đo đạc lên máy chủ AI -> Nhận về nhận xét khoa học và khuyến nghị tự động.',
    toolType: 'token-calculator',
    contentHtml: `
      <h3>1. Token là gì? (Mảnh ghép văn bản khoa học)</h3>
      <p>AI không đọc cả cuốn báo cáo dày cộp như mắt người. Nó chia bài viết thành các mảnh nhỏ gọi là <strong>Token</strong>. Các mô hình hiện đại có cửa sổ ngữ cảnh lên tới hàng triệu token, đủ để đọc trọn vẹn cả tập tài liệu nghiên cứu dày 100 trang của nhóm bạn.</p>

      <h3>2. API là gì? (Người đưa thư kết nối dữ liệu)</h3>
      <p>Tưởng tượng trang web của nhóm bạn là phòng thí nghiệm trường học, còn máy chủ AI là viện hàn lâm khoa học. <strong>API chính là người đưa thư:</strong> mang bảng số liệu thực nghiệm của bạn gửi tới viện hàn lâm, và đem kết luận phân tích mang về hiển thị trên màn hình.</p>
      <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 my-3">
        <strong>Lưu ý quan trọng:</strong> Bạn KHÔNG cần phải tìm mua hay nhập API Key cá nhân. Mục tiêu ở đây là hiểu cách dữ liệu di chuyển an toàn giữa các phần mềm.
      </div>
    `,
  },
  {
    id: 'nckh-3',
    stepNumber: '03',
    title: 'Ứng dụng Vibe Coding cho Bảng thi NCKH',
    duration: '12 PHÚT',
    description: 'Chuyển đổi các bảng số liệu tĩnh trong sổ tay thành Web App phân tích động giúp Hội đồng Giám khảo kiểm chứng dữ liệu tức thì.',
    theme: 'orange',
    questionId: 2,
    track: 'nckh',
    keyPoints: [
      'Thay vì bắt Giám khảo đọc hàng chục trang bảng biểu số liệu khô khan, hãy cung cấp màn hình tra cứu lọc mẫu theo ngày/khu vực.',
      'Tự động vẽ các dạng biểu đồ khoa học: Biểu đồ cột so sánh đối chứng, Biểu đồ phân tán (Scatter), Biểu đồ hộp (Boxplot).',
      'Giúp chứng minh tính xác thực và khả năng lặp lại của thí nghiệm khoa học.'
    ],
    samplePrompt: 'Tạo ứng dụng NCKH: Cho phép chọn điểm lấy mẫu nước (Điểm A, B, C), hiển thị biểu đồ dao động pH và nồng độ oxy hòa tan qua 7 ngày theo tiêu chuẩn QCVN.',
    toolType: 'nckh-prompt-builder',
    contentHtml: `
      <h3>1. Ban Giám Khảo đánh giá cao điều gì ở đề tài NCKH?</h3>
      <p>Trong 5 - 10 phút thuyết minh, giám khảo muốn thấy:</p>
      <ul class="list-disc list-inside space-y-1.5 my-3 text-sm text-slate-700">
        <li><strong>Tính thực tế:</strong> Số liệu có thật từ thực địa hay thí nghiệm phòng lab không?</li>
        <li><strong>Phương pháp xử lý:</strong> Phân tích số liệu có đúng phương pháp thống kê khoa học không?</li>
        <li><strong>Khả năng kiểm chứng:</strong> Giám khảo có thể tự tay lọc xem từng lô thí nghiệm được không?</li>
      </ul>
      <p>Vibe Coding cho phép bạn tạo ra một trang web tương tác chỉ trong 1 buổi chiều, cho phép giám khảo chọn thử từng lô mẫu để thấy ngay biểu đồ thay đổi sinh động.</p>
    `,
  },
  {
    id: 'nckh-4',
    stepNumber: '04',
    title: 'Chuẩn bị gì trước khi Vibe Coding đề tài NCKH?',
    duration: '10 PHÚT',
    description: 'Chuẩn bị bảng biến số nghiên cứu, bộ số liệu thực nghiệm mẫu (CSV/Excel) và câu hỏi khoa học cốt lõi.',
    theme: 'blue',
    questionId: 3,
    track: 'nckh',
    keyPoints: [
      'Xác định rõ: Biến độc lập (yếu tố tác động) và Biến phụ thuộc (kết quả đo được).',
      'Chuẩn bị file số liệu mẫu: 10 - 20 dòng đo đạc thực tế có ghi rõ đơn vị đo (mg/L, %, độ C, số lượng...).',
      'Công thức tính toán khoa học hoặc quy chuẩn đối chiếu (ví dụ: QCVN, tiêu chuẩn WHO...).'
    ],
    samplePrompt: 'Tôi có file mẫu gồm các cột: Ngay_Do, Nhiet_Do_C, Nong_Do_ppm, Nhom_Doi_Chung. Hãy viết web đọc file này và vẽ biểu đồ so sánh giữa nhóm thử nghiệm và nhóm đối chứng.',
    toolType: 'readiness-checklist',
    contentHtml: `
      <h3>Hành trang chuẩn bị cho nhóm NCKH:</h3>
      <div class="space-y-3 my-4">
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">1. Bảng số liệu thực nghiệm mẫu (Sample CSV)</strong>
          <span class="text-xs text-slate-600 mt-1 block">Một bảng Excel đơn giản ghi lại kết quả các lần lặp lại thí nghiệm.</span>
        </div>
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">2. Công thức và tiêu chuẩn đối chiếu</strong>
          <span class="text-xs text-slate-600 mt-1 block">Công thức tính trung bình, tỷ lệ % hoặc ngưỡng an toàn theo tài liệu chuyên ngành.</span>
        </div>
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">3. Thiết bị làm việc</strong>
          <span class="text-xs text-slate-600 mt-1 block">Máy tính có trình duyệt web và kết nối mạng để trò chuyện cùng trợ lý AI.</span>
        </div>
      </div>
    `,
  },
  {
    id: 'nckh-5',
    stepNumber: '05',
    title: 'Cách viết Prompt chuẩn xác cho bài toán NCKH',
    duration: '10 PHÚT',
    description: 'Kỹ năng mô tả cấu trúc dữ liệu thí nghiệm để AI lập trình giao diện phân tích chính xác, không bị sai lệch số liệu.',
    theme: 'purple',
    questionId: 3,
    track: 'nckh',
    keyPoints: [
      'Cung cấp định dạng cột dữ liệu rõ ràng (tên cột, kiểu số, đơn vị tính).',
      'Yêu cầu AI hiển thị đường tham chiếu chuẩn (Reference line) để giám khảo thấy rõ ngưỡng đạt/vượt chuẩn.',
      'Yêu cầu tính năng xuất file báo cáo (Export PDF / Excel) từ số liệu phân tích.'
    ],
    samplePrompt: 'Hãy tạo cho tôi biểu đồ cột so sánh tỷ lệ nảy mầm của 3 nồng độ dung dịch A, B, C. Trục tung là tỷ lệ % (0-100), trục hoành là 3 nồng độ. Thêm đường nét đứt màu đỏ ở mức 70% là ngưỡng tiêu chuẩn đạt yêu cầu.',
    contentHtml: `
      <h3>Bí quyết giao việc cho AI trong đề tài NCKH:</h3>
      <ul class="list-disc list-inside space-y-2 my-3 text-sm text-slate-700 leading-relaxed">
        <li><strong>Không nói chung chung:</strong> Đừng chỉ bảo "Hãy vẽ biểu đồ số liệu", mà hãy chỉ rõ: "Hãy vẽ biểu đồ đường biểu diễn sự thay đổi của nồng độ chất X qua 24 giờ".</li>
        <li><strong>Đơn vị đo lường:</strong> Luôn nhắc AI ghi rõ đơn vị (mg/L, %, độ C) trên các trục tọa độ để đảm bảo tính chuẩn mực học thuật.</li>
        <li><strong>Xử lý ngoại lai:</strong> Yêu cầu AI tô màu cam hoặc đỏ những mẫu đo có kết quả bất thường để nhóm dễ giải trình trước giám khảo.</li>
      </ul>
    `,
  },
  {
    id: 'nckh-6',
    stepNumber: '06',
    title: 'Deploy Báo Cáo Nghiên Cứu Lên Web & Tạo Mã QR',
    duration: '10 PHÚT',
    description: 'Xuất bản trang tra cứu kết quả nghiên cứu thành đường link trực tuyến, in mã QR đính kèm vào poster báo cáo khoa học.',
    theme: 'green',
    questionId: 4,
    track: 'nckh',
    keyPoints: [
      'Đưa trang web phân tích lên Internet miễn phí qua Vercel để Hội đồng chấm thi có thể truy cập bất kỳ lúc nào.',
      'In mã QR dán ở góc bài báo cáo khoa học hoặc poster dự thi.',
      'Giám khảo chỉ cần dùng điện thoại quét mã là mở ra ngay trang phân tích dữ liệu gốc của đề tài.'
    ],
    samplePrompt: 'https://de-tai-nckh-moi-truong.vercel.app',
    toolType: 'deploy-generator',
    contentHtml: `
      <h3>Xuất bản sản phẩm NCKH ra môi trường thực tế:</h3>
      <p>Sau khi AI giúp nhóm lập trình xong trang phân tích, bạn chỉ cần một thao tác xuất bản (Deploy) là trang web sẽ có đường link công khai dạng <code>https://ten-de-tai.vercel.app</code>.</p>
      
      <p>Trong ngày thi, khi Ban Giám Khảo đứng trước poster báo cáo của bạn, bạn có thể tự tin mời thầy cô:</p>
      <div class="p-3 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 my-3">
        <em>"Kính mời Thầy Cô quét mã QR này để tra cứu trực tiếp toàn bộ dữ liệu gốc của 200 mẫu thí nghiệm và xem biểu đồ tương quan tương tác ạ!"</em>
      </div>
    `,
  }
];

export const LESSONS_TECH: LessonCard[] = [
  {
    id: 'tech-1',
    stepNumber: '01',
    title: 'Vibe Coding trong Công Nghệ Kỹ Thuật',
    duration: '8 PHÚT',
    description: 'Cách dùng ngôn ngữ tự nhiên để chỉ đạo AI tạo giao diện điều khiển (Dashboard) và kết nối thiết bị phần cứng thông minh.',
    theme: 'blue',
    questionId: 1,
    track: 'tech',
    keyPoints: [
      'Học sinh tập trung vào ý tưởng chế tạo, lắp ráp cơ khí và lựa chọn cảm biến phần cứng.',
      'AI đảm nhận việc viết toàn bộ giao diện bảng điều khiển hiển thị trên máy tính hoặc điện thoại.',
      'Không cần mất cả tháng học lập trình web, chỉ cần mô tả thiết bị hoạt động ra sao là AI sẽ code ngay.'
    ],
    samplePrompt: 'Tôi có một thiết bị tưới cây tự động dùng cảm biến độ ẩm đất. Hãy làm cho tôi một bảng điều khiển gồm: 1 đồng hồ đo độ ẩm (0-100%), 1 công tắc bật/tắt máy bơm thủ công, và 1 nút chuyển sang chế độ tự động.',
    contentHtml: `
      <h3>1. Vibe Coding giải phóng sức sáng tạo kỹ thuật như thế nào?</h3>
      <p>Trước đây, một học sinh chế tạo thành công một mô hình phần cứng (như xe dọn rác, máy tưới cây, hệ thống báo cháy) thường bị "tắc" ở khâu viết ứng dụng điều khiển trên máy tính hoặc điện thoại vì phần mềm quá phức tạp.</p>
      
      <p>Với <strong>Vibe Coding</strong>, bạn chỉ cần diễn đạt logic hoạt động:</p>
      <div class="p-3.5 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 my-3 font-mono">
        "Hãy tạo một bảng điều khiển thiết bị: Khi cảm biến gas phát hiện nồng độ vượt 500ppm, màn hình lập tức đổi sang màu đỏ nhấp nháy, phát tiếng còi hú và hiển thị nút tắt van khẩn cấp."
      </div>
      <p>AI sẽ tự động xây dựng giao diện hoàn chỉnh có đầy đủ nút bấm, đồng hồ đo và thông báo chỉ trong vài phút.</p>
    `,
  },
  {
    id: 'tech-2',
    stepNumber: '02',
    title: 'Bản chất Token & API trong điều khiển thiết bị',
    duration: '10 PHÚT',
    description: 'Cách hiểu về chuỗi dữ liệu (Token) và chiếc cầu nối truyền tín hiệu (API) giữa thiết bị phần cứng và giao diện web.',
    theme: 'green',
    questionId: 1,
    track: 'tech',
    keyPoints: [
      'Token là các mẩu đơn vị ký tự dữ liệu gửi nhận giữa cảm biến và máy chủ.',
      'API là chuẩn giao thức để trang web của bạn nhận thông số cảm biến hoặc gửi lệnh bật/tắt thiết bị.',
      'Người học chỉ cần nắm nguyên lý kết nối, không phải tự mua hay nhập bất kỳ API key nào.'
    ],
    samplePrompt: 'Mô phỏng API: Thiết bị cảm biến gửi gói tin { "temperature": 32, "humidity": 65 } lên web qua HTTP POST.',
    toolType: 'token-calculator',
    contentHtml: `
      <h3>1. API trong thiết bị kỹ thuật đóng vai trò gì?</h3>
      <p>Tưởng tượng mạch điện ESP32 hoặc Arduino của bạn là người đo đạc, còn trang web trên điện thoại là bảng hiển thị. <strong>API chính là đường dây điện thoại:</strong></p>
      <ul class="list-disc list-inside space-y-1.5 my-3 text-sm text-slate-700">
        <li>Cảm biến gửi gói tin đo được qua API: <em>"Nhiệt độ hiện tại là 35°C"</em>.</li>
        <li>Bạn bấm nút trên web, trang web gửi lệnh qua API: <em>"Bật quạt làm mát ngay"</em>.</li>
      </ul>
      <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 my-3">
        <strong>Lưu ý:</strong> Toàn bộ nguyên lý này được mô phỏng trực quan. Bạn không cần phải cài đặt phức tạp hay nhập bất kỳ khóa API nào trên giao diện này.
      </div>
    `,
  },
  {
    id: 'tech-3',
    stepNumber: '03',
    title: 'Ứng dụng Vibe Coding cho Bảng thi Công Nghệ Kỹ Thuật',
    duration: '12 PHÚT',
    description: 'Xây dựng Bảng điều khiển (Dashboard) thời gian thực và tích hợp nút kiểm thử sự cố dành riêng cho Ban Giám Khảo.',
    theme: 'orange',
    questionId: 2,
    track: 'tech',
    keyPoints: [
      'Trang bị đồng hồ kim, biểu đồ nhiệt độ động thời gian thực.',
      'Tạo sẵn nút "Giả lập sự cố khẩn cấp" (ví dụ: mô phỏng đất khô cạn, nhiệt độ tăng vọt) để minh họa cơ chế tự động trong 10 giây.',
      'Tương thích hoàn hảo trên màn hình điện thoại để Giám khảo tự tay bấm điều khiển thử.'
    ],
    samplePrompt: 'Tạo Dashboard kỹ thuật: Gồm 1 đồng hồ đo nhiệt độ hình bán nguyệt (Gauge), 1 biểu đồ đường 24h và nút bấm giả lập nhiệt độ tăng lên 80 độ C để kiểm tra còi báo động.',
    toolType: 'nckh-prompt-builder',
    contentHtml: `
      <h3>Bí quyết ghi điểm tuyệt đối tại gian hàng KHKT:</h3>
      <p>Khi Ban Giám Khảo đến xem mô hình thiết bị của bạn, nếu bạn chỉ đứng nói lý thuyết thì giám khảo sẽ không thấy được sự hấp dẫn. Nhưng nếu bạn mời:</p>
      <div class="p-3.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-800 my-3 leading-relaxed">
        <em>"Kính mời Thầy Cô bấm nút 'Giả lập tình huống khẩn cấp' trên màn hình này ạ. Ngay lập tức rơ-le trên mạch sẽ đóng cắt và quạt thông gió sẽ quay!"</em>
      </div>
      <p>Tính tương tác trực tiếp này chứng minh hệ thống của bạn đã thực sự hoàn thiện và vận hành ổn định.</p>
    `,
  },
  {
    id: 'tech-4',
    stepNumber: '04',
    title: 'Chuẩn bị gì trước khi Vibe Coding sản phẩm kỹ thuật?',
    duration: '10 PHÚT',
    description: 'Chuẩn bị sơ đồ khối hệ thống, danh mục cảm biến, ngưỡng đo an toàn và logic đóng ngắt thiết bị.',
    theme: 'blue',
    questionId: 3,
    track: 'tech',
    keyPoints: [
      'Sơ đồ khối hệ thống: Khối cảm biến đầu vào -> Khối xử lý trung tâm -> Khối cơ cấu chấp hành (động cơ, đèn, còi).',
      'Bảng thông số cảm biến: Dải đo (0-100%), đơn vị, ngưỡng cảnh báo (ví dụ độ ẩm < 30%).',
      'Kịch bản kiểm thử: Những tình huống mà bạn muốn trình diễn cho Ban Giám Khảo thấy.'
    ],
    samplePrompt: 'Sơ đồ hệ thống: Cảm biến khoảng cách siêu âm (0 - 200cm). Khi có người đứng cách dưới 50cm, hiển thị đèn xanh chào đón và mở cửa tự động.',
    toolType: 'readiness-checklist',
    contentHtml: `
      <h3>3 Thành phần cần chuẩn bị trước:</h3>
      <div class="space-y-3 my-4">
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">1. Sơ đồ nguyên lý thiết bị (Block Diagram)</strong>
          <span class="text-xs text-slate-600 mt-1 block">Vẽ phác thảo trên giấy: Cảm biến gì gửi thông tin vào? Thiết bị gì sẽ hoạt động ở đầu ra?</span>
        </div>
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">2. Bảng ngưỡng đo lường</strong>
          <span class="text-xs text-slate-600 mt-1 block">Xác định rõ mức nào là bình thường (xanh), mức nào cần cảnh báo (vàng), mức nào nguy hiểm (đỏ).</span>
        </div>
        <div class="p-3.5 bg-white border border-slate-200 rounded-xl">
          <strong class="text-slate-900 text-sm block">3. Thiết bị lập trình và hiển thị</strong>
          <span class="text-xs text-slate-600 mt-1 block">Máy tính xách tay hoặc máy tính bảng kết nối WiFi để trình chiếu trang điều khiển.</span>
        </div>
      </div>
    `,
  },
  {
    id: 'tech-5',
    stepNumber: '05',
    title: 'Viết Prompt điều khiển & Kỹ năng Debug thiết bị',
    duration: '10 PHÚT',
    description: 'Cách viết câu lệnh để AI tạo đúng giao diện nút gạt, đồng hồ đo và cách xử lý khi hiển thị bị sai lệch tín hiệu.',
    theme: 'purple',
    questionId: 3,
    track: 'tech',
    keyPoints: [
      'Yêu cầu giao diện to, rõ ràng, các nút bấm thao tác dễ dàng ngay cả trên màn hình cảm ứng.',
      'Xử lý tình huống mất kết nối: Hiển thị trạng thái "Đang kết nối lại..." thay vì để trang web bị đơ.',
      'Debug nhanh: Copy nguyên văn lỗi trên bảng điều khiển giao cho AI sửa từng chi tiết.'
    ],
    samplePrompt: 'Hãy tạo cho tôi giao diện công tắc gạt bật/tắt đèn gồm 3 trạng thái: TẮT, BẬT, và TỰ ĐỘNG THEO CẢM BIẾN ÁNH SÁNG. Nút bấm to bản để bấm được trên iPad.',
    contentHtml: `
      <h3>Kỹ năng đặt lệnh Vibe Coding cho sản phẩm kỹ thuật:</h3>
      <ul class="list-disc list-inside space-y-2 my-3 text-sm text-slate-700 leading-relaxed">
        <li><strong>Thiết kế thân thiện cảm ứng:</strong> Dặn AI làm nút bấm có kích thước lớn, màu sắc tương phản cao để khi chấm thi bằng điện thoại, giám khảo bấm vào không bị trượt.</li>
        <li><strong>Nguyên tắc từng bước:</strong> Yêu cầu AI làm phần hiển thị thông số trước. Sau khi chạy ổn định mới bổ sung tính năng điều khiển bật tắt động cơ.</li>
      </ul>
    `,
  },
  {
    id: 'tech-6',
    stepNumber: '06',
    title: 'Deploy Bảng Điều Khiển & Dán Mã QR Lên Thiết Bị',
    duration: '10 PHÚT',
    description: 'Xuất bản ứng dụng điều khiển lên Internet, in mã QR dán thẳng lên vỏ hộp sản phẩm để điều khiển không dây bằng điện thoại.',
    theme: 'green',
    questionId: 4,
    track: 'tech',
    keyPoints: [
      'Xuất bản Web App lên máy chủ đám mây (Vercel) để có đường link HTTPS hoạt động trên mọi điện thoại.',
      'In mã QR dán lên poster hoặc vỏ hộp thiết bị kỹ thuật.',
      'Giám khảo chỉ cần dùng điện thoại cá nhân quét mã là có thể điều khiển thiết bị từ xa qua WiFi mà không cần cắm dây rườm rà.'
    ],
    samplePrompt: 'https://he-thong-tuoi-thong-minh.vercel.app',
    toolType: 'deploy-generator',
    contentHtml: `
      <h3>Tạo mã QR điều khiển từ xa cho gian hàng:</h3>
      <p>Sau khi Vibe Coding xong giao diện, bạn deploy lên mạng để có đường link web. Sau đó sinh một <strong>mã QR</strong> và in dán trực tiếp lên mô hình sản phẩm.</p>
      
      <p>Lợi ích lớn nhất khi chấm thi:</p>
      <ul class="list-disc list-inside space-y-1.5 my-3 text-sm text-slate-700">
        <li>Không cần dây cáp nối lòng thòng giữa máy tính và mô hình.</li>
        <li>Ban Giám Khảo có thể đứng cách xa 3 mét, dùng điện thoại cá nhân quét mã QR và trực tiếp bấm thử các tính năng của sản phẩm.</li>
      </ul>
    `,
  }
];
