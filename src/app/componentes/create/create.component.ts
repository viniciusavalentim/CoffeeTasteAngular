import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  drinksForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.drinksForm = this.fb.group({
      name: ['', Validators.required],
      observacoes: ['', Validators.required],
      ingredientes: this.fb.array([])
    });
  };

  get ingredients(): FormArray{
    return this.drinksForm.get('ingredientes') as FormArray;
  };

  AddDrink(){
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
    }));
  };

  submit(){

  };
}
