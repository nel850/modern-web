import React from 'react'
import styles from '../style';
import GetStarted from '@/components/GetStarted';


const FirstSection = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>

<div className={`${styles.boxWidth}`}>
  
<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="flex flex-row
    items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">


      <div>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[32px]">
<path opacity="0.4" d="M15.9988 29.331C14.9735 29.331 13.9495 28.9417 13.1668 28.1643L12.1935 27.191C11.8161 26.815 11.3108 26.607 10.7748 26.6057H9.40546C7.19212 26.6057 5.39079 24.8043 5.39079 22.591V21.2203C5.38946 20.6857 5.18146 20.1803 4.80412 19.8003L3.84679 18.8443C2.27879 17.2857 2.27212 14.7377 3.83212 13.1683L4.80546 12.1937C5.18146 11.8163 5.38946 11.311 5.39079 10.775V9.40699C5.39079 7.19232 7.19212 5.39099 9.40546 5.39099H10.7761C11.3108 5.39099 11.8148 5.18299 12.1948 4.80299L13.1535 3.84699C14.7121 2.27899 17.2588 2.27099 18.8295 3.83232L19.8028 4.80565C20.1815 5.18299 20.6855 5.39099 21.2201 5.39099H22.5908C24.8041 5.39099 26.6055 7.19232 26.6055 9.40699V10.7763C26.6068 11.311 26.8148 11.8163 27.1921 12.1963L28.1495 13.1537C28.9081 13.9083 29.3281 14.9137 29.3321 15.987C29.3348 17.0537 28.9241 18.0577 28.1761 18.8163C28.1628 18.8297 28.1508 18.8443 28.1375 18.8563L27.1908 19.803C26.8148 20.1803 26.6068 20.6857 26.6055 21.2217V22.591C26.6055 24.8043 24.8041 26.6057 22.5908 26.6057H21.2201C20.6855 26.607 20.1801 26.815 19.8015 27.1923L18.8428 28.1497C18.0615 28.9363 17.0295 29.331 15.9988 29.331" fill="#393939"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3904 13.4012C13.1704 13.6212 12.8851 13.7399 12.5691 13.7399C12.2731 13.7399 11.9824 13.6186 11.7491 13.3999C11.5277 13.1799 11.4024 12.8786 11.4024 12.5732C11.4024 12.2826 11.5251 11.9839 11.7411 11.7532C11.8597 11.6332 12.0011 11.5426 12.1424 11.4946C12.5451 11.3106 13.0797 11.4186 13.3971 11.7519C13.5104 11.8652 13.5971 11.9892 13.6544 12.1186C13.7171 12.2572 13.7491 12.4146 13.7491 12.5732C13.7491 12.8906 13.6224 13.1852 13.3904 13.4012ZM20.254 11.7464C19.7993 11.2931 19.0593 11.2931 18.6047 11.7464L11.7513 18.5998C11.2967 19.0544 11.2967 19.7944 11.7513 20.2504C11.9727 20.4704 12.2647 20.5918 12.5767 20.5918C12.8887 20.5918 13.1807 20.4704 13.4007 20.2504L20.254 13.3971C20.7087 12.9411 20.7087 12.2024 20.254 11.7464ZM19.8744 18.3519C19.4424 18.1706 18.9304 18.2692 18.5891 18.6106C18.5184 18.6932 18.4184 18.8212 18.3504 18.9719C18.2784 19.1346 18.2691 19.3092 18.2691 19.4266C18.2691 19.5439 18.2784 19.7172 18.3504 19.8799C18.4171 20.0292 18.4971 20.1506 18.6024 20.2559C18.8437 20.4799 19.1237 20.5932 19.4357 20.5932C19.7317 20.5932 20.0224 20.4732 20.2611 20.2506C20.4731 20.0386 20.5891 19.7452 20.5891 19.4266C20.5891 19.1066 20.4731 18.8146 20.2597 18.6012C20.1424 18.4852 20.0011 18.3946 19.8744 18.3519Z" fill="#00F6FF"/>
</svg>
      </div>

     <p className={`${styles.paragraph}
     ml-2`}>
    <span className="text-white">20% </span>Discount For {""}
    <span className="text-white">1 Month</span> Account
     </p>

    </div>

    <div className="flex flex-row justify-between items-center w-full">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        The Next  <br className="sm:block hidden" /> {" "}
        <span 
        className="text-gradient">Generation</span>
        <span> </span>{" "}
         
      </h1>

      <div className="ss:flex hidden md:mr-4 mr-0">
        <GetStarted/>
      </div>

    </div>

    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">Payment Method.</h1>

    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
    </p>

  </div>

  <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src="/img/robot.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> 
    <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" /> 
    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

  </div>
  <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted/>

  </div>
</section>

</div>
    </div>
  )
}

export default FirstSection
