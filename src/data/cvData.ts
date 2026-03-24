// // src/data/cvData.ts

// export interface Project {
//     title: string;
//     details: string[];
// }

// export interface CVData {
//     name: string;
//     avatar: string;
//     location: string;
//     phone: string;
//     email: string;
//     linkedin: string;

//     objective: string;

//     education: {
//         degree: string;
//         school: string;
//         period: string;
//         thesis: string;
//     };

//     internship: {
//         position: string;
//         company: string;
//         period: string;
//         details: string[];
//     };

//     projects: Project[];

//     skills: string[];
//     certificates: string[];
//     interests: string[];
// }

// export const cvData: CVData = {
//     name: "PHẠM ANH DŨNG",
//     avatar: "https://thumbs.dreamstime.com/b/software-engineer-portrait-smiling-young-vietnamese-69422682.jpg", // ← Thay bằng ảnh thật của bạn
//     location: "Đà Nẵng, Việt Nam",
//     phone: "0357585829",
//     email: "padung1999@gmail.com",
//     linkedin: "linkedin.com/in/nguyenvana",

//     objective: "Kỹ sư tự động hóa, mong muốn áp dụng kiến thức về PLC, vi điều khiển và hệ thống điều khiển vào thực tế sản xuất công nghiệp. Hướng tới phát triển chuyên sâu về lập trình PLC và robot công nghiệp, đồng thời đóng góp vào tối ưu hóa quy trình và nâng cao hiệu suất tại công ty.",

//     education: {
//         degree: "Cử nhân Kỹ thuật Điều khiển & Tự động hóa / Cơ điện tử",
//         school: "Đại học Bách Khoa – Đại học Đà Nẵng",
//         period: "2020 – 2024",
//         thesis: "Đồ án tốt nghiệp: Hệ thống phân loại sản phẩm bằng mã QR tích hợp PLC và dashboard web"
//     },

//     internship: {
//         position: "Kỹ sư thực tập – Bộ phận Tự động hóa",
//         company: "Công ty TNHH Sản xuất XYZ (Khu công nghiệp Hòa Khánh, Đà Nẵng)",
//         period: "06/2023 – 09/2023",
//         details: [
//             "Hỗ trợ lập trình PLC Siemens S7-1200 cho dây chuyền đóng gói tự động",
//             "Thiết kế và test giao diện HMI cơ bản bằng WinCC",
//             "Tham gia bảo trì, khắc phục sự cố hệ thống điều khiển",
//             "Học hỏi quy trình sản xuất Lean và an toàn công nghiệp"
//         ]
//     },

//     projects: [
//         {
//             title: "Hệ thống phân loại sản phẩm tự động bằng mã QR (Đồ án tốt nghiệp 2024)",
//             details: [
//                 "Camera công nghiệp nhận diện mã QR → PLC điều khiển băng tải & phân loại",
//                 "Dashboard web thời gian thực (Node-RED + HTML)",
//                 "Độ chính xác >98%, tốc độ 10–20 sản phẩm/phút"
//             ]
//         },
//         {
//             title: "Hệ thống tưới cây thông minh (Dự án cá nhân 2023)",
//             details: [
//                 "ESP32 + cảm biến độ ẩm + relay bơm nước tự động",
//                 "Gửi cảnh báo qua WiFi khi độ ẩm thấp"
//             ]
//         }
//     ],

//     skills: [
//         "Lập trình PLC Siemens TIA Portal (S7-1200/1500)",
//         "Ladder, FBD, SCL cơ bản",
//         "Vi điều khiển: Arduino, ESP32/ESP8266",
//         "Giao tiếp Modbus, WiFi, IoT",
//         "HMI/SCADA: WinCC Basic/Comfort",
//         "AutoCAD Electrical, RobotStudio",
//         "Thiết kế mạch điện – điện tử",
//         "Làm việc nhóm & giải quyết vấn đề"
//     ],

//     certificates: [
//         "Khóa học PLC Siemens TIA Portal (cơ bản – trung cấp)",
//         "TOEIC 650 (hoặc tương đương)",
//         "Chứng chỉ Arduino / IoT cơ bản"
//     ],

//     interests: [
//         "Nghiên cứu tự động hóa 4.0 & IoT công nghiệp",
//         "Lập trình cá nhân & dự án DIY",
//         "Đọc sách kỹ thuật, học tiếng Anh chuyên ngành"
//     ]
// };

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

    education: {
        school: "CAO ĐẲNG FPT POLYTECHNIC",
        period: "08/2024 - Hiện tại",
        faculty: " Kỹ thuật - Công nghệ",
        major: " Kỹ thuật Điều khiển & Tự động hóa / Cơ điện tử",
        rank: "Giỏi",
        degree: "",
    },

    experiences: [
        {
            company: "Dự án nhóm - Phân loại sản phẩm bằng mã QR",
            period: "2024",
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
            company: "Dự án IoT - Smart Irrigation",
            period: "2025",
            position: "Trưởng nhóm - Automation Developer",
            description: [
                "Thiết kế hệ thống tưới cây tự động dùng ESP32",
                "Đọc cảm biến độ ẩm và điều khiển relay",
                "Gửi dữ liệu lên web qua WiFi",
            ],
        },
        {
            company: "Dự án xử lý ảnh",
            period: "2023",
            position: "Developer",
            description: [
                "Xử lý ảnh bằng OpenCV (lọc nhiễu, phát hiện biên)",
                "Nhận diện đối tượng cơ bản",
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
        "Kỹ năng làm việc nhóm và giải quyết vấn đề",
    ],
};