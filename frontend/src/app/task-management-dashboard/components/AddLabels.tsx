"use client";

import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Label {
    name: string;
    color: string;
}

interface AddLabelsProps {
    toggleLabelManager: () => void;
}

const initialLabels: Label[] = [
    { name: "Design", color: "#B57DE4" },
    { name: "Frontend", color: "#3FDCD0" },
    { name: "Backend", color: "#F8C1D3" },
    { name: "Research", color: "#A7D9F2" },
    { name: "Low", color: "#A0E3DA" },
];

export default function AddLabels({ toggleLabelManager }: AddLabelsProps) {
    const [labels, setLabels] = useState<Label[]>(initialLabels);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const [editLabel, setEditLabel] = useState<Label | null>(null);
    const [editLabelName, setEditLabelName] = useState("");

    const handleLabelToggle = (name: string) => {
        setSelectedLabels((prev) =>
            prev.includes(name) ? prev.filter((l) => l !== name) : [...prev, name]
        );
    };

    const handleSave = () => {
        // 保存逻辑
        toggleLabelManager();
    };

    const handleEdit = (label: Label) => {
        setEditLabel(label);
        setEditLabelName(label.name);
    };

    const handleEditSave = () => {
        if (editLabel) {
            setLabels((prev) =>
                prev.map((l) => (l.name === editLabel.name ? { ...l, name: editLabelName } : l))
            );
            setEditLabel(null);
            setEditLabelName("");
        }
    };

    const handleEditCancel = () => {
        setEditLabel(null);
        setEditLabelName("");
    };

    const filteredLabels = labels.filter((label) =>
        label.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90vw] max-w-md relative">
                {/* 关闭按钮 */}
                <button className="absolute top-4 right-4" onClick={toggleLabelManager}>
                    <CloseIcon />
                </button>
                <h2 className="text-lg font-bold mb-4">Manage Labels</h2>
                <input
                    type="text"
                    placeholder="Search labels..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />
                <div className="space-y-2 mb-4">
                    {filteredLabels.map((label) => (
                        <div key={label.name} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={selectedLabels.includes(label.name)}
                                onChange={() => handleLabelToggle(label.name)}
                            />
                            <span
                                className="px-2 py-1 rounded text-white"
                                style={{ background: label.color }}
                            >
                                {label.name}
                            </span>
                            <button
                                className="ml-auto text-xs text-blue-500"
                                onClick={() => handleEdit(label)}
                                type="button"
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
                {editLabel && (
                    <div className="mb-4">
                        <input
                            type="text"
                            value={editLabelName}
                            onChange={(e) => setEditLabelName(e.target.value)}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleEditSave} type="button">
                            Save
                        </button>
                        <button className="px-3 py-1 bg-gray-300 rounded" onClick={handleEditCancel} type="button">
                            Cancel
                        </button>
                    </div>
                )}
                <div className="flex justify-end gap-2">
                    <button className="px-4 py-2 border rounded" onClick={toggleLabelManager}>
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