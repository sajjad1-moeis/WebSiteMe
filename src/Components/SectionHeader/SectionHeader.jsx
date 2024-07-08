import {Button} from "@material-tailwind/react";
import React from "react";
import {FaCloudArrowDown} from "react-icons/fa6";

export default function SectionHeader({title, desc, isBtn}) {
   return (
      <div className='block md:flex justify-between items-center'>
         <div className='text-center md:text-right md:w-3/5'>
            <h1 className='text-5xl danaBold my-2'>{title}</h1>
            <p className='my-4 text-xl'>{desc}</p>
         </div>
         <div className=''>
            {!isBtn && (
               <Button className='bg-[#2F2F2F] w-full justify-center font-thin flex items-center gap-2 danaLg text-lg rounded-xl border-white/50 border'>
                  دانلود رزومه کاری من
                  <FaCloudArrowDown />
               </Button>
            )}
         </div>
      </div>
   );
}
