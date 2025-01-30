export interface ButtonProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant: 'solid' | 'outline' | 'ghost' | 'link';
  icon?: string;
  iconPosition: 'left' | 'right';
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  type: 'button' | 'submit' | 'reset';
} 