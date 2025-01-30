import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ButtonProps } from './button.interface';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements Partial<ButtonProps> {
  @Input() size: ButtonProps['size'] = 'md';
  @Input() variant: ButtonProps['variant'] = 'solid';
  @Input() icon?: ButtonProps['icon'];
  @Input() iconPosition: ButtonProps['iconPosition'] = 'left';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() type: ButtonProps['type'] = 'button';
  
  // Color schemes
  @Input() intent: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';

  // Events
  @Output() clicked = new EventEmitter<MouseEvent>();

  get computedClasses(): string {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200';
    
    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };

    // New minimal style variants
    const variants = {
      solid: 'bg-white bg-opacity-100 hover:bg-opacity-80 text-gray-800',
      outline: 'border border-white border-opacity-80 hover:bg-white hover:bg-opacity-10 text-white',
      ghost: 'hover:bg-white hover:bg-opacity-10 text-white',
      link: 'text-white hover:underline'
    };

    return [
      base,
      sizeClasses[this.size],
      variants[this.variant],
      'rounded shadow-lg',
      this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      this.loading ? 'cursor-wait' : '',
      this.fullWidth ? 'w-full' : ''
    ].filter(Boolean).join(' ');
  }

  private getIntentClasses(color: string): string {
    const variants = {
      solid: `bg-${color}-500 hover:bg-${color}-600 text-white`,
      outline: `border-2 border-${color}-500 text-${color}-500 hover:bg-${color}-50`,
      ghost: `text-${color}-500 hover:bg-${color}-50`,
      link: `text-${color}-500 hover:underline`
    };
    return variants[this.variant];
  }

  handleClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
