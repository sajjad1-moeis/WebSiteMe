import {useState} from "react";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Footer from "./Components/Footer/Footer";
export default function App() {
   return (
      <div className='min-h-screen bg-dark text-white pb-10'>
         <div className='container md:px-5'>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
         </div>
      </div>
   );
}
