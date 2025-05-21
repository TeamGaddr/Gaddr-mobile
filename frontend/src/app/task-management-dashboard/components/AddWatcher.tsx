"use client";

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

// Icon imports
import xIcon from "@/app/assets/x-icon.svg";
import searchIcon from "@/app/assets/searchIcon.svg";
import userIcon2 from "@/app/assets/user-icons/userIcon2.svg";
import userIcon3 from "@/app/assets/user-icons/userIcon3.svg";
import inviteUserIcon from "@/app/assets/inviteUserIcon.svg";
import watcherIcon from "@/app/assets/assignees.svg";

// Recently used watchers (mock data)
const recentlyUsed = [
    {
        id: 1,
        name: "Maria Pepita Flores",
        icon: null,
        email: "maria@domain.com",
        role: "Frontend Developer",
    },
    {
        id: 2,
        name: "Berta Fernandez",
        icon: null,
        email: "berta@domain.com",
        role: "Backend Developer",
    },
    {
        id: 3,
        name: "Somebody",
        icon: null,
        email: "somebody@domain.com",
        role: "Designer",
    },
];

interface AddWatcherProps {
    toggleWatcher: () => void;
}

const AddWatcher = ({ toggleWatcher }: AddWatcherProps) => {
    const [selectedWatcher, setSelectedWatcher] = useState<{
        id: number;
        name: string;
        icon: string | null;
        email: string;
        role: string;
    } | null>(null);

    const [isSelectedWatcherVisible, setIsSelectedWatcherVisible] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isInviteVisible, setIsInviteVisible] = useState<boolean>(false);

    const filteredWatcher = recentlyUsed.filter((watcher) =>
        watcher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="flex flex-col bg-gray-50 w-[75%] h-[75%] 
                rounded-[23px] gap-2 shadow-left-heavy px-4 py-4 relative overflow-y-auto">
                <div className="flex justify-between items-center sticky top-0 bg-gray-50 pb-2">
                    <h1 className="font-bold text-[20px]">Add Watchers</h1>
                    <CloseIcon className="cursor-pointer" onClick={toggleWatcher}/>
                </div>

                <hr className="border-[1px]" />

                {/* Search bar */}
                <div className="relative mt-2">
                    <input
                        placeholder="Search for watcher..."
                        className="border-2 rounded-lg border-black pl-10 h-[40px] w-full text-[14px]"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Task watcher */}
                <div className="mt-2">
                    <p className="font-bold text-[16px]">Task watchers:</p>
                </div>

                <p className="font-semibold text-[#C5C1BB] text-[14px]">Recently used</p>

                <hr className="border-[1px]" />

                {/* Recently used watcher */}
                <div className="flex flex-col gap-1 relative">
                    {filteredWatcher.length > 0 ? (
                        filteredWatcher.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between border p-1 px-2 rounded-full cursor-pointer hover:bg-[#E2E2E2] hover:border-[#B055CC]"
                            >
                                <div className="flex items-center">
                                    {user.icon ? (
                                        <Image src={user.icon} alt="user icon" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-[#DEDBD8] flex items-center justify-center">
                                            <span className="text-[#181615] font-bold text-[12px]">
                                                {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                            </span>
                                        </div>
                                    )}
                                    <p className="text-[14px] font-semibold pl-3 text-[#181615]">
                                        {user.name}
                                    </p>
                                </div>

                                <button
                                    className="mr-2 text-[#B055CC] hover:text-[#9C2BBF]"
                                    onClick={() => {
                                        setSelectedWatcher(user);
                                        setIsSelectedWatcherVisible(true);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-[14px]">No watcher found</p>
                    )}
                </div>

                {/* Save button */}
                <div className="flex justify-end mt-2">
                    <button className="bg-[#B7B1AA] text-black rounded-xl py-1 px-4 h-[37px] w-[77px] text-[14px]">
                        Save
                    </button>
                </div>

                {/* Invite button */}
                <button
                    className="flex items-center border border-black rounded-lg py-1 px-4 mt-1 gap-3 hover:bg-[#E2E2E2] text-[14px]"
                    onClick={() => setIsInviteVisible(!isInviteVisible)}
                >
                    <span>+</span>
                    <p>Invite new team members</p>
                </button>
            </div>
        </div>
    );
};

export default AddWatcher; 