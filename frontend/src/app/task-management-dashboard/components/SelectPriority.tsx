"use client";

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface SelectPriorityProps {
    togglePriority: () => void;
}

export default function SelectPriority({ togglePriority }: SelectPriorityProps) {
    const priorityOptions = [
        { name: "High", color: "bg-red-500" },
        { name: "Medium", color: "bg-yellow-500" },
        { name: "Low", color: "bg-green-500" },
        { name: "None", color: "bg-gray-500" }
    ];

    const handleSelect = (priority: string | null) => {
        // 这里可以添加选择优先级的逻辑
        togglePriority();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="flex flex-col bg-gray-50 w-[75%] max-h-[400px] 
                rounded-[23px] gap-2 shadow-left-heavy px-4 py-4 relative">
                <div className="flex justify-between items-center sticky top-0 bg-gray-50 pb-2">
                    <div>
                        <h1 className="font-bold text-[18px]">Priority</h1>
                        <p className="text-[12px] text-gray-500">Select a priority</p>
                    </div>
                    <CloseIcon className="cursor-pointer w-5 h-5" onClick={togglePriority}/>
                </div>

                <hr className="border-[1px]" />

                {/* Priority Options */}
                <div className="flex flex-col gap-2 mt-2 px-2">
                    {priorityOptions.map((option) => (
                        <button
                            key={option.name}
                            className={`w-full py-2.5 rounded-full text-white font-semibold text-[14px] ${option.color} hover:opacity-90 transition-opacity`}
                            onClick={() => handleSelect(option.name)}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>

                {/* Clear Priority Button */}
                <button
                    className="w-full py-2.5 mt-2 mx-2 border border-gray-300 rounded-full text-gray-700 font-semibold text-[14px] hover:bg-gray-100 transition-colors"
                    onClick={() => handleSelect(null)}
                >
                    Clear priority
                </button>
            </div>
        </div>
    );
} 