import React from "react";
import { menuItems } from "./menu-items";

function Menu() {
  return (
    <div className=" hidden bg-[#f7f7f8] rounded-lg py-5 my-2 md:inline md:w-[253px] md:h-[762px]">
      <h1 className="capitalize text-[#333333] text-xs font-semibold px-3">Employer dashboard</h1>
      <div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.route} className="flex my-4 text-[#333333]/50 text-sm font-medium">
              <img src={`/menubar/${item.icon}.svg`} className="mx-2" />
              <a href={item.route}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
