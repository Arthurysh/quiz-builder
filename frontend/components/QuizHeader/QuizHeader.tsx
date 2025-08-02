import React from 'react';

interface QuizHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
}

export default function QuizHeader({ title, onTitleChange }: QuizHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Create New Quiz</h1>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">Quiz Title</label>
        <input
          type="text"
          value={title}
          onChange={e => onTitleChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="Enter quiz title..."
          required
        />
      </div>
    </div>
  );
}
