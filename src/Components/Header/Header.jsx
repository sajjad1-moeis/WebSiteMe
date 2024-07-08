import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {Button} from "@material-tailwind/react";
const itemHead = [
   {title: "بیوگرافی", element: "", id: 1},
   {title: "مهارت ها", element: "", id: 2},
   {title: "نمونه کار ها", element: "", id: 3},
   {title: "رزومه کاری", element: "", id: 4},
];
export default function Header() {
   return (
      <header>
         <div className='flex justify-between items-center md:py-3 py-1.5 px-4 md:px-0'>
            <div className='p-2'>
               <img src='/Image/logo.png' className='h-14' alt='' />
            </div>
            <div className='hidden md:flex gap-2'>
               {itemHead.map((item) => (
                  <ItemHeader arr={itemHead} {...item} />
               ))}
            </div>
            <Button className='font-thin danaBold flex items-center gap-3 border-2 md:p-6 md:py-4 p-2.5 px-5  transition-colors text-base md:text-xl hover:border-white/40 border-white/15 rounded-2xl'>
               تماس با من
               <FaPhoneAlt />
            </Button>
         </div>
      </header>
   );
}
function ItemHeader({title, element, id, arr}) {
   return (
      <a href={`#${element ? element : ""}`}>
         <div className='  text-lg relative px-4'>
            <div className={`px-3  hover:border-b border-b-white py-2 transition-opacity`}>
               {arr.length !== id && <span className={`w-[1px] h-2 absolute bg-white/40 left-0 top-1/2 -translate-y-[50%]`}></span>}
               {title}
            </div>
         </div>
      </a>
   );
}
