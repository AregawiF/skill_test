// src/app/page.tsx
import Header from '@/components/layout/Header';
import Card from '@/components/ui/Card'; // Import Card
import TestDetailsCard from '@/components/features/TestDetailsCard';

export default function SkillTestPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Skill Test</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <TestDetailsCard /> {/* Use the new component */}
            <Card>Quick Statistics Content</Card>
            <Card>Comparison Graph Content</Card>
          </div>


          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>Syllabus Wise Analysis Content</Card>
            <Card>Question Analysis Content</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
