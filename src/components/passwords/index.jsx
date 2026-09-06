import React, { useState } from 'react';
import { Pencil, Trash2, Eye, Copy, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function PasswordCard({ 
  title = "facebook", 
  username = "admin", 
  password = "password123",
  onEdit,
  onDelete
}) {
  const [showPassword, setShowPassword] = useState(false);
  
  // Create a display string of dots if not showing password
  const displayPassword = showPassword ? password : '••••••••';

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast.success('Đã sao chép mật khẩu!');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-50 w-full">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">{title}</h3>
          <p className="text-slate-500 text-base mt-1">{username}</p>
        </div>
        <div className="flex items-center gap-4 pt-1">
          <button onClick={onEdit} className="text-slate-700 hover:text-black transition-colors cursor-pointer">
            <Pencil strokeWidth={2.5} className="w-5 h-5" />
          </button>
          <button onClick={onDelete} className="text-slate-700 hover:text-black transition-colors cursor-pointer">
            <Trash2 strokeWidth={2.5} className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-[#f8f9fa] rounded-2xl p-4 sm:px-5 flex justify-between items-center">
        <div className={`flex-1 text-gray-900 truncate font-medium ${!showPassword ? 'text-3xl tracking-[0.2em] leading-none pt-2' : 'text-lg'}`}>
          {displayPassword}
        </div>
        <div className="flex items-center gap-4 ml-4">
          <button 
            className="text-slate-700 hover:text-black transition-colors cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff strokeWidth={2.5} className="w-5 h-5" /> : <Eye strokeWidth={2.5} className="w-5 h-5" />}
          </button>
          <button 
            className="text-slate-700 hover:text-black transition-colors cursor-pointer"
            title="Copy password"
            onClick={handleCopy}
          >
            <Copy strokeWidth={2.5} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
