import React from 'react';

interface QuizActionsProps {
  isSubmitting: boolean;
  canSubmit: boolean | '';
  onSubmit: () => void;
}

export default function QuizActions({ isSubmitting, canSubmit, onSubmit }: QuizActionsProps) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        onClick={onSubmit}
        disabled={isSubmitting || !canSubmit}
        className="rounded-md bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:bg-gray-400"
      >
        {isSubmitting ? 'Creating Quiz...' : 'Create Quiz'}
      </button>
    </div>
  );
}
