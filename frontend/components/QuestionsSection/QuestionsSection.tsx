import React from 'react';
import { Plus } from 'lucide-react';
import QuestionForm from '../QuestionForm/QuestionForm';
import { Question } from '../../types/Question';

interface QuestionsSectionProps {
  questions: Question[];
  onAddQuestion: () => void;
  onUpdateQuestion: (id: string, updates: Partial<Question>) => void;
  onRemoveQuestion: (id: string) => void;
}

export default function QuestionsSection({
  questions,
  onAddQuestion,
  onUpdateQuestion,
  onRemoveQuestion,
}: QuestionsSectionProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Questions</h2>
        <button
          type="button"
          onClick={onAddQuestion}
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Question
        </button>
      </div>

      {questions?.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          <p>No questions added yet. Click &quot;Add Question&quot; to get started.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {questions?.map((question, index) => (
            <QuestionForm
              key={question.id}
              question={question}
              index={index}
              onUpdate={onUpdateQuestion}
              onRemove={onRemoveQuestion}
            />
          ))}
        </div>
      )}
    </div>
  );
}
