import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Image from "next/image";

function SearchBar() {
  return (
    <div className="bg-[#F7F7F8] flex items-center py-8 mt-2 w-full">
      <Image src="/menu.svg" className="w-5 h-5 mt-4 mx-2 inline sm:hidden " alt="tick" width={10} height={10} />
      <div className="grid w-full max-w-3xl m-auto items-center gap-1.5">
        <Label htmlFor="Search CV">Search CV</Label>
        <div className="flex relative">
          <Input
            className="border border-[#0a65cc]"
            type="email"
            placeholder="Jobs for Java Developer with 4 years of experience in hyderabad"
          />
          <Button
            type="submit"
            className="absolute right-0 bg-gradient-to-br from-[#0a65cc] to-[#80bc06] rounded border border-[#0a65cc]"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
