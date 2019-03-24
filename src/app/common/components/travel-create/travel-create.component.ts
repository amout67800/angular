import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { COUNTRIES } from '../../../mocks/mock-countries'

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent implements OnInit {

  countries = COUNTRIES;

  travelForm = this.fb.group({
    country: ['', Validators.required],
    name: ['', Validators.required],
    description: [''],
    daysNumber: ['', [
      Validators.pattern('^[0-9]*$'), 
      Validators.required]
    ],
    nightsNumber: ['', [
      Validators.pattern('^[0-9]*$'), 
      Validators.required]
    ],
    maxPlaces: null
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.travelForm.value);
  }
}
