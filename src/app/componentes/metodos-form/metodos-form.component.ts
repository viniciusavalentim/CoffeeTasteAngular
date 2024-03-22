import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Coffees } from 'src/app/models/Coffees';
import { Methods } from 'src/app/models/Methods';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-metodos-form',
  templateUrl: './metodos-form.component.html',
  styleUrls: ['./metodos-form.component.css']
})
export class MetodosFormComponent  implements OnInit{
  
  
  @Output() onSubmit = new EventEmitter<Methods>();

  metodoForm!: FormGroup;

  constructor(private fb: FormBuilder, private metodosService: MethodsService, private router: Router) {
  }

  ngOnInit() {
    this.metodoForm = this.fb.group({
      metodos: ['', Validators.required],
      cafes: this.fb.array([])
    });
  }

  get cafes(): FormArray{
    return this.metodoForm.get('cafes') as FormArray;
  }

  addCafe(){
    this.cafes.push(this.fb.group({
      variacao: ['', Validators.required],
      receita: this.fb.group({
        quantidadeDeCafe: ['', Validators.required],
        quantidadeDeAgua: ['', Validators.required],
        temperatura: ['', Validators.required],
        granulometria: ['', Validators.required]
      })
    }))
  }
  removeCafe(index: number) {
    this.cafes.removeAt(index);
  }
  
  submit(): void {
    console.log("Opa, chegou mais antes ainda")
    if(this.metodoForm.valid){
      const metodoData = this.metodoForm.value;

      console.log("opa, chegou antes!")
      console.log(metodoData)
      this.metodosService.CreateMethods(metodoData).subscribe((data) =>{
        console.log("chegou?")
        console.log(data);
        this.router.navigate(['/administrador'])

      })
    }
    console.log(this.metodoForm.value);
  }
}

