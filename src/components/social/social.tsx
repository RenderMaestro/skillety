import Image from "next/image";
import React from "react";

function Social() {
  return (
    <div className="w-[206px] h-[52px] flex-col justify-start items-start gap-2.5 inline-flex">
      {/* Header Text */}
      <div className="self-stretch h-[18px] text-[#333333] text-sm font-semibold font-['Poppins'] leading-[18px]">
        Connect with us
      </div>

      {/* Icons Container */}
      <div className="w-[152px] h-6 justify-center items-start gap-2 inline-flex">
        <Image src="/socials/fb.svg" alt="Icon 1" width={24} height={24} className="w-6 h-6" />
        <Image src="/socials/x.svg" alt="Icon 2" width={24} height={24} className="w-6 h-6" />
        <Image src="/socials/linkedin.svg" alt="Icon 3" width={24} height={24} className="w-6 h-6" />
        <Image src="/socials/youtube.svg" alt="Icon 4" width={24} height={24} className="w-6 h-6" />
        <Image src="/socials/instagram.svg" alt="Icon 5" width={24} height={24} className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Social;
