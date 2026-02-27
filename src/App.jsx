import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";

function App() {
const  educationData={
  secondary:{
    school:"Seva Sadan Higher Secondary School",
    location:"Burhanpur,Madhaya Pradesh",
    subject:"English",
    description:"Completed primary and secondary education (Class 0-10) with a strong academic foundation.",
    percentage:"91.33%"
  },
 higherSecondary:{
    school:"Seva Sadan Higher Secondary School",
    location:"Burhanpur,Madhaya Pradesh",
    subject:"Mathematics",
    description:"Completed Class 11-12 with a focus on Physics, Chemistry, and Mathematics . Gained a strong foundation in mathematical reasoning, problem-solving, and analytical skills.",
    percentage:"87.4%"
  },
  bachelor:{
    school:"Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    location:"Bhopal,Madhaya Pradesh",
    subject:"B.Tech Computer Science",
    description:"Completed B.Tech in Computer Science Engineering (CSE) with a focus on software development, algorithms, and system design.",
    percentage:" 75.8%"
  },
}
  return (
    <div className="overflow-x-hidden bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Home/>
      <About/>
    <Education educationData={educationData}/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
