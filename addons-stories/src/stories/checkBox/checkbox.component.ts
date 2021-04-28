import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-checkbox',
  template: `
  <div class="form-check" >
  <input  type="checkbox"  [disabled]="isdisabled" [ngClass]="classes" value="" disabled>
  <label>
  {{ label }}
  </label>
  </div>
  `,
  styleUrls: ['./checkbox.css'],
})
export default class CheckboxComponent {
    @Input() label = 'Checkbox';
    @Input() isdisabled = true;
  
      
}

