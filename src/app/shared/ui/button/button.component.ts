import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() variant: 'solid' | 'outline' | 'ghost' | 'link' = 'solid';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  
  // Color schemes
  @Input() intent: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';

  // Events
  @Output() clicked = new EventEmitter<MouseEvent>();

  get computedClasses(): string {
    const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };

    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    };

    const intentClasses = {
      primary: this.getIntentClasses('blue'),
      secondary: this.getIntentClasses('gray'),
      success: this.getIntentClasses('green'),
      danger: this.getIntentClasses('red'),
      warning: this.getIntentClasses('yellow')
    };

    return [
      base,
      sizeClasses[this.size],
      roundedClasses[this.rounded],
      intentClasses[this.intent],
      this.fullWidth ? 'w-full' : '',
      this.loading ? 'cursor-wait' : ''
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
