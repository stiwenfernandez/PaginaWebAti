import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <fieldset className="border border-gray-200 rounded-lg p-6">
      <legend className="text-lg font-medium text-gray-900 px-2">{title}</legend>
      <div className="space-y-6">
        {children}
      </div>
    </fieldset>
  );
}