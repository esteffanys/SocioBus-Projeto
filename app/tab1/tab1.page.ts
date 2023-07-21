import { Component, OnInit } from '@angular/core';
import {FormArray ,FormBuilder,
  FormGroup} from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
  products: FormArray = new FormArray([
    new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  ]);

  addProduct() {
    this.products.push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    }));

  constructor() {
   
  }
}}
