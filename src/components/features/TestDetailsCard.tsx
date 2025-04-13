import React from 'react';
import Card from '@/components/ui/Card';
import { FaHtml5 } from 'react-icons/fa'; // Example icon

const TestDetailsCard = () => {
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
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
        Update
      </button>
    </Card>
  );
};

export default TestDetailsCard;