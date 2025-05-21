"use client";

import React, { useState } from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

// Icon imports
import assigneesIcon from "@/app/assets/assigneesIcon.svg";
import deadlineIcon from "@/app/assets/deadlineIcon.svg";
import priorityIcon from "@/app/assets/priorityIcon.svg";
import bellIcon from "@/app/assets/bell-icon.svg";
import editIcon from "@/app/assets/editIcon.svg";
import attachFileIcon from "@/app/assets/attachementsIcon.svg";
import descriptionIcon from "@/app/assets/paperIcon.svg";
import watchersIcon from "@/app/assets/watchIcon.svg";
import labelIcon from "@/app/assets/labelIcon.svg";
import subtasksIcon from "@/app/assets/subtasksIcon.svg";

interface AddNewTaskProps {
    toggleAddTask: () => void;
}

export default function AddNewTask({ toggleAddTask }: AddNewTaskProps) {
    const [taskTitle, setTaskTitle] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里添加创建任务的逻辑
        toggleAddTask();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="flex flex-col bg-white w-[75%] max-h-[80vh] rounded-[23px] shadow-left-heavy">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h1 className="font-bold text-[20px]">Add new task</h1>
                    <CloseIcon className="cursor-pointer" onClick={toggleAddTask} />
                </div>

                {/* Task Form */}
                <form onSubmit={handleSubmit} className="flex-1 p-4 overflow-y-auto">
                    {/* Task Title */}
                    <div className="mb-4">
                        <input
                            type="text"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Task title"
                            className="w-full p-2 text-[16px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FDCD0] focus:border-transparent"
                        />
                    </div>

                    {/* Task Options */}
                    <div className="flex flex-wrap gap-4">
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={assigneesIcon} alt="Assignees" width={20} height={20} />
                            <span className="text-sm">Assignees</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={deadlineIcon} alt="Deadline" width={20} height={20} />
                            <span className="text-sm">Deadline</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={priorityIcon} alt="Priority" width={20} height={20} />
                            <span className="text-sm">Priority</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={bellIcon} alt="Notifications" width={20} height={20} />
                            <span className="text-sm">Notifications</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={editIcon} alt="Edit" width={20} height={20} />
                            <span className="text-sm">Edit</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={attachFileIcon} alt="Attach file" width={20} height={20} />
                            <span className="text-sm">Attach file</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={descriptionIcon} alt="Description" width={20} height={20} />
                            <span className="text-sm">Description</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={watchersIcon} alt="Watchers" width={20} height={20} />
                            <span className="text-sm">Watchers</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={labelIcon} alt="Labels" width={20} height={20} />
                            <span className="text-sm">Labels</span>
                        </button>
                        <button type="button" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
                            <Image src={subtasksIcon} alt="Subtasks" width={20} height={20} />
                            <span className="text-sm">Subtasks</span>
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="flex justify-end gap-4 p-4 border-t border-gray-200">
                    <button
                        type="button"
                        onClick={toggleAddTask}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#3FDCD0] text-black rounded-lg hover:bg-[#31aca3]"
                    >
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    );
} 