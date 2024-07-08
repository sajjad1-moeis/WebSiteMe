import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Section5.css";
export default function Section5() {
   return (
      <div className='mt-20  p-5 md:p-0'>
         <SectionHeader title='چند نمونه کار حرفه‌ای ببینید !' />
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
            <a href='https://sabzlearn-developer.liara.run/'>
               <div className='w-full min-h-[300px]  bg-cover cursor-pointer resome'></div>
            </a>
            <a href='https://sabzlearn-developer.liara.run/'>
               <div className='w-full min-h-[300px] bg-cover cursor-pointer resome'></div>
            </a>
            {/*<div className='w-full min-h-[300px]  bg-cover cursor-pointer resome'></div>
            <div className='w-full min-h-[300px]  bg-cover cursor-pointer resome'></div>
            <div className='w-full min-h-[300px]  bg-cover cursor-pointer resome'></div> */}
         </div>
      </div>
   );
}
