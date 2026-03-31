export interface Experience {
    company: string;
    period: string;
    position: string;
    description: string[];
}

export const cvData = {
    name: "PHẠM ANH DŨNG",
    position: "Thực tập sinh Kỹ thuật Điều khiển & Tự động hóa",
    avatar: "https://thumbs.dreamstime.com/b/software-engineer-portrait-smiling-young-vietnamese-69422682.jpg",

    contact: {
        dob: "28/02/1999",
        gender: " Nam",
        phone: "0357585829",
        email: "padung1999@gmail.com",
        location: "Đà Nẳng",
    },

    objective: [
        "Mong muốn phát triển trong lĩnh vực tự động hóa và hệ thống điều khiển công nghiệp",
        "Áp dụng kiến thức về PLC, vi điều khiển và phát triển phần mềm vào thực tế",
        "Nâng cao kỹ năng về IoT và xử lý ảnh trong sản xuất",
    ],

    educations: [
        {
            school: "ĐẠI HỌC BÁCH KHOA ĐÀ NẴNG",
            period: "2018 - 2021",
            faculty: "Kỹ thuật",
            major: "Kỹ thuật Nhiệt - Điện",
            details: ["Đã nghỉ học năm 2021"]   // mảng details
        },
        {
            school: "CAO ĐẲNG FPT POLYTECHNIC",
            period: "08/2024 - Hiện tại",
            faculty: "Kỹ thuật - Công nghệ",
            major: "Kỹ thuật Điều khiển & Tự động hóa",
            details: [
                "Xếp loại: Giỏi",
                "GPA: 3.64"
            ]
        },
    ],

    // src/data/cvData.ts

    experiences: [
        {
            company: "Cuộc thi Arduino day - Giải nhất",
            period: "03/2026",
            position: "Trưởng nhóm - Automation Developer",
            description: [
                "Thiết kế và lập trình hệ thống giám sát sức khỏe thời gian thực sử dụng ESP32",
                "Kết nối các cảm biến: nhịp tim (MAX30102), SpO2, nhiệt độ cơ thể (DS18B20), và gia tốc kế",
                "Hiển thị dữ liệu lên OLED và gửi dữ liệu lên web dashboard qua WiFi",
                "Xây dựng giao diện theo dõi sức khỏe (React native)",
                "Cảnh báo khi các chỉ số vượt ngưỡng (buzzer + thông báo web)",
            ],
        },
        {
            company: "Dự án nhóm - Phân loại sản phẩm bằng mã QR",
            period: "10/2025",
            position: "Trưởng nhóm - Automation Developer",
            description: [
                "Thiết kế hệ thống phân loại sản phẩm sử dụng camera nhận diện mã QR",
                "Sử dụng OpenCV/Python để đọc và xử lý mã QR",
                "Kết nối PLC (Siemens S7-1200) để điều khiển băng tải và cơ cấu phân loại",
                "Xây dựng dashboard web hiển thị dữ liệu thời gian thực (ReactJS)",
                "Đạt độ chính xác >98%, tốc độ xử lý ~40–50 sản phẩm/phút",
            ],
        },
        {
            company: "Tekup: Beunicorn",
            period: "02/2023",
            position: "Frontend Developer",
            description: [
                "Xây dựng hệ thống học trực tuyến hỗ trợ dạy và học từ xa",
                "Phát triển tính năng lớp học ảo: chia sẻ màn hình, thảo luận, gửi tài liệu",
                "Hỗ trợ ghi hình bài giảng và xem lại video",
                "Xây dựng chức năng upload tài liệu và hệ thống kiểm tra đánh giá (quiz, assignment)",
                "Tối ưu UI/UX và responsive với Next.js + React"
            ],
        },
        {
            company: "Tekup: ExamHub Platform",
            period: "06/2023",
            position: "Frontend Developer",
            description: [
                "Xây dựng nền tảng bán khóa học và tài liệu luyện thi quốc tế",
                "Phát triển giao diện mua bán, tìm kiếm và thanh toán mượt mà",
                "Tích hợp đa ngôn ngữ (i18n)",
                "Tối ưu hiệu năng và cấu trúc code cho dự án lớn",
                "Xây dựng component tái sử dụng với Next.js, React & TypeScript"
            ],
        },
        {
            company: "UCTalent (Startup): UCTalent",
            period: "12/2023",
            position: "Frontend Developer",
            description: [
                "Xây dựng nền tảng tuyển dụng Web3 sử dụng blockchain",
                "Tích hợp xác thực người dùng và xử lý giao dịch tiền điện tử",
                "Kết nối giao diện với smart contract",
                "Đảm bảo trải nghiệm người dùng mượt mà trên nhiều thiết bị"
            ],
        },
    ],
    skills: [
        "PLC: Siemens (S7-1200, TIA Portal), Mitsubishi (FX, GX Works)",
        "Lập trình PLC: Ladder, FBD (cơ bản), hiểu cấu trúc điều khiển",
        "Vi điều khiển: Arduino, ESP32",
        "Lập trình Web: HTML, CSS, JavaScript, ReactJS",
        "Xử lý ảnh: OpenCV, Python",
        "Giao tiếp công nghiệp: Modbus, MQTT, WiFi",
        "Đọc hiểu sơ đồ điện và thiết kế hệ thống cơ bản",
        "Kỹ năng tin học văn phòng (Word, Excel, PowerPoint)",
        "Kỹ năng làm việc nhóm và giải quyết vấn đề",
    ],
};