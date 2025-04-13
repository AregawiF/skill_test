import React from 'react';
import Card from '@/components/ui/Card';
import { FaHtml5 } from 'react-icons/fa';

interface TestDetailsCardProps {
  onUpdateClick: () => void;
  questionCount: number;
  duration: number;
  submissionDate: string;
}

const TestDetailsCard: React.FC<TestDetailsCardProps> = ({ 
  onUpdateClick,
  questionCount,
  duration,
  submissionDate
}) => {
  return (
    <Card className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <FaHtml5 className="text-orange-500 text-4xl" />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Hyper Text Markup Language</h3>
          <p className="text-sm text-gray-500">
            Questions: {String(questionCount).padStart(2, '0')} | Duration: {duration} mins | Submitted on {submissionDate}
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