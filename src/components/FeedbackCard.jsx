import React from 'react';

const FeedbackCard = ({ content, name, title, img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]
    max-w-[370px] md:mr-10 sm:mr-5 feedback-card">
      
      <div>
      <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[42px] h-[27px] object-contain">
<path d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z" fill="url(#paint0_linear_310_509)"/>
<defs>
<linearGradient id="paint0_linear_310_509" x1="28.8615" y1="-24.7969" x2="41.7939" y2="24.1471" gradientUnits="userSpaceOnUse">
<stop offset="0.00887753" stop-color="#DEF9FA"/>
<stop offset="0.1723" stop-color="#BEF3F5"/>
<stop offset="0.4204" stop-color="#9DEDF0"/>
<stop offset="0.5512" stop-color="#7DE7EB"/>
<stop offset="0.7154" stop-color="#5CE1E6"/>
<stop offset="1" stop-color="#33BBCF"/>
</linearGradient>
</defs>
</svg>
      </div>

      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}

      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full"/>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}

          </h4>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">{title}</p>

        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
