"use client";

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

// Top icons
import icon21 from "@/app/assets/description-icons/21.svg";
import icon20 from "@/app/assets/description-icons/20.svg";
import icon19 from "@/app/assets/description-icons/19.svg";
import icon18 from "@/app/assets/description-icons/18.svg";
import icon17 from "@/app/assets/description-icons/17.svg";
import icon16 from "@/app/assets/description-icons/16.svg";
import icon15 from "@/app/assets/description-icons/15.svg";
import icon14 from "@/app/assets/description-icons/14.svg";
import icon13 from "@/app/assets/description-icons/13.svg";
import icon12 from "@/app/assets/description-icons/12.svg";
import icon11 from "@/app/assets/description-icons/11.svg";
import icon10 from "@/app/assets/description-icons/10.svg";
import icon9 from "@/app/assets/description-icons/9.svg";

// Bottom icons
import icon8 from "@/app/assets/description-icons/8.svg";
import icon7 from "@/app/assets/description-icons/7.svg";
import icon6 from "@/app/assets/description-icons/6.svg";
import icon5 from "@/app/assets/description-icons/5.svg";
import icon4 from "@/app/assets/description-icons/4.svg";
import icon3 from "@/app/assets/description-icons/3.svg";
import icon2 from "@/app/assets/description-icons/2.svg";
import icon1 from "@/app/assets/description-icons/1.svg";

interface AddDescriptionProps {
    toggleDescription: () => void;
}

export default function AddDescription({ toggleDescription }: AddDescriptionProps) {
    const [description, setDescription] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="flex flex-col bg-white w-[75%] max-h-[500px] rounded-[23px] shadow-left-heavy">
                {/* Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                    <div>
                        <h1 className="font-bold text-[16px]">Add a description</h1>
                        <p className="text-[12px] text-gray-500">Make your description even better</p>
                    </div>
                    <CloseIcon className="cursor-pointer w-5 h-5" onClick={toggleDescription}/>
                </div>

                {/* Top Icons */}
                <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200">
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon21} alt="Underline" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon20} alt="Bold" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon19} alt="Italic" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon18} alt="Strike" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon17} alt="List" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon16} alt="Quote" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon15} alt="Code" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon14} alt="Link" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon13} alt="Image" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon12} alt="Video" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon11} alt="Attachment" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon10} alt="Table" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon9} alt="List Item" width={18} height={18} />
                    </button>
                </div>

                {/* Textarea */}
                <div className="flex-1 p-3">
                    <textarea
                        className="w-full h-[180px] p-3 text-[14px] border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#3FDCD0] focus:border-transparent"
                        placeholder="Type '/' to insert content, formatting and more..."
                        value={description}
                        onChange={handleInput}
                    />
                </div>

                {/* Bottom Icons */}
                <div className="flex flex-wrap items-center gap-1 p-2 border-t border-gray-200">
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon8} alt="Undo" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon7} alt="Redo" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon6} alt="Emojis" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon5} alt="Hashtags" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon4} alt="Mentions" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon3} alt="Files" width={18} height={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon2} alt="Poll" width={18} height={18} />
                    </button>
                    <div className="h-4 w-[1px] bg-gray-300" />
                    <button className="p-1.5 hover:bg-gray-100 rounded">
                        <Image src={icon1} alt="Link" width={18} height={18} />
                    </button>
                </div>
            </div>
        </div>
    );
} 