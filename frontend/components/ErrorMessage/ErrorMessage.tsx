import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = 'Something went wrong',
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-4 text-red-500">
        <AlertCircle size={48} />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 max-w-md text-center text-gray-600">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
}
