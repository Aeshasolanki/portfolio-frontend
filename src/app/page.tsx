


import ProjectSection from "./components/ProjectSection";
import About from "./components/About";
import UniqueCEOHero from "./components/Hero";
//import Blogs from "./components/blogs";
import ExecutiveCard from "./components/ExecutiveCard";
import ContactPage from "./components/contact";
import Addpage from "./components/addpage";
import Blogs from "./components/blogs";


export default function HomePage() {
  return (
    <main>
    
      <About />
      <UniqueCEOHero />
      <ExecutiveCard/>
      
     <ProjectSection limit={4}/>

     
     {/* <Blogs/>*/}
      <Addpage/>
      <ContactPage/>
      <Blogs/>
    
     
    </main>
  );
}