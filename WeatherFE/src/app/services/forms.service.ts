import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private fb: FormBuilder) { 
    
  }

// initializeFormGroup(): FormGroup {
//   return this.fb.group({
//     selectedCountry: ['', Validators.required],
//     city: [''],
//     history: [''],
    
//   })

  initializeFormGroup(): FormGroup {
    return this.fb.group({
      selectedCountry: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      history: this.fb.control('',),
      
    })

}



}
