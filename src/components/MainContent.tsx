// // import video from "../assets/videos/intro.mp4";

// function MainContent() {
//     return (
//         <div className="main">
//             <section>
//                 <h2>Mục tiêu nghề nghiệp</h2>
//                 <p>
//                     Kỹ sư tự động hóa trẻ, mong muốn áp dụng PLC và hệ thống điều khiển vào sản xuất công nghiệp.
//                 </p>
//             </section>

//             <section>
//                 <h2>Học vấn</h2>
//                 <p>
//                     <strong>Cử nhân Tự động hóa</strong> (2020–2024)
//                     <br />
//                     Đại học Bách Khoa – Đà Nẵng
//                 </p>
//             </section>

//             <section>
//                 <h2>Kinh nghiệm</h2>
//                 <ul>
//                     <li>PLC Siemens S7-1200</li>
//                     <li>Thiết kế HMI WinCC</li>
//                     <li>Bảo trì hệ thống</li>
//                 </ul>
//             </section>

//             <section>
//                 <h2>Dự án</h2>
//                 <ul>
//                     <li>Phân loại sản phẩm QR (PLC)</li>
//                     <li>Smart irrigation ESP32</li>
//                 </ul>
//             </section>

//             {/* VIDEO */}
//             <section>
//                 <h2>Video demo</h2>
//                 <video width="100%" controls>
//                     <source src='{video}' type="video/mp4" />
//                 </video>
//             </section>
//         </div>
//     );
// }

// export default MainContent;

import { cvData } from '../data/cvData';
import '../App.css';

export default function MainContent() {
    const { education, experiences } = cvData;

    return (
        <div className="main-content">
            <div className="section">
                <h2 className="section-title yellow">
                    <span className="icon">🎓</span> HỌC VẤN
                </h2>
                <div className="education">
                    <strong className="school">{education.school}</strong>
                    <span className="period">{education.period}</span>
                    <p>Khoa: {education.faculty}</p>
                    <p>Ngành: {education.major}</p>
                    <p>Xếp loại: {education.rank}</p>
                    <p>Chứng chỉ: {education.degree}</p>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title yellow">
                    <span className="icon">📁</span> KINH NGHIỆM LÀM VIỆC
                </h2>

                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="header">
                            <strong className="company">{exp.company}</strong>
                            <span className="period">{exp.period}</span>
                        </div>
                        <p className="label"> Vị trí: {exp.position}</p>
                        <p className="label">Mô tả:</p>
                        <ul>
                            {exp.description.map((line, i) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}