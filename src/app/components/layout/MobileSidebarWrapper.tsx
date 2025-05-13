import React from 'react';
import { X } from 'lucide-react';

interface MobileSidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* 侧边栏 */}
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4"
          >
            <X size={24} />
          </button>
          
          {/* 侧边栏内容 */}
          <div className="mt-8">
            <nav className="space-y-4">
              <a href="/tasks" className="block py-2">Tasks</a>
              <a href="/outsource" className="block py-2">Outsource</a>
              <a href="/profile" className="block py-2">Profile</a>
              <a href="/settings" className="block py-2">Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar; 