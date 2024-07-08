import {Button} from "@material-tailwind/react";
import React from "react";
import {FaCloudArrowDown} from "react-icons/fa6";
import SectionHeader from "../SectionHeader/SectionHeader";
export default function Section4() {
   return (
      <div className='mt-20  p-5 md:p-0'>
         <SectionHeader isBtn={true} title='باقی مهارت‌های  من ' desc='در اینجا میتونید مهارت های فردی من رو مطالعه کنید' />
         <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
            <ItemBox title='6- تسلط بر کتابخانه axios' />
            <ItemBox title='6- تسلط بر کتابخانه formik' />
            <ItemBox title='6- تسلط بر mui' />
            <ItemBox title='6- تسلط بر git و github' />
            <ItemBox title='6- restFull Api' />
            <ItemBox title='6- تسلط بر React Hooks' />
            <ItemBox title='6- responsive design' />
         </div>
      </div>
   );
}

function ItemBox({title}) {
   return (
      <div className='rounded-2xl bg-[#222222] cursor-pointer p-5 border-2 border-white/15 transition-colors hover:border-white/45'>
         <p className='my-3 text-2xl danaLg text-center '>{title}</p>
      </div>
   );
}
