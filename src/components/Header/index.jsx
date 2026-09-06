import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Header = ({ onAddClick }) => {
    return (
        <header className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-gray-900">
                    PassGuard
                </h1>
                <p className="text-gray-500 text-sm">
                    Lưu trữ mật khẩu an toàn trên trình duyệt
                </p>
            </div>

            <Button onClick={onAddClick} className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-6 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.8)] transition-all cursor-pointer">
                <Plus className="w-5 h-5 mr-1" />
                <span className="text-base">Thêm tài khoản</span>
            </Button>
        </header>
    );
};

export default Header;
