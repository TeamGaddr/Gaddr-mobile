"use client";

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

// Icon imports
import watchIcon from "@/app/assets/watchIcon.svg";
import assigneesIcon from "@/app/assets/assigneesIcon.svg";
import deadlineIcon from "@/app/assets/deadlineIcon.svg";
import priorityIcon from "@/app/assets/priorityIcon.svg";
import labelIcon from "@/app/assets/labelIcon.svg";
import descriptionDarkIcon from "@/app/assets/descriptionDarkIcon.svg";
import attachementsIcon from "@/app/assets/attachementsIcon.svg";

interface AddSubtasksProps {
    toggleSubtasks: () => void;
    subtaskTitle?: string;
    listName?: string;
}

export default function AddSubtasks({ toggleSubtasks, subtaskTitle, listName }: AddSubtasksProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionToggle = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    const handleSave = () => {
        // 保存逻辑
        toggleSubtasks();
    };

    const options = [
        { label: "Watchers", icon: watchIcon },
        { label: "Assignees", icon: assigneesIcon },
        { label: "Deadline", icon: deadlineIcon },
        { label: "Priority", icon: priorityIcon },
        { label: "Label", icon: labelIcon },
        { label: "Description", icon: descriptionDarkIcon },
        { label: "Attachments", icon: attachementsIcon },
    ];

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90vw] max-w-md relative">
                {/* 关闭按钮 */}
                <button className="absolute top-4 right-4" onClick={toggleSubtasks}>
                    <CloseIcon />
                </button>
                <h2 className="text-lg font-bold mb-4">Add Subtasks</h2>
                <div className="space-y-2 mb-4">
                    {options.map((option) => (
                        <div key={option.label} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option.label)}
                                onChange={() => handleOptionToggle(option.label)}
                            />
                            <img src={option.icon.src} alt={option.label} className="w-5 h-5" />
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end gap-2">
                    <button className="px-4 py-2 border rounded" onClick={toggleSubtasks}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#3FDCD0] text-black rounded" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
} 