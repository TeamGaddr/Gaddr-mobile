import React, { useState, useRef } from "react"
import { useRouter } from "next/navigation";
import { Bell, Calendar, Users, Paperclip, File, Eye, ChevronDown, Flag, FileText, Tag, ListChecks } from "lucide-react";
import SelectPriority from './SelectPriority';
import AddSubtasks from './AddSubtasks';
import AddDescription from './AddDescription';
import AddLabels from './AddLabels';
import AddWatcher from './AddWatcher';

interface TaskCardProps {
  task: {
    id: string;
    name: string;
    listName: string;
    assignees: Array<{ id: number; name: string }>;
    deadline: string;
  };
  onAddTask: () => void;
}


const taskOptions = [
  { icon: Paperclip, label: "Attach a file" },
  { icon: Flag, label: "Select a priority" },
  { icon: FileText, label: "Add description" },
  { icon: Eye, label: "Add watchers" },
  { icon: Tag, label: "Add labels" },
  { icon: ListChecks, label: "Add a subtask" },
];


export default function TaskCard({ task }: TaskCardProps) {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showSelectPriority, setShowSelectPriority] = useState(false);
    const [showAddSubtasks, setShowAddSubtasks] = useState(false);
    const [showAddDescription, setShowAddDescription] = useState(false);
    const [showAddLabels, setShowAddLabels] = useState(false);
    const [showAddWatcher, setShowAddWatcher] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

    const handleOptionClick = (label: string) => {
      switch(label) {
        case "Attach a file":
          fileInputRef.current?.click();
          break;
        case "Select a priority":
          setShowSelectPriority(true);
          break;
        case "Add a subtask":
          setShowAddSubtasks(true);
          break;
        case "Add description":
          setShowAddDescription(true);
          break;
        case "Add labels":
          setShowAddLabels(true);
          break;
        case "Add watchers":
          setShowAddWatcher(true);
          break;
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        // 这里可以添加文件上传逻辑
        console.log('Selected file:', file.name);
      }
    };

    const handlePrioritySelect = (priority: string | null) => {
        setSelectedPriority(priority);
        // 这里可以添加其他处理逻辑
    };

    const handleOutsourceClick = () => {
      router.push('/outsource-talent');
    };

    return (
      <>
        <div
          className="rounded-lg border border-[#9C2BBF] border-[1.1px] bg-white p-4 space-y-3 shadow-[0_4px_12px_rgba(181,125,228,0.3)] mt-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-bold text-neutral-900">{task.name}</h2>
              <p className="text-sm text-neutral-700 mt-0.5">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  in list <span className="italic underline">{task.listName}</span>
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" aria-label="Complete task" />
              <button aria-label="More options">⋯</button>
              <Bell size={16} />
            </div>
          </div>

    <div className="relative">
      <div className="absolute inset-x-0 h-[1px] bg-[#C5C1BB] top-0 translate-x-[-1rem] w-[calc(100%+2rem)]" />
    </div>


          <div className="flex items-start justify-between">
            <div className="flex gap-2 pt-4 pb-2 pl-2 items-center">
              <File className="w-4 h-4 text-gray-500" />
              <Paperclip className="w-4 h-4 text-gray-500" />
              <Eye className="w-4 h-4 text-gray-500" />
            </div>
          </div>

    <div className="relative">
      <div className="absolute inset-x-0 h-[1px] bg-[#C5C1BB] top-0 translate-x-[-1rem] w-[calc(100%+2rem)]" />
    </div>


          <div className="flex justify-between items-start text-sm p-3 pl-1">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-neutral-600 text-[#827E79]">Assignees:</span>
                <div className="flex -space-x-2">
                  {task.assignees.map((a, idx) => {
                    const initials = a.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2);
                    return (
                      <div
                        key={idx}
                        className={`w-6 h-6 rounded-full text-xs flex items-center justify-center text-white border-2 border-white bg-pink-400`}
                      >
                        {initials}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-1 text-neutral-700">
                <span className="text-neutral-600 text-[#827E79]">Deadline:</span>
                {task.deadline}
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-1 items-center">
              <Users className="w-4 h-4 text-gray-500" />
              <Calendar className="w-4 h-4 text-gray-500" />
            </div>
          </div>

    <div className="relative">
      <div className="absolute inset-x-0 h-[1px] bg-[#C5C1BB] top-0 translate-x-[-1rem] w-[calc(100%+2rem)]" />
    </div>



          <div className="flex justify-center text-neutral-400">
          </div>
                {/* Expand/collapse function */}
    <div className="flex flex-col pt-1 items-left">
      {(isExpanded ? taskOptions : [taskOptions[0]]).map(({ icon: Icon, label }, idx) => (
        <div
          key={idx}
          className="flex items-center text-xs text-[#827E79] gap-2 p-1 cursor-pointer hover:bg-gray-100"
          onClick={() => handleOptionClick(label)}
        >
          <Icon size={14} />
          {label}
          {label === "Attach a file" && selectedFile && (
            <span className="text-xs text-gray-500 ml-2">
              {selectedFile.name}
            </span>
          )}
        </div>
      ))}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
      />

      {isExpanded && (
        <div className="flex justify-center">
          <button
            className="flex h-11 w-fit px-7 py-1.5 mt-6 justify-center font-semibold items-center text-sm gap-[5px] rounded-[10px] bg-[#3FDCD0] text-black"
            onClick={handleOutsourceClick}
          >
            Outsource Talent
          </button>
        </div>
      )}
    </div>


          <div
            className="flex justify-center text-neutral-400 cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
          >


            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {showSelectPriority && (
          <SelectPriority
            togglePriority={() => setShowSelectPriority(false)}
            onSelectPriority={handlePrioritySelect}
          />
        )}
        {showAddSubtasks && (
          <AddSubtasks
            toggleSubtasks={() => setShowAddSubtasks(false)}
            subtaskTitle={task.name}
            listName={task.listName}
          />
        )}
        {showAddDescription && (
          <AddDescription
            toggleDescription={() => setShowAddDescription(false)}
          />
        )}
        {showAddLabels && (
          <AddLabels
            toggleLabels={() => setShowAddLabels(false)}
          />
        )}
        {showAddWatcher && (
          <AddWatcher
            toggleWatcher={() => setShowAddWatcher(false)}
          />
        )}
      </>
    );
} 