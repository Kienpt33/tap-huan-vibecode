import { CompetitionTrack, CompetitionTrackInfo, LessonCard } from '../types';

export const COMPETITION_TRACKS: Record<CompetitionTrack, CompetitionTrackInfo> = {
  nckh: {
    id: 'nckh',
    title: 'Nhánh Nghiên cứu Khoa học (NCKH)',
    shortTitle: 'Nghiên cứu Khoa học',
    badge: 'Dữ liệu & Thực nghiệm',
    icon: '🔬',
    targetDescription: 'Dành cho đề tài khảo sát, thực nghiệm và phân tích dữ liệu.',
    exampleTopics: ['Theo dõi cây trong sân trường', 'Khảo sát thói quen đọc sách', 'Phân loại rác trong lớp học'],
    vibeCodingBenefit: 'Dùng AI để tạo một ứng dụng nhỏ giúp nhập, xem và kiểm tra dữ liệu.'
  },
  tech: {
    id: 'tech',
    title: 'Nhánh Giải pháp Kỹ thuật',
    shortTitle: 'Giải pháp Kỹ thuật',
    badge: 'Mô hình & Ứng dụng',
    icon: '⚙️',
    targetDescription: 'Dành cho ứng dụng, thiết bị, IoT và giải pháp hỗ trợ dạy học.',
    exampleTopics: ['Bảng theo dõi tưới cây', 'Ứng dụng phân loại rác', 'Bộ đếm sách thư viện lớp'],
    vibeCodingBenefit: 'Dùng AI để tạo giao diện mô phỏng trước khi kết nối thiết bị thật.'
  }
};

const GOOGLE_TERMS = 'https://ai.google.dev/gemini-api/terms';
const GOOGLE_TROUBLESHOOT = 'https://ai.google.dev/gemini-api/docs/troubleshoot-ai-studio';
const GOOGLE_BUILD = 'https://ai.google.dev/gemini-api/docs/aistudio-build-mode';

function createLessons(track: CompetitionTrack): LessonCard[] {
  const isResearch = track === 'nckh';
  const trackName = isResearch ? 'NCKH' : 'Giải pháp Kỹ thuật';
  const firstIdea = isResearch
    ? 'một ứng dụng ghi lại chiều cao của 10 cây đậu theo từng ngày và vẽ biểu đồ đơn giản'
    : 'một bảng điều khiển mô phỏng độ ẩm đất, có nút bật/tắt máy bơm ở chế độ demo';

  return [
    {
      id: `${track}-1`,
      stepNumber: '01',
      title: 'Hiểu Vibe Coding trong 5 phút',
      duration: '5 PHÚT',
      description: 'Hiểu vai trò của giáo viên, AI và quy trình tạo một ứng dụng bằng lời nói thông thường.',
      theme: 'blue',
      questionId: 1,
      track,
      keyPoints: [
        'Bạn mô tả điều muốn làm; AI tạo bản đầu tiên.',
        'Bạn chạy thử, chỉ ra điều chưa đúng và yêu cầu AI sửa.',
        'AI là trợ lý viết mã, không tự quyết định nội dung chuyên môn.'
      ],
      samplePrompt: `Tôi là giáo viên tiểu học. Hãy giúp tôi tạo ${firstIdea}. Trước tiên, hãy hỏi tôi 3 câu để làm rõ yêu cầu.`,
      contentHtml: `
        <h3>Vibe Coding là gì?</h3>
        <p>Vibe Coding là cách tạo phần mềm bằng việc <strong>mô tả mong muốn bằng ngôn ngữ tự nhiên</strong>. AI viết bản nháp, còn bạn quyết định sản phẩm cần làm gì và kiểm tra xem nó có đúng không.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 my-4 text-center text-xs">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3"><strong class="block text-blue-600">1. Mô tả</strong><span>Nói rõ nhu cầu</span></div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3"><strong class="block text-blue-600">2. Tạo</strong><span>AI làm bản đầu</span></div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3"><strong class="block text-blue-600">3. Thử</strong><span>Bạn bấm và xem</span></div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3"><strong class="block text-blue-600">4. Sửa</strong><span>Yêu cầu cải tiến</span></div>
        </div>
        <p><strong>Bạn không cần biết lập trình để bắt đầu.</strong> Tuy nhiên, bạn cần biết mình muốn giải quyết vấn đề gì và chịu trách nhiệm kiểm tra kết quả.</p>
      `
    },
    {
      id: `${track}-2`,
      stepNumber: '02',
      title: 'Đăng nhập Google AI Studio an toàn',
      duration: '7 PHÚT',
      description: 'Chuẩn bị tài khoản, hiểu giới hạn 18 tuổi và mở đúng khu vực tạo ứng dụng.',
      theme: 'green',
      questionId: 2,
      track,
      keyPoints: [
        'Google AI Studio yêu cầu người sử dụng từ 18 tuổi trở lên.',
        'Giáo viên đăng nhập; học sinh tiểu học không tự sử dụng tài khoản AI Studio.',
        'Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm của học sinh.'
      ],
      samplePrompt: '',
      toolType: 'ai-studio-login',
      contentHtml: `
        <h3>Bạn cần chuẩn bị gì?</h3>
        <ul class="list-disc list-inside space-y-2 my-3 text-sm text-slate-700">
          <li>Máy tính có Chrome hoặc Edge và kết nối Internet.</li>
          <li>Tài khoản Google của người từ 18 tuổi trở lên.</li>
          <li>Một ý tưởng nhỏ, có thể mô tả trong 2–3 câu.</li>
        </ul>
        <div class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 my-4">
          <strong>Lưu ý cho trường tiểu học:</strong> giáo viên là người thao tác với AI Studio và trình chiếu kết quả phù hợp. Không yêu cầu học sinh tạo tài khoản hoặc tự đăng nhập.
        </div>
      `,
      references: [
        { label: 'Điều khoản Gemini API — Yêu cầu 18+', url: GOOGLE_TERMS },
        { label: 'Khắc phục lỗi đăng nhập AI Studio', url: GOOGLE_TROUBLESHOOT }
      ]
    },
    {
      id: `${track}-3`,
      stepNumber: '03',
      title: `Viết prompt đầu tiên cho nhánh ${trackName}`,
      duration: '12 PHÚT',
      description: 'Biến ý tưởng thành một câu lệnh rõ ràng để AI có thể tạo đúng sản phẩm mong muốn.',
      theme: 'orange',
      questionId: 3,
      track,
      keyPoints: [
        'Nói rõ người dùng, mục tiêu và dữ liệu đầu vào.',
        'Liệt kê 3–5 chức năng quan trọng nhất.',
        'Yêu cầu giao diện tiếng Việt, đơn giản và dễ dùng trên máy tính.'
      ],
      samplePrompt: `Tôi là giáo viên tiểu học và muốn tạo ${firstIdea}. Giao diện bằng tiếng Việt, chữ dễ đọc. Hãy hỏi lại nếu còn thiếu thông tin, sau đó tạo bản chạy thử và giải thích cách sử dụng.`,
      toolType: 'nckh-prompt-builder',
      contentHtml: `
        <h3>Công thức prompt dễ nhớ</h3>
        <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 my-3 text-sm text-blue-950">
          <strong>Tôi là ai</strong> + <strong>Tôi muốn làm gì</strong> + <strong>Dữ liệu có gì</strong> + <strong>Sản phẩm cần làm được gì</strong> + <strong>Cách kiểm tra</strong>
        </div>
        <p>Không cần viết prompt thật dài. Hãy bắt đầu với một phiên bản nhỏ, chạy thử được, rồi yêu cầu AI sửa từng việc một.</p>
      `,
      references: [
        { label: 'Google — Build apps in AI Studio', url: GOOGLE_BUILD }
      ]
    },
    {
      id: `${track}-4`,
      stepNumber: '04',
      title: `Thực hành tạo bản đầu tiên — ${trackName}`,
      duration: '15 PHÚT',
      description: 'Quan sát bảy ảnh chụp thực tế để đăng nhập, tạo ứng dụng, xem Preview và yêu cầu AI sửa.',
      theme: 'blue',
      questionId: 4,
      track,
      keyPoints: [
        'Đối chiếu màn hình của bạn với bảy ảnh chụp theo đúng thứ tự.',
        isResearch
          ? 'Dùng dữ liệu mẫu, không dùng thông tin thật của học sinh.'
          : 'Chỉ thử bản mô phỏng; chưa kết nối hoặc điều khiển thiết bị thật.',
        'Mỗi lần chỉ yêu cầu AI sửa một việc rồi mở Preview kiểm tra lại.'
      ],
      samplePrompt: isResearch
        ? 'Tạo một ứng dụng tiếng Việt để theo dõi 10 cây đậu. Cho phép nhập ngày đo, tên cây và chiều cao theo cm; hiển thị dữ liệu trong bảng và biểu đồ đường. Giao diện đơn giản, chữ dễ đọc. Dùng dữ liệu mẫu, không dùng thông tin học sinh.'
        : 'Tạo một bảng điều khiển tưới cây bằng tiếng Việt ở chế độ mô phỏng. Hiển thị độ ẩm đất, trạng thái máy bơm và nút bật/tắt máy bơm demo. Giao diện đơn giản, chữ dễ đọc. Ghi rõ đây là bản mô phỏng, không điều khiển thiết bị thật.',
      toolType: 'guided-practice',
      contentHtml: `
        <h3>Mục tiêu của bài thực hành</h3>
        <p>Vuốt qua bảy ảnh chụp để tự tạo một bản chạy thử nhỏ theo vòng lặp <strong>mô tả → tạo → xem thử → yêu cầu sửa</strong>. Không cần đọc hay chỉnh sửa mã nguồn.</p>
        <div class="rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-950 my-4">
          <strong>Kết quả cần có:</strong> một bản Preview có thể bấm thử và ít nhất một thay đổi được AI sửa theo yêu cầu của bạn.
        </div>
      `,
      references: [
        { label: 'Google — Build apps in AI Studio', url: GOOGLE_BUILD }
      ]
    },
    {
      id: `${track}-5`,
      stepNumber: '05',
      title: 'Kiểm chứng kết quả trước khi sử dụng',
      duration: '10 PHÚT',
      description: 'Kiểm tra nội dung, dữ liệu, thao tác và quyền riêng tư trước khi dùng sản phẩm với học sinh.',
      theme: 'purple',
      questionId: 5,
      track,
      keyPoints: [
        'So sánh kết quả với dữ liệu hoặc phép tính bạn đã biết.',
        'Thử dữ liệu đúng, dữ liệu trống và dữ liệu nhập sai.',
        'Nhờ một đồng nghiệp sử dụng thử trước khi đưa vào lớp học.'
      ],
      samplePrompt: 'Hãy đóng vai người kiểm thử. Liệt kê 8 tình huống cần thử, gồm dữ liệu đúng, để trống, nhập sai và thao tác trên màn hình nhỏ. Không tự sửa dữ liệu của tôi.',
      toolType: 'verification-checklist',
      contentHtml: `
        <h3>AI tạo được không có nghĩa là đã đúng</h3>
        <p>Hãy kiểm tra từng chức năng bằng một ví dụ đơn giản mà bạn biết trước kết quả. Nếu có số liệu hoặc công thức, yêu cầu AI giải thích từng bước và tự tính lại ít nhất một trường hợp.</p>
        <div class="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-900 my-4">
          <strong>Dừng lại nếu:</strong> ứng dụng làm lộ dữ liệu học sinh, tự tạo thêm số liệu, đưa ra kết luận sức khỏe hoặc thực hiện thao tác thiết bị có thể gây nguy hiểm.
        </div>
      `
    }
  ];
}

export const LESSONS_NCKH = createLessons('nckh');
export const LESSONS_TECH = createLessons('tech');
