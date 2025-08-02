import React from 'react';
import { Question } from '../../types/Question';
import BooleanQuestionDisplay from '../BooleanQuestionDisplay/BooleanQuestionDisplay';
import InputQuestionDisplay from '../InputQuestionDisplay/InputQuestionDisplay';
import MultipleChoiceQuestionDisplay from '../MultipleChoiceQuestionDisplay/MultipleChoiceQuestionDisplay';

interface QuestionDisplayProps {
  question: Question;
  index: number;
}

const getQuestionTypeLabel = (type: Question['type']) => {
  switch (type) {
    case 'boolean':
      return 'True/False';
    case 'input':
      return 'Text Input';
    case 'checkbox':
      return 'Multiple Choice';
    default:
      return 'Unknown';
  }
};

const getQuestionTypeColor = (type: Question['type']) => {
  switch (type) {
    case 'boolean':
      return 'bg-green-100 text-green-800';
    case 'input':
      return 'bg-blue-100 text-blue-800';
    case 'checkbox':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function QuestionDisplay({ question, index }: QuestionDisplayProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-800">Question {index + 1}</h3>
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${getQuestionTypeColor(question.type)}`}
        >
          {getQuestionTypeLabel(question.type)}
        </span>
      </div>

      <div className="mb-6">
        <p className="text-lg leading-relaxed text-gray-700">{question.text}</p>
      </div>

      <div className="border-t border-gray-100 pt-4">
        {question.type === 'boolean' && <BooleanQuestionDisplay question={question} />}

        {question.type === 'input' && <InputQuestionDisplay question={question} />}

        {question.type === 'checkbox' && <MultipleChoiceQuestionDisplay question={question} />}
      </div>
    </div>
  );
}
