import React from 'react';
import Card from '@/components/ui/Card';
import SyllabusTopicItem from './SyllabusTopicItem';

const syllabusData = [
  { id: 1, name: "HTML Tools, Forms, History", percentage: 80 },
  { id: 2, name: "Tags & References in HTML", percentage: 60 },
  { id: 3, name: "Tables & References in HTML", percentage: 24 },
  { id: 4, name: "Tables & CSS Basics", percentage: 96 },
];

const SyllabusAnalysisCard = () => {

  return (
    <Card>
      <h3 className="text-lg font-bold  mb-4">
        Syllabus Wise Analysis
      </h3>
      <div className="space-y-4">
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