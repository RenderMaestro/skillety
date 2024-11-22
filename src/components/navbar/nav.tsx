import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="bg-[#0A65CC] w-full h-[70px]">
      <div className="w-full sm:container mx-auto h-full flex justify-between items-center px-4">
        <Image src="/navbar/logo.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center">
          <Image className="mx-2" src="/navbar/notification.svg" alt="notification" width={20} height={20} />
          <Image className="mx-2" src="/navbar/profile.svg" alt="profile" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
