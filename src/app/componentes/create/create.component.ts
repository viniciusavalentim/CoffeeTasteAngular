import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppearanceAnimation, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { IceDrinks } from 'src/app/models/IceDrinks';
import { IngredientsIceDrinks } from 'src/app/models/IngredientsIcedDrinks';
import { HotDrinksService } from 'src/app/services/HotDrinksService/hot-drinks.service';
import { IceDrinksService } from 'src/app/services/IcedDrinksService/Ice-drinks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() SubmitCreate = new EventEmitter<IceDrinks>();
  @Output() SubmitEdit = new EventEmitter<IceDrinks>();

  @Input() btnAction!:string;
  @Input() btnTitle!:string;
  @Input() Category!:string;
  @Input() update!: any;

  drinksForm!: FormGroup;


  constructor(private fb: FormBuilder, 
              private router: Router, 
              private icedDrinksService: IceDrinksService,
              private hotDrinksService: HotDrinksService
              ) {}

  ngOnInit(): void {
    this.drinksForm = this.fb.group({
      id: [this.update ? this.update.id : 0],
      name: [this.update ? this.update.name : '', Validators.required],
      observacoes: [this.update ? this.update.observacoes : '', Validators.required],
      ingredientes: this.fb.array([])
    });

    if (this.update && this.update.ingredientes) {
      this.update.ingredientes.forEach((ingrediente: any) => {
        this.AddDrink(ingrediente);
      });
    }
  };


  get ingredients(): FormArray{
    return this.drinksForm.get('ingredientes') as FormArray;
  };
  AddDrink(ingrediente?: any) {
    const group = this.fb.group({
      id: [ingrediente ? ingrediente.id : 0, Validators.required],
      name: [ingrediente ? ingrediente.name : '', Validators.required],
      quantity: [ingrediente ? ingrediente.quantity : '', Validators.required],
      unit: [ingrediente ? ingrediente.unit : '', Validators.required],
    });
  
    this.ingredients.push(group);
  };


  removeIngredient(index: number) {
    const removedItem = this.ingredients.at(index);

    const newConfirmBox = new ConfirmBoxInitializer();

        newConfirmBox.setTitle('Confirm Delete!!');
        newConfirmBox.setMessage('Você tem certeza que deseja excluir esse ingrediente?');

        // Choose layout color type
        newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.DANGER, 
        animationIn: AppearanceAnimation.SLIDE_IN_UP, 
        animationOut: DisappearanceAnimation.BOUNCE_OUT,
        buttonPosition: 'center',
        });

        newConfirmBox.setButtonLabels('SIM', 'NÃO');

        // Simply open the popup and observe button click
        newConfirmBox.openConfirmBox$().subscribe(resp => {
          if(resp.clickedButtonID == 'sim'){
            if (removedItem && removedItem.get('id')) {
              const itemId = Number(removedItem.get('id')!.value);
              console.log(itemId);
              if(this.Category == "icedDrink"){
                this.icedDrinksService.DeleteIngredientIcedDrink(itemId).subscribe(data=>{
                  console.log(data);
                });
              } else if(this.Category == "hotDrinks"){
                this.hotDrinksService.DeleteIngredientHotDrink(itemId).subscribe(data=>{
                  console.log(data);
                });
              }
              else if(this.Category == "teas"){
                this.hotDrinksService.DeleteIngredientHotDrink(itemId).subscribe(data=>{
                  console.log(data);
                });
              }
            }
            this.ingredients.removeAt(index);
          }
          else{
            console.log("nao foi")
          }
        });

  }

  onSubmit(){

    if(this.update == null)
    {
      this.SubmitCreate.emit(this.drinksForm.value);
    }
    else{
      this.SubmitEdit.emit(this.drinksForm.value);
    }

  };
}
