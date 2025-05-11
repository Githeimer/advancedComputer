"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const AdminLoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // important! otherwise next-auth will try to reload
    });

    if (res?.error) {
      if(res.error === 'CredentialsSignin') {
        setError('Invalid email or password. Please try again.');
      }
      else{
        setError( 'Login failed. Try again.');
      }
     
      setLoading(false);
    } else {
      // successful login
      router.push('/admin'); // you can customize this route
    }
  };

  return (
    <div className="flex w-full h-full flex-col justify-center items-center montserrat">
      <div className="px-10 w-full md:w-[40%] flex flex-col gap-11 shadow-gray-300 p-5 rounded-lg items-center justify-center shadow-lg border-gray-300">
        <div>
          <Image src="/logo_adv.png" width={200} height={200} className="h-14 w-auto" alt="Advance Logo" />
        </div>
        <div className="font-medium text-2xl roboto">ADMIN LOGIN</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full md:px-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-md">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-sm p-2 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-md">Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-sm p-2 focus:outline-none"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[var(--adv-logo-color)] p-3 rounded-sm text-white hover:bg-[var(--fill-color)] transition-all duration-300 w-full"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </div>
          <div className="text-center">
            Forgot your password? <button type="button" className="text-red-700 cursor-pointer">Reset here</button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
