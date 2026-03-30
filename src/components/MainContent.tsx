import { cvData } from '../data/cvData';
import '../App.css';

export default function MainContent() {
    return (
        <div className="main-content">
            {/* HỌC VẤN */}
            <div className="section">
                <h2 className="section-title yellow">
                    <span className="icon">🎓</span> HỌC VẤN
                </h2>

                {cvData.educations.map((edu, index) => (
                    <div key={index} className="education-item">
                        <p className="school">{edu.school}</p>
                        <p className="period">{edu.period}</p>
                        <p>Khoa: {edu.faculty}</p>
                        <p>Ngành: {edu.major}</p>

                        {/* Hiển thị mảng details */}
                        {edu.details && edu.details.length > 0 && (
                            <ul className="education-details">
                                {edu.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}
                        {/* Đường phân cách giữa các mục học vấn (trừ mục cuối) */}
                        {index < cvData.educations.length - 1 && <div className="divider" />}
                    </div>
                ))}
            </div>

            <div className="section">
                <h2 className="section-title yellow">
                    <span className="icon">📁</span> KINH NGHIỆM LÀM VIỆC
                </h2>

                {cvData.experiences.map((exp, index) => (
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
                        {index < cvData.experiences.length - 1 && <div className="divider" />}
                    </div>
                ))}
            </div>
        </div>
    );
}