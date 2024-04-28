import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { IngredientsIceDrinks } from 'src/app/models/IngredientsIcedDrinks';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() Submit = new EventEmitter<IceDrinks>();
  @Input() btnAction!:string;
  @Input() btnTitle!:string;
  @Input() update!: IceDrinks;



  drinksForm!: FormGroup;
  icedDrinksIngredients!: any;



  constructor(private fb: FormBuilder, private router: Router, private icedDrinksService: IceDrinksService) {}
  ngOnInit(): void {
    this.drinksForm = this.fb.group({
      name: [this.update ? this.update.name : '', Validators.required],
      observacoes: [this.update ? this.update.observacoes : '', Validators.required],
      ingredientes: this.fb.array([])
    });

    console.log(this.update);
    const ingredientsIcedDrinks = this.update.ingredientes;
    this.icedDrinksIngredients = ingredientsIcedDrinks;
  };

  initializeForm(): void {
    this.drinksForm = this.fb.group({
      name: ['', Validators.required],
      observacoes: ['', Validators.required],
      ingredientes: this.fb.array([])
    });
  }

  populateFormWithUpdateData(): void {
    this.drinksForm.patchValue({
      name: this.update.name,
      observacoes: this.update.observacoes
    });

    // Limpe os ingredientes antes de adicionar os ingredientes do update
    while (this.ingredients.length !== 0) {
      this.ingredients.removeAt(0);
    }

    // Adicione cada ingrediente do update ao formulário
    this.update.ingredientes.forEach(ingrediente => {
      this.ingredients.push(this.fb.group({
        name: ingrediente.name,
        quantity: ingrediente.quantity,
        unit: ingrediente.unit
      }));
    });
  }


  get ingredients(): FormArray{
    return this.drinksForm.get('ingredientes') as FormArray;
  };

  AddDrink(){
    this.ingredients.push(this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      quantity: [ '', Validators.required],
      unit: ['', Validators.required],
    }));
  };

  onSubmit(){
    this.Submit.emit(this.drinksForm.value);
  };
}


/*

*/
