'use client';
import React from 'react';
import { FaRegFile } from 'react-icons/fa';

export default function InternshipPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <FaRegFile className="text-4xl text-blue-900" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Internship Portal Coming Soon</h1>
          <p className="text-lg text-gray-600">We're building an amazing internship experience for you.</p>
          <p className="text-gray-500 mt-2">Stay tuned for exciting opportunities!</p>
        </div>
      </div>
    </div>
  );
}
