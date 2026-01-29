import { IconType } from 'react-icons';
import { cn } from 'shared/utils/cn';

export interface IconProps {
  icon: IconType;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted' | 'inherit';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  onClick?: () => void;
}

const iconVariants = {
  default: 'text-gray-600',
  primary: 'text-primary',
  secondary: 'text-gray-500',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
  muted: 'text-gray-400',
  inherit: '', // No color class, inherits from parent
};

const iconSizes = {
  xs: 'w-3 h-3 text-xs',
  sm: 'w-4 h-4 text-sm',
  md: 'w-5 h-5 text-base',
  lg: 'w-6 h-6 text-lg',
  xl: 'w-8 h-8 text-xl',
  '2xl': 'w-10 h-10 text-2xl',
};

export default function Icon({
  icon: IconComponent,
  variant = 'inherit',
  size = 'md',
  className,
  onClick,
}: IconProps) {
  const baseClasses = 'inline-block';
  const variantClasses = iconVariants[variant];
  const sizeClasses = iconSizes[size];
  const interactiveClasses = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '';

  return (
    <IconComponent
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        interactiveClasses,
        className
      )}
      onClick={onClick}
    />
  );
}