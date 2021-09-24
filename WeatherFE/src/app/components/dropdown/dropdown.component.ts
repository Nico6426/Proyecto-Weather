import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Countries } from 'src/app/shared/interfaces/countries';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  selected = '';
  
  @Input() lists?: Array<Countries> = [];
  @Input() form!: FormGroup;
  @Input() control!: string;
  @Output() selectedCountry = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(value: Countries) {
    this.selectedCountry.emit(value);
  }
}
