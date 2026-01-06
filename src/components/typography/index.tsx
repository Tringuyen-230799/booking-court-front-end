import { HTMLAttributes, ElementType } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'heading' | 'body' | 'action';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: ElementType;
  children: React.ReactNode;
}

const getVariantStyles = (variant: 'heading' | 'body' | 'action') => {
  const styles = {
    heading: 'font-bold leading-tight tracking-tight text-gray-900 dark:text-white font-display',
    body: 'leading-relaxed text-gray-700 dark:text-gray-300 font-body',
    action: 'font-semibold leading-normal tracking-[0.015em] text-primary hover:text-primary/80 transition-colors cursor-pointer font-display'
  };
  return styles[variant];
};

const getSize = (variant: 'heading' | 'body' | 'action', size: 'sm' | 'md' | 'lg' | 'xl') => {
  const sizes = {
    heading: {
      sm: 'text-heading-sm',   // 24px
      md: 'text-heading-md',   // 32px
      lg: 'text-heading-lg',   // 40px
      xl: 'text-heading-xl'    // 48px
    },
    body: {
      sm: 'text-body-sm',      // 14px
      md: 'text-body-md',      // 16px
      lg: 'text-body-lg',      // 18px
      xl: 'text-body-lg'       // fallback to lg since xl doesn't exist
    },
    action: {
      sm: 'text-action-sm',    // 12px
      md: 'text-action-md',    // 14px
      lg: 'text-action-lg',    // 16px
      xl: 'text-action-lg'     // fallback to lg since xl doesn't exist
    }
  };
  return sizes[variant][size];
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
  as,
  children,
  className = '',
  ...props
}: TypographyProps) {
  const Component = (as || getDefaultElement(variant)) as ElementType;
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSize(variant, size);

  return (
    <Component
      className={`${variantStyles} ${sizeStyles} ${className}`.trim()}
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