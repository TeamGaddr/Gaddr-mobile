// File: app/outsource-talent/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/gaddr.png";
import User from "@/app/assets/user-icons/profileImage.png";
import Menu from "@/app/assets/sidebar-icon.svg";
import TagSelector from "@/app/components/ui/TagSelector";
import MobileSidebar from "@/app/components/layout/MobileSidebarWrapper";
import { ChevronDown, Bell, Plus, File, Paperclip, Eye, Lock, ChevronLeft} from "lucide-react";
import MyTagInput from "@/app/components/ui/MyTagInput"
import dynamic from "next/dynamic";
import Link from "next/link";





function SectionDivider() {
  return <div className="w-full h-[1px] bg-[#C5C1BB] my-4" />;
}

export default function OutsourceTalentMobile() {
  const [step, setStep] = useState<"form" | "preview">("form");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const allSkills = [
    "UX/UI",
    "Illustration",
    "HTML",
    "Web design",
    "Research habilities",
    "Team work",
    "Prototyping",
    "Animation",
    "CSS",
  ];
  type OptionType = { value: string; label: string };
  const [skills, setSkills] = useState<OptionType[]>([
    { value: "UX/UI", label: "UX/UI" },
    { value: "HTML", label: "HTML" },
  ]);
  const [formData, setFormData] = useState({
    taskTitle: "",
    companyTitle: "",
    outsourcingType: "",
    jobDescription: "",
    skills: ["UX/UI", "Illustration", "HTML"],
    experiences: {
      UXUI: "2 years",
      HTML: "1 year",
      Illustration: "Previous experience",
    },
    email: "",
    phone: "",
    website: "",
    placeholder1: ""
  });
  

  
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  const sharedHeader = (
    <div
      className="relative font-montserrat overflow-x-hidden pb-10"
      style={{
        background: "linear-gradient(180deg, #282625 0%, #6E1F87 100%)",
      }}
    >
      {/* 顶部栏 */}
      <div className="w-full flex justify-between items-center px-4 py-3 text-white relative z-10">
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
  
      {/* 菜单栏 */}
      <div className="w-full px-0 pt-0 pb-3">
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
  
      {/* 标题说明 */}
      <div className="text-white text-center px-6 pt-4">
        <p className="text-2xl font-bold mb-3">Outsource Talent</p>
        <p className="text-sm font-light">
          FlowerWork will help you to create an announcement for LinkedIn to find the right talent. You can post it on both Personal and FlowerWork's LinkedIn accounts.
        </p>
      </div>
    </div>
  );
  


const formView = (
  <>
  
  <div className="flex-1 px-0 ">
  <div className="bg-white rounded-2xl shadow-sm w-full h-full">

    
      <div className="px-5 pt-5 pb-12">

      <div className="flex items-center px-1 pt-5 mb-6">
      <Link href="/task-management-dashboard">
      <ChevronLeft className="w-5 h-5 mr-5 cursor-pointer" />
    </Link>
  <h1 className="text-black text-lg font-bold">Create your outsource task</h1>
</div>

          <div className="bg-white rounded-2xl py-3 px-1 space-y-6 text-sm text-black">

{/* Task title */}
<div>
  <label className="font-normal block mb-4">
    Edit title of outsourced task: <span className="text-red-500">*</span>
  </label>
  <input
    placeholder="Title of your task here!"
    className="w-full border p-2 rounded-lg"
    value={formData.taskTitle}
    onChange={(e) => handleInputChange("taskTitle", e.target.value)}
  />
</div>

{/* Company title */}
<div>
  <label className="font-normal block mb-4">
    Title of your company <span className="text-red-500">*</span>
  </label>
  <input
    placeholder="Title of your company here!"
    className="w-full border p-2 rounded-lg"
    value={formData.companyTitle}
    onChange={(e) => handleInputChange("companyTitle", e.target.value)}
  />
</div>

<div className="space-y-2">
  <label className="block font-medium text-sm text-black">Company logo file</label>

  {/* 自定义按钮 + 隐藏的 input */}
  <div className="relative inline-block">
    <input
      type="file"
      accept=".png,.jpg,.jpeg"
      id="fileUpload"
      onChange={(e) => console.log(e.target.files)}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <button
      type="button"
      className="bg-[#9C2BBF] hover:bg-[#8223a2] text-white text-sm font-sm py-2 px-4 rounded-lg flex items-center gap-1"
    >
      <Paperclip className="w-4 h-4 mr-2" /> Attach a file
    </button>
  </div>

  <p className="text-gray-400 text-xs">
    Drag & drop your company logo (format: .jpg, .png). Max 25 MB.
  </p>
</div>


{/* Outsourcing type (dropdown) */}
<div>
  <label className="block mb-4 mt-8">
    Choose outsourcing type <span className="text-red-500">*</span>
  </label>
  <select
    className="w-full border p-2 rounded-lg"
    value={formData.outsourcingType}
    onChange={(e) => handleInputChange("outsourcingType", e.target.value)}
  >
    <option value="">Choose from the menu</option>
    <option value="Website design">Internship opportunity</option>
    <option value="UX Research">Long-term job opportunity</option>
    <option value="Website design">Short-term task</option>
  </select>
</div>

{/* Job description */}
<div>
  <label className="block mb-4 mt-8">
    Job description <span className="text-red-500">*</span>
  </label>
  <textarea
    className="w-full border p-2 rounded-lg"
    rows={6}
    maxLength={1000}
    placeholder="Describe the job you are trying to outsource"
    value={formData.jobDescription}
    onChange={(e) => handleInputChange("jobDescription", e.target.value)}
  />
  <p className="text-gray-400 text-xs">1000 characters left</p>
  <p className="text-gray-400 text-xs mt-1">
    The more detail you provide, the better we can help you find the right person.
  </p>
</div>

{/* Skills (multi-tag select mockup）*/}
<div className="space-y-1">
<div className="flex items-center px-1 pt-3 mb-6">
  <label className="block text-sm font-medium">
    What skills are required? <span className="text-red-500">*</span>
  </label>
  </div>
  <MyTagInput
  value={skills}
  onChange={setSkills}
/>
</div>
<div className="mt-2">

<div className="flex items-center px-1 mb-3">

<div className="flex felx-row gap-12">
  <label className="text-sm font-medium ">Added skills</label>
  <p className="text-sm mb-1 text-gray-700">{skills.length}/10 selected</p>
  </div>
  </div>



  <div className="flex flex-wrap gap-2">
    {skills.map((tag) => (
      <span
        key={tag.value}
        className="px-3 py-1 rounded-xl border border-gray-400 text-sm flex items-center gap-2"
      >
        {tag.label}
        <button
          onClick={() => setSkills(skills.filter((t) => t.value !== tag.value))}
          className="text-gray-500 hover:text-red-500"
        >
          ×
        </button>
      </span>
    ))}
  </div>
</div>


{/* Experience Required */}
<div>
  <label className="block mb-4 mt-10">
  Preferred years of experience, requirements 
  </label>
  <div className="flex flex-col gap-4">
  <select
  className="min-w-[120px] max-w-full w-fit border p-2 rounded-lg"
  value={formData.placeholder1 || ""}
  onChange={(e) => handleInputChange("placeholder1", e.target.value)}
>
  <option value="">Choose period</option>
  <option value="1 year">1 year</option>
</select>
<select
  className="min-w-[120px] max-w-full w-fit border p-2 rounded-lg"
  value={formData.placeholder1 || ""}
  onChange={(e) => handleInputChange("placeholder1", e.target.value)}
>
  <option value="">Choose period</option>
  <option value="1 year">1 year</option>
</select>
<select
  className="min-w-[120px] max-w-full w-fit border p-2 rounded-lg"
  value={formData.placeholder1 || ""}
  onChange={(e) => handleInputChange("placeholder1", e.target.value)}
>
  <option value="">Choose period</option>
  <option value="1 year">1 year</option>
</select>
</div>
</div>


{/* Contact information */}
<div className="flex items-center px-1 pt-3 pb-5 mb-6">
<div>
  <label className="block mb-4">
    Contact information for candidates <span className="text-red-500">*</span>
  </label>
  <input
    placeholder="Enter contact e-mail"
    className="w-full border p-2 rounded-lg mb-2"
    value={formData.email}
    onChange={(e) => handleInputChange("email", e.target.value)}
  />
  <input
    placeholder="Enter contact phone number"
    className="w-full border p-2 rounded-lg mb-2"
    value={formData.phone}
    onChange={(e) => handleInputChange("phone", e.target.value)}
  />
  <input
    placeholder="Company website URL"
    className="w-full border p-2 rounded-lg"
    value={formData.website}
    onChange={(e) => handleInputChange("website", e.target.value)}
  />
  <button className="text-purple-600 mt-2 text-sm font-medium">
    + Add other contact method
  </button>
</div></div>

{/* Submit */}
<div className="flex items-center px-1 pb-5 mt-8">
<button
  className="bg-[#9C2BBF] text-white w-full py-2 rounded-lg font-normal"
  onClick={() => setStep("preview")}
>
  Preview Post
</button></div>
</div>

        </div>
      </div>
    </div>      <MobileSidebar isVisible={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
  </>
);


const previewView = (
  <>
    <div className="flex-1 px-0 ">
      <div className="bg-white rounded-2xl shadow-sm w-full h-full">

        {/* ✅ 外层统一容器 + 背景 */}
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden">

          {/* ✅ 背景图层 */}
          <div
            className="absolute inset-0 z-10 pointer-events-none bg-no-repeat bg-cover bg-fixed"
            style={{
              backgroundImage: 'url("/gradient background.png")',
              backgroundPosition: '60% center',
              backgroundAttachment: 'fixed',
              opacity: 0.4,
            }}
          />

          {/* ✅ 标题栏 */}
          <div className="flex items-center px-1 pt-8 mb-4 relative z-20">
            <ChevronLeft
              className="w-5 h-5 mr-5 cursor-pointer hover:text-purple-600"
              onClick={() => setStep("form")}
            />
            <h1 className="text-black text-lg font-bold">Job details</h1>
          </div>

          {/* ✅ 内容区卡片段落 */}
          <div className="relative z-20 px-1 pb-12">
            <div className="p-[1px] space-y-[2.5px] text-sm text-black">

              {/* 顶部圆角卡片 */}
              <div className="bg-white/40 backdrop-blur px-3 py-4 rounded-t-2xl">
                <label className="font-semibold block text-sm mb-5">Category:</label>
                <p className="text-black font-medium">{formData.outsourcingType}</p>
              </div>

              {/* 中间卡片们 */}
              {[
                {
                  title: "Company's name",
                  content: formData.companyTitle,
                },
                {
                  title: "Company's Logo",
                  content: formData.companyTitle,
                },
                {
                  title: "Description",
                  content: formData.jobDescription,
                  multiline: true,
                },
              ].map((section) => (
                <div key={section.title} className="bg-white/40 backdrop-blur px-3 py-4">
                  <label className="font-semibold block text-sm mb-5">{section.title}:</label>
                  <p className={`text-black font-medium ${section.multiline ? "whitespace-pre-line" : ""}`}>
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Skills */}
              <div className="bg-white/40 backdrop-blur px-3 py-4">
                <label className="font-semibold block text-sm mb-4">Skills required:</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {skills.map((skill) => (
                    <span
                      key={skill.value}
                      className="px-3 py-1 rounded-full border border-gray-400 text-sm text-black"
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experiences */}
              <div className="bg-white/40 backdrop-blur px-3 py-4">
                <label className="font-semibold block text-sm  mb-5">Experiences:</label>
                <ul className="list-disc list-inside text-black mt-1">
                  {Object.entries(formData.experiences).map(([skill, exp]) => (
                    <li key={skill}>{`${exp} ${skill}`}</li>
                  ))}
                </ul>
              </div>

              {/* 底部圆角卡片 */}
              <div className="bg-white/40 backdrop-blur px-3 py-4 rounded-b-2xl">
                <label className="font-semibold block text-sm  mb-5">Contact information:</label>
                <div className="text-black mt-1 space-y-1">
                  <p>{formData.email}</p>
                  <p>{formData.phone}</p>
                  <p>{formData.website}</p>
                </div>
              </div>
              <div className="flex  justify-between gap-20 pt-4 px-5">
          <button
            className="bg-[#9C2BBF]  text-white px-6 py-2 rounded-lg font-normal"
            onClick={() => setStep("form")}
          >
            Back
          </button>
          <button className="bg-[#9C2BBF] text-white px-6 py-2 rounded-lg font-normal">
            Post this job
          </button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);



  return (
    <div className="min-h-screen bg-gradient-to-b from-[#282625] to-[#6E1F87] font-montserrat pb-20">
      {sharedHeader}
      {step === "form" ? formView : previewView}
    </div>
  );
}
