import React from 'react';
import styles from '@/app/style';
import { arrowUp } from '@/app/assets';


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>

        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>

            <div className={`${styles.flexStart} flex-row`}>
               <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                <span className="text-gradient">Get</span>
                 </p>
                <div>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[23px] h-[23px] object-contain">
<path d="M4.98978 15.2615C4.75588 14.9828 4.76972 14.5786 5.00787 14.3167L5.07837 14.2489L16.0903 5.00887C16.3943 4.75371 16.8477 4.79338 17.1029 5.09746C17.3367 5.37621 17.3229 5.78038 17.0848 6.04234L17.0143 6.11006L6.00238 15.3501C5.69829 15.6053 5.24494 15.5656 4.98978 15.2615Z" fill="white"/>
<path d="M8.33877 5.57975C7.94325 5.546 7.64998 5.19801 7.68372 4.8025C7.7144 4.44294 8.00478 4.16787 8.35448 4.14619L8.46097 4.14745L16.6132 4.843C16.9739 4.87377 17.2493 5.16571 17.2697 5.51648L17.268 5.62327L16.538 13.7732C16.5026 14.1686 16.1534 14.4604 15.758 14.425C15.3986 14.3928 15.1247 14.1012 15.1045 13.7514L15.1062 13.645L15.7714 6.21386L8.33877 5.57975Z" fill="white"/>
</svg>

                </div>
                 

            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>

                
                </p> 

        </div>
      
    </div>
  )
}

export default GetStarted