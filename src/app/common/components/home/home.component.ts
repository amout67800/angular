import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  advices = [
    { id: 1,  label: 'What souhld you put in your backpack ?' },
    { id: 2,  label: 'Travel pharmacy' },
    { id: 3,  label: 'Procedures before depature' },
    { id: 4,  label: 'How to organize a long trip ?' },
    { id: 5,  label: 'Travel accessories' },
    { id: 6,  label: 'Children check list' },
    { id: 7,  label: 'How to prepare your backpack' },
    { id: 8,  label: 'Traveling with baby/children' },
    { id: 9,  label: 'The best backpacks' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
