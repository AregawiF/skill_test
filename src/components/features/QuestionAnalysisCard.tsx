"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TbTargetArrow } from 'react-icons/tb';

const QuestionAnalysisCard = () => {
    const score = 10;
    const totalQuestions = 15;
    const percentage = Math.round((score / totalQuestions) * 100);

    const progressBarColor = '#3B82F6';
    const trailColor = '#E5E7EB';
    const iconColor = '#EF4444';

    return (
        <Card>
            <div className='flex justify-between'>

                <h3 className="text-base font-semibold text-black mb-2">
                    Question Analysis
                </h3>

                <p className="text-xl text-blue-600 font-bold ">
                    {score}
                    /{totalQuestions}
                </p>
            </div>
            <div className="mb-3">
                <p className="text-md text-gray-700 mt-1 ">
                    <span className='font-bold'> You scored {score} question{score !== 1 ? 's' : ''} correct out of {totalQuestions}. </span>
                    However it still needs some improvements
                </p>
            </div>

            <div className="relative w-36 h-36 mx-auto mt-4">
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={14} 
                    styles={buildStyles({
                        pathTransitionDuration: 0.5,
                        pathColor: progressBarColor,
                        textColor: '#000', 
                        trailColor: trailColor,
                        strokeLinecap: 'butt',
                        rotation: 0.6,
                    })}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <TbTargetArrow
                        className="text-4xl" 
                        style={{ color: iconColor }} 
                    />
                </div>
            </div>
        </Card>
    );
};

export default QuestionAnalysisCard;