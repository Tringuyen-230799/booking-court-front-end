import React from 'react';
import { cn } from 'shared/utils/cn';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  color?: 'default' | 'primary' | 'muted' | 'light';
  thickness?: 'thin' | 'medium' | 'thick';
  className?: string;
  children?: React.ReactNode;
}

const orientationStyles = {
  horizontal: 'w-full h-px',
  vertical: 'h-full w-px',
};

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const colorStyles = {
  default: 'border-gray-300',
  primary: 'border-primary',
  muted: 'border-gray-200',
  light: 'border-gray-100',
};

const thicknessStyles = {
  horizontal: {
    thin: 'border-t',
    medium: 'border-t-2',
    thick: 'border-t-4',
  },
  vertical: {
    thin: 'border-l',
    medium: 'border-l-2', 
    thick: 'border-l-4',
  },
};

export default function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'default',
  thickness = 'thin',
  className,
  children,
}: DividerProps) {
  if (children) {
    // Divider with content (text/label)
    const isHorizontal = orientation === 'horizontal';
    
    return (
      <div
        className={cn(
          'relative flex items-center',
          isHorizontal ? 'w-full' : 'h-full flex-col',
          className
        )}
      >
        <div
          className={cn(
            'flex-1',
            orientationStyles[orientation],
            variantStyles[variant],
            colorStyles[color],
            thicknessStyles[orientation][thickness]
          )}
        />
        <div
          className={cn(
            'bg-white flex items-center justify-center',
            isHorizontal ? 'px-3' : 'py-3'
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            'flex-1',
            orientationStyles[orientation],
            variantStyles[variant],
            colorStyles[color],
            thicknessStyles[orientation][thickness]
          )}
        />
      </div>
    );
  }

  // Simple divider without content
  return (
    <hr
      className={cn(
        'border-0',
        orientationStyles[orientation],
        variantStyles[variant],
        colorStyles[color],
        thicknessStyles[orientation][thickness],
        className
      )}
    />
  );
}