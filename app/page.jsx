import About from "./ui/root/About";
import Contact from "./ui/root/Contact";
import Homepage from "./ui/root/Homepage";
import Shop from "./ui/root/Shop";


export default function Home() {
  return (
       <>
        <Homepage/>
        <Shop/>
        <About/>
        <Contact />
       </>
  );
}
