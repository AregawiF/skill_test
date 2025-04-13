import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-white shadow-sm p-6 flex justify-between items-center">
            {/* We'll add user info later */}
            <div className='flex items-center'>
                {/* Whatbytes logo */}
                <Image
                    src="/whatbytes_logo.jpg"
                    alt="Whatbytes logo"
                    width={40}
                    height={38}
                />
                <div className='text-3xl font-bold'>WhatBytes</div>

            </div>
            <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg px-2 py-1">
                <Image
                    src="/profile.jpg"
                    alt="User Avatar"
                    width={30}
                    height={25}
                    className="rounded-full"
                />
                <span className="text-md font-bold">Rahil Siddique</span>
            </div>
        </header>
    );
};

export default Header;