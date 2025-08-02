import React from 'react';
import { Question } from '../../types/Question';

interface InputQuestionProps {
  question: Question;
  onUpdate: (id: string, updates: Partial<Question>) => void;
}

export default function InputQuestion({ question, onUpdate }: InputQuestionProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">Correct Answer</label>
      <input
        type="text"
        value={(question.correctAnswer as string) || ''}
        onChange={e => onUpdate(question.id, { correctAnswer: e.target.value })}
        className="w-full rounded-md border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the correct answer..."
      />
    </div>
  );
}
