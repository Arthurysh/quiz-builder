import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex gap-4">
            <Link
              href="/quizzes"
              className={`rounded-md px-4 py-2 font-medium text-gray-600 transition-colors hover:text-gray-800`}
            >
              Quiz List
            </Link>
            <Link
              href="/create"
              className={`rounded-md px-4 py-2 font-medium text-gray-600 transition-colors hover:text-gray-800`}
            >
              Create Quiz
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
