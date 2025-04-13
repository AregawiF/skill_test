import React from 'react';
import Image from 'next/image'; // Import next/image

interface StatItemProps {
  iconSrc: string;   // Changed from: icon: React.ReactElement
  iconAlt: string;   // Added for accessibility
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ iconSrc, iconAlt, value, label }) => {
  return (
    <div className="flex items-center gap-3 p-3">
      {/* Replaced icon rendering with next/image */}
      <div className="flex-shrink-0"> {/* Added a wrapper to prevent shrinking if needed */}
        <Image
          src={iconSrc}    // Use the image source prop
          alt={iconAlt}    // Use the alt text prop
          width={36}       // Specify width (adjust as needed) - required by next/image
          height={36}      // Specify height (adjust as needed) - required by next/image
          className="object-contain" // Optional: Adjust how image fits if dimensions mismatch
        />
      </div>
      <div>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
};

export default StatItem;