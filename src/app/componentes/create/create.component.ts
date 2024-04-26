import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  drinksForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private icedDrinksService: IceDrinksService) {}
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

  onSubmit(){
    console.log(this.drinksForm.value)
    this.icedDrinksService.CreateIcedDrinks(this.drinksForm.value).subscribe(data =>{
      console.log("foi");
    });
  };
}
