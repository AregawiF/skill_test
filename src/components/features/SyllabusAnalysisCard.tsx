// src/components/features/skill-test/SyllabusAnalysisCard.tsx
import React from 'react';
import Card from '@/components/ui/Card';
import SyllabusTopicItem from './SyllabusTopicItem';

// Sample data - replace with actual data source later
const syllabusData = [
  { id: 1, name: "HTML Tools, Forms, History", percentage: 80 },
  { id: 2, name: "Tags & References in HTML", percentage: 60 },
  { id: 3, name: "Tables & References in HTML", percentage: 24 },
  { id: 4, name: "Tables & CSS Basics", percentage: 96 },
];

const SyllabusAnalysisCard = () => {
  return (
    <Card>
      <h3 className="text-base font-semibold text-gray-700 mb-4">
        Syllabus Wise Analysis
      </h3>
      <div className="space-y-4"> {/* Add vertical spacing between items */}
        {syllabusData.map((topic) => (
          <SyllabusTopicItem
            key={topic.id}
            name={topic.name}
            percentage={topic.percentage}
          />
        ))}
      </div>
    </Card>
  );
};

export default SyllabusAnalysisCard;