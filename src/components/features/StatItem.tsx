import React from 'react';
import Image from 'next/image';

interface StatItemProps {
  iconSrc: string;
  iconAlt: string;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ iconSrc, iconAlt, value, label }) => {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="flex-shrink-0">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={36}
          height={36}
          className="object-contain"
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