 import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { DropdownProps, DropdownItem } from './dropdown.interface';

@Component({
  standalone: true,
  selector: 'app-dropdown',
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements Partial<DropdownProps> {
  @Input() items: DropdownItem[] = [];
  @Input() placement: DropdownProps['placement'] = 'bottom';
  @Input() size: DropdownProps['size'] = 'md';
  @Input() variant: DropdownProps['variant'] = 'solid';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() selected = new EventEmitter<DropdownItem>();

  isOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.isOpen = false;
    }
  }

  get buttonClasses(): string {
    const base = 'inline-flex items-center justify-between font-semibold transition-all duration-200';
    
    const sizeClasses = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };

    const variants = {
      solid: 'bg-white bg-opacity-100 hover:bg-opacity-80 text-gray-800',
      outline: 'border border-white border-opacity-80 hover:bg-white hover:bg-opacity-10 text-white',
      ghost: 'hover:bg-white hover:bg-opacity-10 text-white',
      link: 'text-white hover:underline'
    };

    return [
      base,
      sizeClasses[this.size as keyof typeof sizeClasses],
      variants[this.variant as keyof typeof variants],
      'rounded shadow-lg w-full',
      this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ].filter(Boolean).join(' ');
  }

  get menuClasses(): string {
    const placementClasses = {
      top: 'bottom-full mb-1',
      bottom: 'top-full mt-1',
      left: 'right-full mr-1',
      right: 'left-full ml-1'
    };

    return [
      'absolute z-50 min-w-[200px] py-1',
      'bg-white rounded shadow-lg',
      'transform transition-all duration-200',
      placementClasses[this.placement as keyof typeof placementClasses]
    ].join(' ');
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectItem(item: DropdownItem): void {
    if (!item.disabled) {
      this.selected.emit(item);
      this.isOpen = false;
    }
  }
}