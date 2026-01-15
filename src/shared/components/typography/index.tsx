import { HTMLAttributes, ElementType } from 'react';
import { cn } from 'shared/utils/cn';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'heading' | 'body' | 'action';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs';
  color?: 'default' | 'primary' | 'primary-content' | 'muted' | 'inherit';
  as?: ElementType;
  children: React.ReactNode;
}

const getVariantStyles = (variant: 'heading' | 'body' | 'action') => {
  const styles = {
    heading: 'font-bold leading-tight tracking-tight font-display',
    body: 'leading-relaxed font-body',
    action: 'font-semibold leading-normal tracking-[0.015em] transition-colors cursor-pointer font-display'
  };
  return styles[variant];
};

const getSize = (variant: 'heading' | 'body' | 'action', size: 'sm' | 'md' | 'lg' | 'xl' |'xs') => {
  const sizes = {
    heading: {
      xs: 'text-xs leading-5 tracking-tight',        // 20px / 1.25rem
      sm: 'text-sm leading-6 tracking-tight',        // 24px / 1.5rem
      md: 'text-md leading-8 tracking-tight',        // 32px / 2rem  
      lg: 'text-xl leading-10 tracking-tight',       // 40px / 2.5rem
      xl: 'text-2xl leading-[3rem] tracking-tight'   // 48px / 3rem
    },
    body: {
      xs: 'text-[12px] leading-5',                        // 14px / 0.875rem
      sm: 'text-sm leading-6',                        // 14px / 0.875rem
      md: 'text-base leading-7',                      // 16px / 1rem
      lg: 'text-lg leading-8',                        // 18px / 1.125rem
      xl: 'text-lg leading-8'                         // fallback to lg
    },
    action: {
      xs: 'text-[12px] leading-4 tracking-wide font-normal',    // 12px / 0.75rem
      sm: 'text-xs leading-4 tracking-wide font-medium',    // 12px / 0.75rem
      md: 'text-sm leading-5 tracking-wide font-medium',    // 14px / 0.875rem
      lg: 'text-lg leading-6 tracking-wide font-semibold',  // 16px / 1rem
      xl: 'text-base leading-6 tracking-wide font-bold'   // fallback to lg
    }
  };
  return sizes[variant][size];
};

const getColorStyles = (color: 'default' | 'primary' | 'primary-content' | 'muted' | 'inherit') => {
  const colors = {
    default: 'text-gray-900',
    primary: 'text-primary',
    'primary-content': 'text-[#052e12]', // Using your --color-primary-content
    muted: 'text-gray-500',
    inherit: '' // No color class, inherits from parent
  };
  return colors[color];
};

const getDefaultElement = (variant: 'heading' | 'body' | 'action'): ElementType => {
  const elements: Record<string, ElementType> = {
    heading: 'h1',
    body: 'p',
    action: 'span'
  };
  return elements[variant];
};

export default function Typography({
  variant = 'body',
  size = 'md',
  color = 'default',
  as,
  children,
  className = '',
  ...props
}: TypographyProps) {
  const Component = (as || getDefaultElement(variant)) as ElementType;
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSize(variant, size);
  const colorStyles = getColorStyles(color);

  return (
    <Component
      className={cn(
        variantStyles,
        sizeStyles,
        colorStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Export individual variants for convenience
export const Heading = ({ children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="heading" {...props}>{children}</Typography>
);

export const Body = ({ children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props}>{children}</Typography>
);

export const Action = ({ children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="action" {...props}>{children}</Typography>
);