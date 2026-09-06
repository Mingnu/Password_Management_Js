import { useState, useEffect } from 'react'
import Header from './components/Header/index.jsx'
import { SearchBar } from './components/search/SearchBar.jsx'
import PasswordCard from './components/passwords/index.jsx'
import { PasswordFormDialog } from './components/passwords/PasswordFormDialog.jsx'
import { Toaster, toast } from 'react-hot-toast'

function App() {
  const [passwords, setPasswords] = useState(() => {
    const saved = localStorage.getItem('passwords');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse passwords from local storage", e);
        return [];
      }
    }
    return [];
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingPassword, setEditingPassword] = useState(null);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const handleSavePassword = (data) => {
    if (editingPassword) {
      // Edit
      setPasswords(passwords.map(p => p.id === editingPassword.id ? { ...data, id: p.id } : p));
      toast.success('Đã cập nhật thông tin thành công!');
    } else {
      // Add
      setPasswords([...passwords, { ...data, id: Date.now().toString() }]);
      toast.success('Đã thêm tài khoản mới!');
    }
    setEditingPassword(null);
  };

  const handleDeletePassword = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mật khẩu này không?")) {
      setPasswords(passwords.filter(p => p.id !== id));
      toast.success('Đã xóa tài khoản thành công!');
    }
  };

  const handleOpenAddDialog = () => {
    setEditingPassword(null);
    setIsAddDialogOpen(true);
  };

  const handleEditPassword = (passwordData) => {
    setEditingPassword(passwordData);
    setIsAddDialogOpen(true);
  };

  const handleDialogChange = (isOpen) => {
    setIsAddDialogOpen(isOpen);
    if (!isOpen) {
      setEditingPassword(null);
    }
  };

  const filteredPasswords = passwords.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <Toaster position="top-center" reverseOrder={false} />
      <Header onAddClick={handleOpenAddDialog} />
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPasswords.length > 0 ? (
          filteredPasswords.map(p => (
            <PasswordCard 
              key={p.id}
              title={p.title}
              username={p.username}
              password={p.password}
              onEdit={() => handleEditPassword(p)}
              onDelete={() => handleDeletePassword(p.id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-8">Không có mật khẩu nào.</p>
        )}
      </div>

      <PasswordFormDialog 
        open={isAddDialogOpen} 
        onOpenChange={handleDialogChange} 
        onSave={handleSavePassword}
        initialData={editingPassword}
      />
    </div>
  )
}

export default App
