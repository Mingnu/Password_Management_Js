import React from "react";
import { Search } from "lucide-react";

export const SearchBar = ({ value, onChange }) => {
    return (
        <div className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-8">
            <div className="relative flex items-center w-full h-14 rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                <div className="grid place-items-center h-full w-14 text-slate-500">
                    <Search className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <input
                    className="peer h-full w-full outline-none text-base text-slate-700 pr-4 bg-transparent placeholder:text-slate-400 font-medium"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Tìm kiếm trang web hoặc tên đăng nhập..." 
                />
            </div>
        </div>
    );
};
