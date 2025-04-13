import React from 'react';
import Card from '@/components/ui/Card';
import ComparisonChart from './ComparisonChart';
import Image from 'next/image';

const ComparisonGraphCard = () => {
    const userPercentile = 30;
    const averagePercentile = 72;

    return (
        <Card>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold ">
                    Comparison Graph
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                    <Image
                        src="/icons/chart.svg"
                        alt="chart_icon"
                        width={34}
                        height={34}
                        className="text-gray-500"
                    />

                </button>
            </div>

            <p className="text-md text-gray-700 mb-4">
                <span className="font-bold">You scored {userPercentile}% percentile</span> which is lower than the
                <br />
                average percentile {averagePercentile}% of all the engineers who took this assessment
            </p>

            <ComparisonChart userPercentile={userPercentile} />

        </Card>
    );
};

export default ComparisonGraphCard;