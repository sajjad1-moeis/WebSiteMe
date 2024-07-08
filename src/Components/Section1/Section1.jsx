import React from "react";

export default function Section1() {
   return (
      <div className='p-3 md:p-0'>
         <div className='p-4 md:p-8  mt-0 md:mt-5 rounded-3xl border-2 border-white/15 hover:border-white/45 transition-colors'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
               <div className='md:col-span-1 h-full'>
                  <img src='/Image/me.png' className='object-cover  rounded-3xl h-full w-full ' alt='' />
               </div>
               <div className='md:col-span-2 text-center md:text-right h-full'>
                  <p className='text-secondary text-2xl'>سلام ; من</p>
                  <h1 className='text-5xl danaBold my-2'>
                     سجاد معین فرد
                     <p className='text-2xl danaLg mt-3'>رفیق راه شما برای رسیدن به موفقیت ...</p>
                  </h1>
                  <p className='text-[21px]'>
                     به وبسایت شخصی من خیلی خوش اومدید. بنده سجاد معین فرد هستم و در اینجا اطلاعات مفیدی درباره خودم و کارم در اختیار شما عزیزان قرار دادم تا
                     بتونید خیلی بهتر و بیشتر با من آشنا بشید. شما در اینجا به اطلاعاتی نظیر رزومه کاری، نمونه کارها، مهارت ها و بیو گرافی من دسترسی خواهید
                     داشت. اما در ابتدا میخوام با یک معرفی و بیوگرافی کامل درباره خودم شروع کنم.
                  </p>
                  <div className='grid grid-cols-2  mt-7 gap-5'>
                     <ItemBox title='نام و نام خانودگی' desc='سجاد معین فرد' />
                     <ItemBox title='تاریخ تولد ' desc='1385/01/17' />
                     <ItemBox title='محل سکونت' desc='استان مرکزی' />
                     <ItemBox title='تحصیلات' desc='دیپلم' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function ItemBox({title, desc}) {
   return (
      <div className='rounded-2xl bg-[#222222] p-5 border-2 border-white/15 transition-colors hover:border-white/45'>
         <p className='danaLg text-xl'>{title}</p>
         <p className='mt-2 text-base text-secondary'>{desc}</p>
      </div>
   );
}
