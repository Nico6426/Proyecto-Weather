import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  selected = '';
  
  @Input() lists?: Array<any> = [];
  @Input() form!: FormGroup;
  @Input() control!: string;
  @Output() selectedCountry = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(value: string) {
    this.selectedCountry.emit(value);
  }
}
