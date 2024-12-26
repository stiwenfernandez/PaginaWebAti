import React from 'react';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
    >
      {children}
    </a>
  );
}