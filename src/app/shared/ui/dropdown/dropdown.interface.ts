export interface DropdownProps {
  items: DropdownItem[];
  placement?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface DropdownItem {
  label: string;
  value: string | number;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
} 