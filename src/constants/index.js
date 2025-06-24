import project1 from "../asset/projects/project-1.png";
import project2 from "../asset/projects/project-2.png";
import project3 from "../asset/projects/project-3.png";
import project4 from "../asset/projects/project-4.png";

export const HERO_CONTENT = `A Passionate 3rd year B.Tech Information Technology student with skill in UI/UX design, React.js development, video editing, and poster designing. Proficient in modern web technologies and design tools, with a keen eye for creating engaging and usercentric digital experiences. Seeking opportunities to apply my diverse skill set in a dynamic environment and contribute to innovative projects. `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: " June-july 2024 ",
    role: "Data Science Intern ",
    company: "Techvolt Software, Coimbatore.",
    description: `      Completed a 15-day Data Science internship at Techvolt Software, focusing on data collection, cleaning, and visualization using Python. Gained experience with libraries like pandas, NumPy, and matplotlib. Explored Data Science Libraries and applied them in a practical project. Enhanced skills in data analysis and problem-solving through data-driven approaches.`,
    technologies: ["Google Colab", "Python"],
  },
 
];

export const PROJECTS = [
  {
    title: "LMS Website",
    image: project1,
    description:
     "An website to learn and also has the login features and student dashboard. Also has the admin panel and a super admin panel. It is created with recat.js and express js",
    technologies: [ "React", "Vite", "CSS" , "Node.js", "MongoDB"],
  },
  {
    title: "Gemini Clone",
    image: project2,
    description:
      "A Clone of Gemini AI done with ReactJS + Vite, API Key from Google AI Studio.",
    technologies: ["React", "Vite", "CSS", "Gemini API"],
  },
  {
    title: "Course Web Application",
    image: project3,
    description:
      "It is a normal travel static page with an minimal UI designs created with ReactJS.",
    technologies: ["React","Vite", "CSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "This is a Student Information System where the UI is developed using ReactJS + Vite, MongoDB for Database Connention",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "50, Golden City, Vadugalayam, Pollachi, Coimbatore ",
  phoneNo: "+91 79044 02889 ",
  email: "abdulrazaak2222@gmail.com",
};
