import React from 'react';
import Image from "next/image";
import Board from "@/app/assets/Board-icon.png";
import { Bell, Lock } from "lucide-react";

interface ProjectInfoProps {
  progressBar: number;
}

export default function ProjectInfo({ progressBar }: ProjectInfoProps) {
  return (
    <div className="bg-white rounded-t-2xl border-b mt-5 border-[#E6E3E8] shadow-sm">
      <div className="px-6 pt-4 pb-12">
        <div className="flex justify-between items-start">
          {/* Left: Title and Board */}
          <div className="flex flex-col justify-between h-[96px]">
            <h1 className="text-[#282624] text-xl font-bold">Project name</h1>
            <div className="flex items-center gap-2">
              <Image src={Board} alt="Board" width={16} height={16} />
              <span className="text-sm text-[#827E79]">Board</span>
            </div>
          </div>

          {/* Right: Progress bar, status, and avatar stack */}
          <div className="flex flex-col items-end gap-5">
            {/* Progress bar */}
            <div className="flex gap-[2px]">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-2 rounded-full ${
                    i < Math.round(progressBar / 14.3)
                      ? "bg-[#B57DE4]"
                      : "bg-[#E6E3E8]"
                  }`}
                />
              ))}
            </div>

            {/* Status icons + Logged */}
            <div className="flex items-center gap-2">
              <Bell size={16} />
              <Lock size={16} />
              <span className="text-sm text-[#282624]">Logged</span>
            </div>

            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-[#F8C1D3] text-xs font-bold text-black flex items-center justify-center rounded-full border-2 border-white">
                JD
              </div>
              <div className="w-8 h-8 bg-[#A7D9F2] text-xs font-bold text-black flex items-center justify-center rounded-full border-2 border-white">
                MP
              </div>
              <div className="w-8 h-8 bg-[#A0E3DA] text-xs font-bold text-black flex items-center justify-center rounded-full border-2 border-white">
                MP
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute left-0 right-0 h-[1px] bg-[#C5C1BB] mt-4" />
      </div>
    </div>
  );
}