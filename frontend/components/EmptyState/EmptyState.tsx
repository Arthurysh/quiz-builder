import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="rounded-lg bg-white p-12 text-center shadow-lg">
      <p className="mb-4 text-xl text-gray-600">{title}</p>
      <p className="mb-6 text-gray-500">{description}</p>
      <Link
        href={actionHref}
        className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
