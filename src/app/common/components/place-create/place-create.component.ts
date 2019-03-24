import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.css']
})
export class PlaceCreateComponent implements OnInit {

  placeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    city: ['', Validators.required],
    lat: ['', Validators.pattern(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/)],
    long: ['', Validators.pattern(/^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}$/)]
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.placeForm.value);
  }
}
