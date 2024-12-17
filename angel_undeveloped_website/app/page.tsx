import Image from "next/image";
import Header from "./components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Featured />
      <Projects />
      <Contact />
      <CurrentProjects />
      <Footer />
    </div>
  );
}
