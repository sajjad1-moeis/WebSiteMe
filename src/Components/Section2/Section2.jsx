import React, {useRef, useState} from "react";
import {IoIosArrowDown} from "react-icons/io";
export default function Section2() {
   const [showOption, setShowOption] = useState(false);
   const container = useRef();
   return (
      <div className='md:flex mt-8'>
         <div className='grid grid-cols-1 md:grid-cols-5 gap-10 p-5 md:p-0'>
            <div className='md:col-span-2'>
               <img src='/Image/car.webp' className='object-cover  rounded-3xl w-full' alt='' />
            </div>
            <div className='md:col-span-3 flex items-center justify-center'>
               <div className=''>
                  <div className='flex justify-center items-center'>
                     <div className='text-center md:text-right relative'>
                        {!showOption && <div className='absolute w-full h-1/3 bg-gradient-to-t from-dark opacity-80 z-50 bottom-0'></div>}
                        <p className='text-secondary text-lg'>یک بیوگرافی کامل</p>
                        <h1 className='text-5xl danaBold my-2'>درباره من بخوانید !</h1>
                        <p className='text-3xl danaLg mt-7'>مردی، تشنه ی پیشرفت...</p>
                        <div className='my-4 text-xl'>
                           فردی پرشور و مشتاق به تعامل با افراد مختلف هستم بیش از 2 سال سابقه فعالیت در زمینه برنامه نویسی و همچنین طراحی سایت و زیرساختهای
                           اینترنتی را دارم توانایی تعامل مثبت با مشتریان و درک و شناخت نیازهای آنها و ارائه پیشنهادهایی برای محصولات و خدمات جدید را دارم.
                           علاقه مند به حوزه های فناوری محور هستم و میتوانم آپدیت ها و نحوه استفاده از بستر نوآوری و فناوری را به نحوه احسن انجام دهم و با درک
                           آنها ، رویکرد CleanCode را اجرا کنم
                        </div>
                        <p className='my-4 text-xl'>
                           از کودکی استعداد زیادی در ریاضی فیزیک و کارای هنری داشتم و همیشه جز نفرات اول مدرسه و کلاسمون بودم و حتی در مقطع راهنمایی جز افراد
                           برتر علوم تجربی بودم و دارای مقام اول از این رشته هستم. رشته ریاضی رو برای تحصیل انتخاب کردم و اما بنا به علاقه وی مجبر به تغییر رشته
                           به انسانی شدم
                        </p>
                        <div
                           ref={container}
                           className='text-xl overflow-hidden'
                           style={{height: showOption ? `${container.current.scrollHeight}px` : "0px", transition: "0.5s"}}
                        >
                           <p className='my-4 text-xl'>
                              یک ظهر جمعه دی ماه ، چشم به این دنیا باز کردم. چون روز تولد امام حسن به دنیا اومدم اسم منو حسن گذاشتن و به خاطر زنده نگه داشتن اسم
                              پدر بزرگم ، توی شناسنامه اسمم احمد هست . راستی فراموش کردم بگم سیدم ، سید حسن موسوی . هم از سمت پدر و هم از سمت مادر اصالت شیرازی
                              دارم. عاشق لهجه شیرازی و شهرم هستم.
                           </p>
                           <p className='text-xl'>
                              از سن 4 سالگی وارد رشته ژیمناستیک شدم و به همین جهت تا 12 سال این رشته رو در زیر شاخه ترامپولین به صورت حرفه‌ای ادامه دادم و
                              تونستم بالغ بر ده‌ها عنوان قهرمانی استانی و 3 مقام کشوری در این رشته کسب کنم. بعد از مصدومیتم، چند سال رشته بدنسازی رو دنبال کردم
                              و در حال حاضر ورزش کراسفیت رو به صورت حرفه‌ای شروع کردم.
                           </p>

                           <p className='my-4'>
                              فعالیت کاری من از سال 97 شروع شد. ابتدا برنامه نویسی اندروید رو شروع کردم و بعد از گذشت چندین ماه تونستم چند تا اپلیکیشن مختلف
                              طراحی کنم. اما علاقه چندانی به کدنویسی پیدا نکردم. پس شروع به یادگیری طراحی وبسایت وردپرسی کردم. اولین استارت آپ خودم رو در سال 98
                              به اسم کافه لاب راه اندازی کردم و متأسفانه با شکست مواجه شد. در این سال من دوره‌هایی در رابطه با سئو و طراحی گرافیک گذروندم و
                              اواخر سال 98 به تیم وبسایت میهن وردپرس ملحق شدم.
                           </p>
                           <p className='my-4'>
                              موفقیت کاری من از سال 99 شروع شد و تاکنون همکاری‌های زیادی با افراد معتبری که در ایران و در سطح بین‌المللی فعالیت دارند، انجام
                              دادم. در بخش رزومه کاری، به صورت کامل و مفصل در رابطه با سوابق کاری خودم برای شما عزیزان توضیح خواهم داد.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div onClick={() => setShowOption(!showOption)} className='flex gap-2 items-center mx-auto w-max danaLg text-2xl mt-5 cursor-pointer'>
                     {showOption ? "بستن" : "خواندن بیشتر"}
                     <IoIosArrowDown className={`${showOption ? "rotate-180" : "rotate-0"} transition-transform`} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
