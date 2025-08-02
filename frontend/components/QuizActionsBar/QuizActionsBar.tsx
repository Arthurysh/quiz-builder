import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function QuizActionsBar() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="sticky top-0 z-10 mb-8 border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-800"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
}
