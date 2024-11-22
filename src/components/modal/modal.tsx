"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BlueTick from "../images/blueTick";
import WhiteTick from "../images/whiteTick";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import { X } from "lucide-react";
import Carousal from "./carousal";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-[#0a65cc] text-sm font-semibold m-2">Upgrade plan</button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-6 rounded-lg bg-white shadow-lg">
        <DialogHeader className="hidden md:inline relative">
          <div
            onClick={handleClose}
            className="absolute -top-14 -right-20 rounded-full p-5 bg-[#E7F0FA] border-4 border-white cursor-pointer"
          >
            <X className="h-8 w-8 text-[#0a65cc]" />
          </div>
        </DialogHeader>
        <DialogTitle className="text-center text-[#333333] text-2xl font-medium leading-7 mb-3">
          Upgrade Your Plan Now
        </DialogTitle>
        <div className="text-center text-[#0a65cc] text-2xl font-medium font-['Poppins'] leading-7 mb-3">
          <span className="inline-flex items-center">
            <Image src="/confetti.svg" alt="tick" width={40} height={40} /> <span className="ml-2">Launch Offer</span>
          </span>
        </div>

        <div className="hidden md:flex justify-center mb-3">
          <Tabs defaultValue="account" className="w-[350px]">
            <TabsList className="grid h-12 w-full bg-blue-50  grid-cols-2 ">
              <TabsTrigger value="monthly" className="w-[150] h-full ">
                Monthly Plan
              </TabsTrigger>
              <TabsTrigger value="quarterly" className="w-[150] h-full">
                Quarterly Plan
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Carousal />
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Basic Plan */}
          <div className="p-6 bg-[#d5e5f5] flex flex-col gap-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-4 inline-flex w-32 h-9 px-4 py-2 bg-white border border-[#1b3878] border-t-0 rounded-bl-lg rounded-br-lg items-center justify-center">
              <span className="text-sm font-medium text-[#1b3b7b] font-sans">Current Plan</span>
            </div>
            {/* Header Section */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center justify-center w-16 h-16 bg-[#d0e1f5] border border-white rounded-lg shadow">
                {/* Icon Placeholder */}
                <div className="w-[22px] h-[28px]">
                  {" "}
                  <Image src="/premium-badge.svg" alt="tick" width={60} height={60} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#505153] font-['Poppins']">BASIC</h3>
            </div>
            {/* Pricing Section */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <p className="text-[35px] font-bold text-[#1e3b95]">₹ 99,999</p>
                <button className="w-full px-6 py-3 text-[17px] font-medium text-[#074891] bg-white border rounded font-['Poppins'] hover:bg-[#f0f0f0]">
                  Upgrade
                </button>
                <p className="text-sm font-medium text-[#505153] font-['Poppins']">8 Login IDs & 1 Month Validity</p>
              </div>
              {/* Features Section */}
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-semibold text-[#191a1a]/80 font-['Poppins']">Key features include</h4>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      <BlueTick />
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">15,000 CV Views</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">40 Job Postings</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">7500 CV Screenings</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">100 BOT Video Interviews</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="p-6 relative flex flex-col items-start gap-8 bg-[#1e3b95] rounded-lg shadow-lg md:row-span-1">
            <div className="inline-flex absolute top-0 right-4 h-9 px-4 py-2 bg-gradient-to-r from-[#a8e84c] via-[#79b127] to-[#5e822a] rounded-bl-md rounded-br-md items-center justify-center">
              <span className="text-sm font-medium text-white font-sans">Most Recommended</span>
            </div>

            {/* Header Section */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-[#e7f0fa]/40 rounded-lg border border-white">
                {/* Placeholder for Icon */}
                <div className="w-[22px] h-[28px]">
                  {" "}
                  <Image src="/white-premium-badge.svg" alt="tick" width={60} height={60} />{" "}
                </div>
              </div>
              <h3 className="text-lg font-medium text-white opacity-80 font-['Poppins']">STANDARD</h3>
            </div>
            {/* Pricing Section */}
            <div className="w-full flex flex-col items-start gap-8">
              <div>
                <p className="text-[35px] font-bold text-white">₹ 49,999</p>
              </div>
              <button className="w-full px-6 py-[15px] text-[17px] font-medium text-[#0a65cc] bg-[#e5f1ff] rounded shadow-inner font-['Poppins'] hover:bg-[#d9eaff]">
                Upgrade
              </button>
              <p className="text-sm font-medium text-white font-['Poppins']">4 Login IDs  &  1 Month Validity</p>
            </div>
            {/* Features Section */}
            <div className="w-full flex flex-col items-start gap-4">
              <h4 className="text-base font-semibold text-white font-['Poppins']">Key features include</h4>
              <ul className="flex flex-col gap-4 text-base font-normal text-white font-['Poppins']">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6">
                    {" "}
                    <WhiteTick />{" "}
                  </div>
                  7,500 CV Views
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6">
                    {" "}
                    <WhiteTick />{" "}
                  </div>
                  25 Job Postings
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6">
                    {" "}
                    <WhiteTick />{" "}
                  </div>
                  3250 CV Screenings
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6">
                    {" "}
                    <WhiteTick />{" "}
                  </div>
                  25 BOT Video Interviews
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="p-6 bg-[#d5e5f5] flex flex-col gap-6 rounded-lg shadow-lg">
            {/* Header Section */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center justify-center w-16 h-16 bg-[#d0e1f5] border border-white rounded-lg shadow">
                {/* Icon Placeholder */}
                <div className="w-[22px] h-[28px]">
                  {" "}
                  <Image src="/premium-badge.svg" alt="tick" width={60} height={60} />{" "}
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#505153] font-['Poppins']">PREMIUM</h3>
            </div>
            {/* Pricing Section */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <p className="text-[35px] font-bold text-[#1e3b95]">₹ 99,999</p>
                <button className="w-full px-6 py-3 text-[17px] font-medium text-[#074891] bg-white border rounded font-['Poppins'] hover:bg-[#f0f0f0]">
                  Upgrade
                </button>
                <p className="text-sm font-medium text-[#505153] font-['Poppins']">8 Login IDs  &  1 Month Validity</p>
              </div>
              {/* Features Section */}
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-semibold text-[#191a1a]/80 font-['Poppins']">Key features include</h4>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">15,000 CV Views</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">40 Job Postings</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">7500 CV Screenings</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {" "}
                      <BlueTick />{" "}
                    </div>
                    <p className="text-sm font-normal text-[#333333]/75 font-['Poppins']">100 BOT Video Interviews</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
