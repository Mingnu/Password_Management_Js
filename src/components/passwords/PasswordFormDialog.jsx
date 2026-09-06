import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

export function PasswordFormDialog({ open, onOpenChange, onSave, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    if (open) {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({ title: '', username: '', password: '' });
      }
    }
  }, [open, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#e3e5e8] border-none p-8 rounded-3xl" showCloseButton={false}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold font-serif text-[#1e293b]">
              {initialData ? 'Chỉnh Sửa Thông Tin' : 'Thêm Tài Khoản Mới'}
            </DialogTitle>
            <DialogClose className="w-8 h-8 flex items-center justify-center rounded-lg bg-transparent text-slate-400 hover:bg-gray-200 transition-colors">
              <span className="sr-only">Close</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="currentColor" strokeWidth="1"></path></svg>
            </DialogClose>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="title">Tên Trang Web</label>
            <input 
              id="title"
              name="title"
              type="text" 
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Ví dụ: Facebook, Github..." 
              className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="username">Tên Đăng Nhập</label>
            <input 
              id="username"
              name="username"
              type="text" 
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="Email hoặc Username" 
              className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="password">Mật Khẩu</label>
            <input 
              id="password"
              name="password"
              type="text" 
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu" 
              className="w-full px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <button 
              type="button" 
              onClick={() => onOpenChange(false)}
              className="flex-1 py-3 px-4 bg-[#f8fafc] hover:bg-[#f1f5f9] text-black font-bold rounded-xl transition-colors shadow-sm text-sm"
            >
              Thoát
            </button>
            <button 
              type="submit" 
              className="flex-1 py-3 px-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-colors shadow-sm text-sm"
            >
              {initialData ? 'Lưu Thay Đổi' : 'Lưu Dữ Liệu'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
