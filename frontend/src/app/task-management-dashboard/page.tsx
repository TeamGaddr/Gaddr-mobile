"use client";

import { useState } from "react";
import Image from "next/image";
import mockTasks from "@/app/sampleData/mockTasks";
import MobileSidebar from "@/app/components/layout/MobileSidebarWrapper";
import Logo from "@/app/assets/gaddr.svg";
import User from "@/app/assets/profileImage.png";
import Menu from "@/app/assets/sidebar-icon.svg";
import { ChevronDown, Lock, Bell, Calendar, Users, Paperclip, Plus, File, Eye } from "lucide-react";
import TaskCard from "@/app/task-management-dashboard/components/TaskCard";
import ProjectInfo from "@/app/task-management-dashboard/components/ProjectInfo";
import AddNewTask from "@/app/task-management-dashboard/components/AddNewTask";
import { montserrat } from "@/app/fonts";
import watchIcon from "@/app/assets/watchIcon.svg";

export default function TaskManagementDashboardMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"todo" | "inProgress" | "completed">("inProgress");
  const [projectProgressBar] = useState<number>(5);
  const [tasks, setTasks] = useState(mockTasks);
  const [showAddTask, setShowAddTask] = useState<string | null>(null);
const [showTaskForm, setShowTaskForm] = useState(false);

  const tabs = [
    { id: "todo", label: "To do" },
    { id: "inProgress", label: "In progress" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div
      className={`relative overflow-x-hidden pb-15 min-h-[300px]`}
      style={{
        background: "linear-gradient(180deg, #282625 0%, #6E1F87 16%)",
      }}>

      {/* Header */}
      <div className="w-full flex justify-between items-center px-4 py-3 text-white z-20 relative">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" width={100} height={20} className="h-[25px] w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 relative">
            <Bell size={23} color="#fff" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div className="w-[18px] h-[18px] rounded-full bg-[#20CF89] shadow-inner" />
          <div className="w-8 h-8 relative overflow-hidden">
            <Image src={User} alt="User" fill className="object-cover rounded-full" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full z-10" />
          </div>
        </div>
      </div>

      {/* Workspace info */}
      <div className="w-full px-0 pt-0 pb-11">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="ml-0 pl-0 pr-0.35">
            <Image src={Menu} alt="Menu" width={24} height={24} />
          </button>
          <div className="w-10 h-10 bg-[#F8C1D3] rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-2xl">K.</span>
          </div>
          <span className="text-white text-base font-bold mt-[-4px]">Workspace name</span>
        </div>
      </div>

      {/* Project Info */}
      <ProjectInfo progressBar={projectProgressBar} />

      <div className="bg-white px-4 pb-10 min-h-[85vh]">
      {/* Tabs */}
      
      <div className="bg-[#F8F6FA] rounded-xl mx-4 mb-2 p-2">
        <div className="flex justify-between items-center relative w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "todo" | "inProgress" | "completed")}
              className={`relative px-4 py-2 text-sm font-bold transition-all duration-150 rounded-xl border ${
                activeTab === tab.id
                  ? "bg-white text-[#1C1B1F] border-[#D19DE2] border-[1.5px] shadow-[0_2px_8px_rgba(0,0,0,0.09)]"
                  : "bg-[#E9E7E5] text-[#7A7672] border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task list */}
      <div className="max-w-sm mx-auto">
        {tasks[activeTab].map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onAddTask={() => {
              const newTask = {
                id: String(Date.now()),
                name: "My New Task",
                assignees: [{ id: 99, name: "New User" }],
                deadline: "2025-12-31",
                subtask: 0,
                labelNames: ["Low"],
                position: tasks[activeTab].length + 1,
                listName: activeTab === "inProgress" ? "in progress" : activeTab,
              };
              setTasks({
                ...tasks,
                [activeTab]: [...tasks[activeTab], newTask],
              });
            }}
          />
        ))}
<>
<div>
  {/* 点击后出现的新增卡片 */}
  {showTaskForm && <AddNewTask
  listName={
    activeTab === "inProgress"
      ? "In Progress"
      : activeTab === "todo"
      ? "To Do"
      : "Done"
  }
/>
}

  {/* 始终显示的按钮 */}
  <button
    className="w-full mt-4 py-2 border border-[#9C2BBF] rounded-lg text-[#9C2BBF] font-semibold flex justify-center items-center gap-2"
onClick={() => {
  const newTask = {
    id: String(Date.now()),
    name: "My New task",
    assignees: [],
    deadline: "",
    labelNames: [],
    subtask: 0,
    listName: activeTab, 
    position: tasks[activeTab].length + 1,
    isNew: true, 
  };

  setTasks({
    ...tasks,
    [activeTab]: [...tasks[activeTab], newTask],
  });
}}
  >
    <Plus size={16} /> Add Task
  </button>
</div>

</>

      </div>

      <MobileSidebar isVisible={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div></div>
  );
} 