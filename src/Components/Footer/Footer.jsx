import React from "react";
import {MdOutlineWhatsapp} from "react-icons/md";
import {MdOutlineEmail} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa6";
import {BiLogoTelegram} from "react-icons/bi";
export default function Footer() {
   return (
      <div className='mt-10 md:mt-20 p-5 md:p-0'>
         <div className='bg-[#222222] p-8 rounded-[28px] border-white/15 border-2 hover:border-white/45 transition-colors'>
            <div className='lg:flex items-center justify-between'>
               <div className='md:flex items-center gap-4'>
                  <img src='/Image/enamd.png' className='h-20 mx-auto' />
                  <div className='text-center md:text-right mt-3 md:mt-0'>
                     <p style={{textShadow: "3px 3px 10px #777"}} className='text-3xl md:text-5xl shadow-white danaBold'>
                        شروع همکاری و مشاوره
                     </p>
                     <p className='mt-2 text-lg md:text-xl'>از طریق شبکه‌های اجتماعی میتوانید به صورت مستقیم با من در تماس باشید.</p>
                  </div>
               </div>
               <div className='hidden md:flex gap-3 flex-wrap justify-center '>
                  <a href='https://www.linkedin.com/in/sajjad-moeinfard-9abb11307'>
                     <ItemBox element={<FaLinkedinIn />} />
                  </a>
                  <a href='https://www.instagram.com/sajjad_moeinfard?igsh=MXZrOXppZjRkYzl1OQ=='>
                     <ItemBox element={<FaInstagram />} />
                  </a>
                  <a href='https://t.me/Assistedd'>
                     <ItemBox element={<BiLogoTelegram />} />
                  </a>
                  <ItemBox element={<MdOutlineWhatsapp />} />
                  <a href='mailto:sajjadmoei@gmail.com'>
                     <ItemBox element={<MdOutlineEmail />} />
                  </a>
                  <a
                     class='elementor-icon elementor-social-icon elementor-social-icon-phone-alt elementor-animation-grow elementor-repeater-item-6cd86f1'
                     href='tel:09186992098'
                     target='_blank'
                  >
                     <ItemBox element={<FaPhoneAlt />} />
                  </a>
               </div>
               <div className='grid md:hidden  grid-cols-1 gap-y-7 mt-5'>
                  <div className=' flex justify-center gap-5'>
                     <a href='https://www.linkedin.com/in/sajjad-moeinfard-9abb11307'>
                        <ItemBox element={<FaLinkedinIn />} />
                     </a>
                     <a href='https://www.instagram.com/sajjad_moeinfard?igsh=MXZrOXppZjRkYzl1OQ=='>
                        <ItemBox element={<FaInstagram />} />
                     </a>
                     <a href='https://t.me/Assistedd'>
                        <ItemBox element={<BiLogoTelegram />} />
                     </a>
                  </div>
                  <div className=' flex justify-center gap-5'>
                     <ItemBox element={<MdOutlineWhatsapp />} />
                     <a href='mailto:sajjadmoei@gmail.com'>
                        <ItemBox element={<MdOutlineEmail />} />
                     </a>
                     <a
                        class='elementor-icon elementor-social-icon elementor-social-icon-phone-alt elementor-animation-grow elementor-repeater-item-6cd86f1'
                        href='tel:09186992098'
                        target='_blank'
                     >
                        <ItemBox element={<FaPhoneAlt />} />
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <p className='mt-5 text-center'>© وبسایت طراحی شده توسط سجاد معین فرد</p>
      </div>
   );
}

function ItemBox({element}) {
   return (
      <div className=' hover:scale-110 md:mx-auto mx-0 cursor-pointer bg-[#313131] border-white/15 border-2 hover:border-white/45 transition-transform text-2xl rounded-full w-14 h-14 flex items-center justify-center'>
         {element}
      </div>
   );
}
