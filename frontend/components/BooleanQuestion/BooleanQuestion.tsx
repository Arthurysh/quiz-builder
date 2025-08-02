import React from 'react';
import { Question } from '../../types/Question';

interface BooleanQuestionProps {
  question: Question;
  onUpdate: (id: string, updates: Partial<Question>) => void;
}

export default function BooleanQuestion({ question, onUpdate }: BooleanQuestionProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">Correct Answer</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name={`correct-${question.id}`}
            checked={question.correctAnswer === true}
            onChange={() => onUpdate(question.id, { correctAnswer: true })}
            className="mr-2"
          />
          True
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name={`correct-${question.id}`}
            checked={question.correctAnswer === false}
            onChange={() => onUpdate(question.id, { correctAnswer: false })}
            className="mr-2"
          />
          False
        </label>
      </div>
    </div>
  );
}
