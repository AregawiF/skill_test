'use client';
import { useState } from 'react';
import TestDetailsCard from '@/components/features/TestDetailsCard';
import QuickStatsCard from '@/components/features/QuickStatsCard';
import SyllabusAnalysisCard from '@/components/features/SyllabusAnalysisCard';
import QuestionAnalysisCard from '@/components/features/QuestionAnalysisCard';
import ComparisonGraphCard from '@/components/features/ComparisonGraphCard';
import UpdateScoresModal from '@/components/features/UpdateScoresModal';

interface TestData {
  rank: string;
  percentile: string;
  score: string;
  totalQuestions: number;
  submissionDate: string;
  duration: number;
  questionCount: number;
}

export default function SkillTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testData, setTestData] = useState<TestData>({
    rank: '1',
    percentile: '30',
    score: '10',
    totalQuestions: 15,
    submissionDate: '5 June 2021',
    duration: 15,
    questionCount: 8
  });

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleScoreUpdate = (newScores: { rank: string; percentile: string; score: string }) => {
    setTestData(prev => ({
      ...prev,
      ...newScores
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col bg-white p-0 m-0">
      <div className="p-6 flex-1">
        <h1 className="text-xl font-medium text-gray-800 mb-6">Skill Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 flex flex-col gap-6 order-1">
            <TestDetailsCard 
              onUpdateClick={handleUpdateClick}
              questionCount={testData.questionCount}
              duration={testData.duration}
              submissionDate={testData.submissionDate}
            />
            <QuickStatsCard 
              rank={testData.rank}
              percentile={testData.percentile}
              score={testData.score}
              totalQuestions={testData.totalQuestions}
            />
            <ComparisonGraphCard 
              score={parseInt(testData.score, 10)}
              totalQuestions={testData.totalQuestions}
              percentile={parseInt(testData.percentile)}
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-6 order-2 md:order-1">
            <SyllabusAnalysisCard />
            <QuestionAnalysisCard 
              score={parseInt(testData.score, 10)}
              totalQuestions={testData.totalQuestions}
            />
          </div>
        </div>
      </div>

      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleScoreUpdate}
        initialData={{
          rank: testData.rank,
          percentile: testData.percentile,
          score: testData.score
        }}
      />
    </div>
  );
}
