import './App.css';
import {Route , Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
function App() {
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <div className="bg-gray-900 text-white"  >
      <div className={`backdrop-blur-xl border-2 border-gray-400 rounded-2xl overflow-hidden h-[100%]
      grid grid-cols-1 relative  ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':
        ' md:grid-cols'}`}
      >
         <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/login' element={<LoginPage/>}/>
         <Route path='/profile' element={<ProfilePage/>}/>
         </Routes>
      </div>
       </div>
  );
}
export default App;