import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="mb-4 text-6xl font-bold text-gray-800 md:text-7xl">
              Quiz
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Builder
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 md:text-2xl">
              Create engaging quizzes, test knowledge, and share with the world. Build interactive
              learning experiences in minutes.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/quizzes"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View All Quizzes</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            <Link
              href="/create"
              className="rounded-full border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700"
            >
              Create New Quiz
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-3/4 -right-4 h-72 w-72 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
}
