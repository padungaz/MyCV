// // src/App.tsx
// import React from 'react';
// import { cvData } from './data/cvData';
// import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <img src={cvData.avatar} alt={cvData.name} className="avatar" />

//         <h1>{cvData.name}</h1>

//         <div className="contact-info">
//           <p>{cvData.location}</p>
//           <p>{cvData.phone}</p>
//           <p>{cvData.email}</p>
//           <p style={{ marginTop: '15px' }}>{cvData.linkedin}</p>
//         </div>

//         <section>
//           <h2>Kỹ năng chuyên môn</h2>
//           <ul>
//             {cvData.skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </section>

//         <section>
//           <h2>Chứng chỉ</h2>
//           <ul>
//             {cvData.certificates.map((cert, index) => (
//               <li key={index}>{cert}</li>
//             ))}
//           </ul>
//         </section>

//         <section>
//           <h2>Sở thích</h2>
//           <ul>
//             {cvData.interests.map((interest, index) => (
//               <li key={index}>{interest}</li>
//             ))}
//           </ul>
//         </section>
//       </div>

//       {/* Main Content */}
//       <div className="main">
//         <section>
//           <h2>Mục tiêu nghề nghiệp</h2>
//           <p>{cvData.objective}</p>
//         </section>

//         <section>
//           <h2>Trình độ học vấn</h2>
//           <div>
//             <span className="degree">{cvData.education.degree}</span>
//             <span className="period">{cvData.education.period}</span>
//             <br />
//             <strong>{cvData.education.school}</strong>
//             <br />
//             <em>{cvData.education.thesis}</em>
//           </div>
//         </section>

//         <section>
//           <h2>Kinh nghiệm thực tập</h2>
//           <div>
//             <strong>{cvData.internship.position}</strong>
//             <span className="period">{cvData.internship.period}</span>
//             <br />
//             <em>{cvData.internship.company}</em>
//             <ul>
//               {cvData.internship.details.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         <section>
//           <h2>Dự án nổi bật</h2>
//           {cvData.projects.map((project, index) => (
//             <div key={index} style={{ marginBottom: index === 0 ? '25px' : '0' }}>
//               <div className="project-title">{project.title}</div>
//               <ul>
//                 {project.details.map((detail, i) => (
//                   <li key={i}>{detail}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default App;

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;