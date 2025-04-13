import React from 'react';
import Card from '@/components/ui/Card';
import { FaHtml5 } from 'react-icons/fa'; 

interface TestDetailsCardProps {
    onUpdateClick: () => void; // Function to call when Update is clicked
}


const TestDetailsCard: React.FC<TestDetailsCardProps> = ({ onUpdateClick }) => { 
    return (
    <Card className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <FaHtml5 className="text-orange-500 text-4xl" />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Hyper Text Markup Language</h3>
          <p className="text-sm text-gray-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>
      <button 
      className="bg-blue-900 text-white px-7 py-3 rounded-lg text-md font-medium hover:bg-blue-700"
      onClick={onUpdateClick} 
      >
        Update
      </button>
    </Card>
  );
};

export default TestDetailsCard;