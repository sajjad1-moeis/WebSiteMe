import {Button} from "@material-tailwind/react";
import {FaCloudArrowDown} from "react-icons/fa6";
import React, {useEffect, useState} from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import "./Section3.css";
export default function Section3() {
   return (
      <div className='mt-20  '>
         <div className='p-5 md:p-0'>
            <SectionHeader
               title='مهارت‌های  من'
               desc='   شاید براتون سوال شده که سجاد معین فرد چه مهارت‌هایی داره ؟ من خلاصه ای از حرفه و مهارت‌های خودم رو در حوزه‌های کاری مختلف به صورت نمودار
            واستون به نمایش گذاشتم که در پایین این بخش میتونید مشاهده کنید .'
            />
         </div>
         <div className='flex flex-wrap  justify-center  mt-7 grid-cols-2 items-center gap-y-10 gap-x-2 md:gap-10'>
            <ItemCircle person={100} title='html' bg='#005CFF' />
            <ItemCircle person={120} title='css' bg='#FF00A3' />
            <ItemCircle person={150} title='bootsrap' bg='#00FF5C' />
            <ItemCircle person={120} title='tailwind' bg='#FF9C00' />
            <ItemCircle person={120} title='js' bg='#8600FF' />
            <ItemCircle person={120} title='react' bg='#FF0000' />
         </div>
      </div>
   );
}

function ItemCircle({bg, title, person}) {
   const [state, setState] = useState(0);
   useEffect(() => {
      let inter = setInterval(() => {
         if (state === person) {
            clearInterval(inter);
         } else {
            setState((prev) => (prev = prev + 5));
         }
      }, 10);
      return () => {
         clearInterval(inter);
      };
   }, [state]);
   return (
      <div className='w-max'>
         <div className='relative w-max'>
            <div className='absolute w-full h-full top-0 right-0 flex justify-center items-center'>
               <div className=' text-center text-5xl'>
                  <p className='danaLg'>85</p>
                  <p className='text-lg -mt-3'>درصد</p>
               </div>
            </div>
            <svg id='svg' width='180' height='180' viewport='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
               <circle r='80' cx='90' cy='90' fill='transparent'></circle>
               <circle
                  style={{strokeDashoffset: state, stroke: bg}}
                  id='bar'
                  r='80'
                  cx='90'
                  cy='90'
                  fill='transparent'
                  strokeDasharray='565.48'
                  strokeDashoffset='0'
               ></circle>
            </svg>
         </div>
         <p className='text-center my-3 text-3xl danaLg'>{title}</p>
      </div>
   );
}
