import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffees } from 'src/app/models/Coffees';
import { Methods } from 'src/app/models/Methods';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  editForm!: FormGroup;
  metodo?: Methods;
  cafe?: Coffees[];
  receitasVisible: boolean = false;
  shouldSubmitForm: boolean = true;

  constructor(private formBuilder: FormBuilder, private metodosService: MethodsService, private route: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.metodosService.GetMethodsById(id).subscribe((data)=>{
   
    this.metodo = data.dados; 
    console.log(this.metodo)
      
    this.editForm = this.formBuilder.group({
      id: [id],
      metodos: [this.metodo.metodos, Validators.required],
      cafes: this.formBuilder.array(this.ObterCafes(this.metodo))
    });   
      
  

    })
    console.log(id)

  }

  getCafesFormArray(){
    return (<UntypedFormArray>this.editForm.get('cafes')).controls
  }


  private ObterCafes(metodo: Methods){
    const cafesTest = [];
    console.log(metodo.cafes)
    if(metodo.cafes){
      metodo.cafes.forEach(cafe => cafesTest.push(this.criarCafes(cafe)))
    }
    else{
      cafesTest.push(this.criarCafes())
    }
    return cafesTest;
  }



  private criarCafes(cafes?: Coffees){
    return this.formBuilder.group({
      id: [cafes?.id],
      variacao: [cafes?.variacao, Validators.required],
      receita: this.formBuilder.group({
        id: [cafes?.receita?.id],
        quantidadeDeCafe: [cafes?.receita?.quantidadeDeCafe, Validators.required],
        quantidadeDeAgua: [cafes?.receita?.quantidadeDeAgua, Validators.required],
        temperatura: [cafes?.receita?.temperatura, Validators.required],
        granulometria: [cafes?.receita?.granulometria, Validators.required]
      })
    })
  }

  submit(event: Event){
    if(!this.shouldSubmitForm){
      event.preventDefault();
    }
    this.metodosService.UpdateMethods(this.editForm.value).subscribe((data)=>{
      this.router.navigate(['/administrador'])
    })
   console.log(this.editForm.value)
  }

  isReceitaVisible(){
    this.shouldSubmitForm = false;
    this.receitasVisible = true
  }

  isReceitaNoVisible(){
    this.shouldSubmitForm = false;
    this.receitasVisible = false
  }

}
