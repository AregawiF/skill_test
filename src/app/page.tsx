import Header from '@/components/layout/Header';
import Card from '@/components/ui/Card';
import TestDetailsCard from '@/components/features/TestDetailsCard';
import QuickStatsCard from '@/components/features/QuickStatsCard';
import SyllabusAnalysisCard from '@/components/features/SyllabusAnalysisCard';
import QuestionAnalysisCard from '@/components/features/QuestionAnalysisCard';

export default function SkillTestPage() {
  return (
    <div className="flex flex-col h-full bg-white p-0 m-0">
      <div className="p-6 flex-1">
        <h1 className="text-xl font-medium text-gray-800 mb-6">Skill Test</h1>
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 flex flex-col gap-6">
            <TestDetailsCard />
            <QuickStatsCard />
            <Card>Comparison Graph Content</Card>
          </div>


          {/* Right Column */}
          <div className="col-span-2 flex flex-col gap-6">
            <SyllabusAnalysisCard />
            <QuestionAnalysisCard /> 
          </div>
        </div>
      </div>
    </div>
  );
}
