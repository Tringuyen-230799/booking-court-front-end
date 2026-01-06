import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex mb-6 ${className}`.trim()}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {/* Breadcrumb Item */}
              {item.href && !item.isCurrentPage ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-primary text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={item.isCurrentPage ? "page" : undefined}
                  className={
                    item.isCurrentPage
                      ? "text-neutral-900 text-sm font-medium"
                      : "text-neutral-900 text-sm font-medium"
                  }
                >
                  {item.label}
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <span className="text-neutral-400 text-sm ml-2 mr-2">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// Utility function to create breadcrumb items easily
export const createBreadcrumbItems = (
  ...items: Array<{ label: string; href?: string }>
): BreadcrumbItem[] => {
  return items.map((item, index, array) => ({
    ...item,
    isCurrentPage: index === array.length - 1,
  }));
};
