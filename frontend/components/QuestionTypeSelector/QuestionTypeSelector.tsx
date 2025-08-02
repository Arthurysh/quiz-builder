import React from 'react';
import { Question } from '../../types/Question';

interface QuestionTypeSelectorProps {
  value: Question['type'];
  onChange: (type: Question['type']) => void;
}

export default function QuestionTypeSelector({ value, onChange }: QuestionTypeSelectorProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">Question Type</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value as Question['type'])}
        className="w-full rounded-md border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
      >
        <option value="boolean">True/False</option>
        <option value="input">Short Text</option>
        <option value="checkbox">Multiple Choice</option>
      </select>
    </div>
  );
}
