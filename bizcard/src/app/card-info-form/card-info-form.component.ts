import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-info-form',
  templateUrl: './card-info-form.component.html',
  styleUrls: ['./card-info-form.component.css']
})
export class CardInfoFormComponent implements OnInit {
  cardInfo = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }


}
