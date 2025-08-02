import React from 'react';
import { X } from 'lucide-react';
import QuestionTypeSelector from '../QuestionTypeSelector/QuestionTypeSelector';
import BooleanQuestion from '../BooleanQuestion/BooleanQuestion';
import InputQuestion from '../InputQuestion/InputQuestion';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion/MultipleChoiceQuestion';
import { Question } from '../../types/Question';

interface QuestionFormProps {
  question: Question;
  index: number;
  onUpdate: (id: string, updates: Partial<Question>) => void;
  onRemove: (id: string) => void;
}

export default function QuestionForm({ question, index, onUpdate, onRemove }: QuestionFormProps) {
  const handleQuestionTextChange = (text: string) => {
    onUpdate(question.id, { text });
  };

  const handleTypeChange = (type: Question['type']) => {
    const updates: Partial<Question> = { type };

    if (type === 'boolean') {
      updates.correctAnswer = true;
      updates.options = undefined;
    } else if (type === 'input') {
      updates.correctAnswer = '';
      updates.options = undefined;
    } else if (type === 'checkbox') {
      updates.options = [{ text: '', isCorrect: false }];
      updates.correctAnswer = undefined;
    }

    onUpdate(question.id, updates);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Question {index + 1}</h3>
        <button
          type="button"
          onClick={() => onRemove(question.id)}
          className="text-red-500 transition-colors hover:text-red-700"
        >
          <X size={20} />
        </button>
      </div>

      <QuestionTypeSelector value={question.type} onChange={handleTypeChange} />

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">Question Text</label>
        <textarea
          value={question.text}
          onChange={e => handleQuestionTextChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Enter your question..."
        />
      </div>

      {question.type === 'boolean' && <BooleanQuestion question={question} onUpdate={onUpdate} />}

      {question.type === 'input' && <InputQuestion question={question} onUpdate={onUpdate} />}

      {question.type === 'checkbox' && (
        <MultipleChoiceQuestion question={question} onUpdate={onUpdate} />
      )}
    </div>
  );
}
