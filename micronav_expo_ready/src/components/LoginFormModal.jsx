import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function LoginFormModal() {
  const { showLoginForm, setShowLoginForm, loginType, loginWithEmail, loginError, theme, setLoginError } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!showLoginForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full" style={{ backgroundColor: theme.colors.card, color: theme.colors.text }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-xl">{loginType === 'admin' ? 'Admin Login' : 'User Login'}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => { setShowLoginForm(false); setLoginError(''); }}>✕</button>
        </div>
        {loginError && (<div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{loginError}</div>)}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" style={{ color: theme.colors.text }}>Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            style={{ borderColor: theme.colors.border, color: theme.colors.text, backgroundColor: theme.dark ? '#2d3748' : 'white' }} />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" style={{ color: theme.colors.text }}>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            style={{ borderColor: theme.colors.border, color: theme.colors.text, backgroundColor: theme.dark ? '#2d3748' : 'white' }} />
          <p className="text-xs text-gray-500">{loginType === 'admin' ? 'Demo: admin@micronav.com / admin123' : 'Demo: user@micronav.com / user123'}</p>
        </div>
        <button className="w-full py-2 px-4 rounded text-white font-bold" style={{ background: theme.colors.primary }}
          onClick={() => loginWithEmail(email, password, loginType)}>Login</button>
      </div>
    </div>
  );
}
