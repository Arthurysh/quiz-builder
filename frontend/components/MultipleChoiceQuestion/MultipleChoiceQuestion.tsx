import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Question } from '../../types/Question';

interface MultipleChoiceQuestionProps {
  question: Question;
  onUpdate: (id: string, updates: Partial<Question>) => void;
}

export default function MultipleChoiceQuestion({
  question,
  onUpdate,
}: MultipleChoiceQuestionProps) {
  const options = question.options || [];

  const addOption = () => {
    const newOptions = [...options, { text: '', isCorrect: false }];
    onUpdate(question.id, { options: newOptions });
  };

  const updateOption = (optionIndex: number, text: string) => {
    const newOptions = [...options];
    newOptions[optionIndex] = { ...newOptions[optionIndex], text };
    onUpdate(question.id, { options: newOptions });
  };

  const toggleOptionCorrect = (optionIndex: number) => {
    const newOptions = [...options];
    newOptions[optionIndex] = {
      ...newOptions[optionIndex],
      isCorrect: !newOptions[optionIndex].isCorrect,
    };
    onUpdate(question.id, { options: newOptions });
  };

  const removeOption = (optionIndex: number) => {
    const newOptions = options.filter((_, i) => i !== optionIndex);
    onUpdate(question.id, { options: newOptions });
  };

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">Options</label>

      {options.map((option, optionIndex) => (
        <div key={optionIndex} className="mb-4 rounded-md border border-gray-200 p-3">
          <div className="mb-2 flex gap-2">
            <input
              type="text"
              value={option.text}
              onChange={e => updateOption(optionIndex, e.target.value)}
              className="flex-1 rounded-md border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder={`Option ${optionIndex + 1}`}
            />
            <button
              type="button"
              onClick={() => removeOption(optionIndex)}
              className="p-2 text-red-500 transition-colors hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={option.isCorrect}
              onChange={() => toggleOptionCorrect(optionIndex)}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">Mark as correct answer</span>
          </label>
        </div>
      ))}

      <button
        type="button"
        onClick={addOption}
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        <Plus size={16} />
        Add Option
      </button>
    </div>
  );
}
