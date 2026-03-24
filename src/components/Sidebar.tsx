// // import avatar f;

// function Sidebar() {
//     return (
//         <div className="sidebar">
//             <img src='{ || ""}' alt="avatar" className="avatar" />

//             <h1>NGUYỄN VĂN A</h1>

//             <div className="contact-info">
//                 <p>Đà Nẵng, Việt Nam</p>
//                 <p>09x xxx xxxx</p>
//                 <p>nguyenvana@email.com</p>
//                 <p style={{ marginTop: "15px" }}>
//                     LinkedIn / GitHub: linkedin.com/in/nguyenvana
//                 </p>
//             </div>

//             <section>
//                 <h2>Kỹ năng chuyên môn</h2>
//                 <ul>
//                     <li>PLC Siemens TIA Portal</li>
//                     <li>Ladder, FBD, SCL</li>
//                     <li>Arduino, ESP32</li>
//                     <li>Modbus, IoT</li>
//                     <li>WinCC SCADA</li>
//                     <li>AutoCAD Electrical</li>
//                 </ul>
//             </section>

//             <section>
//                 <h2>Chứng chỉ</h2>
//                 <ul>
//                     <li>PLC Siemens</li>
//                     <li>TOEIC 650</li>
//                     <li>Arduino / IoT</li>
//                 </ul>
//             </section>

//             <section>
//                 <h2>Sở thích</h2>
//                 <ul>
//                     <li>Automation & IoT</li>
//                     <li>DIY Projects</li>
//                     <li>Đọc sách kỹ thuật</li>
//                 </ul>
//             </section>
//         </div>
//     );
// }

// export default Sidebar;

import { cvData } from '../data/cvData';
import '../App.css';

export default function Sidebar() {
    const { name, position, avatar, contact, objective } = cvData;

    return (
        <div className="sidebar">
            <div className="avatar-container">
                <img src={avatar} alt={name} className="avatar" />
            </div>

            <h1 className="name">{name}</h1>
            <p className="position">{position}</p>

            <div className="section">
                <h2 className="section-title orange">THÔNG TIN LIÊN HỆ</h2>
                <div className="contact-list">
                    <p>📅 {contact.dob}</p>
                    <p>🚹 {contact.gender}</p>
                    <p>📞 {contact.phone}</p>
                    <p>✉ {contact.email}</p>
                    <p>📍 {contact.location}</p>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title orange">MỤC TIÊU NGHỀ NGHIỆP</h2>
                <ul className="objective-list">
                    {objective.map((item, i) => (
                        <li key={i}> {item}</li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2 className="section-title orange">KỸ NĂNG</h2>
                <ul className="skills-list">
                    {cvData.skills.map((skill, i) => (
                        <li key={i}> {skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}