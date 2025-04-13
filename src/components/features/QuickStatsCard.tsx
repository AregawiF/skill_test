import React from 'react';
import Card from '@/components/ui/Card';
import StatItem from './StatItem';

interface QuickStatsCardProps {
  rank: string;
  percentile: string;
  score: string;
  totalQuestions: number;
}

const QuickStatsCard = () => {
const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  rank,
  percentile,
  score,
  totalQuestions
}) => {
  return (
    <Card>
      <h3 className="text-base font-semibold text-gray-700 mb-4">Quick Statistics</h3>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <StatItem
          iconSrc="/icons/trophy.svg"
          iconAlt="Rank icon"
         value="1"
         value={rank}
          label="Your Rank"
        />
        <StatItem
          iconSrc="/icons/percentile.svg"
          iconAlt="Percentile icon"
         value="30%"
         value={`${percentile}%`}
          label="Percentile"
        />
        <StatItem
          iconSrc="/icons/checkmark.svg"
          iconAlt="Correct answers icon"
         value="10 / 15"
         value={`${score} / ${totalQuestions}`}
          label="Correct Answers"
        />
      </div>
    </Card>
  );
};

export default QuickStatsCard;