import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffees } from 'src/app/models/Coffees';
import { CoffeeService } from 'src/app/services/coffee.service';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-criar-cafe',
  templateUrl: './criar-cafe.component.html',
  styleUrls: ['./criar-cafe.component.css']
})
export class CriarCafeComponent implements OnInit{

  cafeForm!: FormGroup;
  cafe!: Coffees;

  constructor(private fb: FormBuilder, private metodosService: MethodsService, public coffeService: CoffeeService,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.cafeForm = this.fb.group({
      variacao: ['', Validators.required],
      receita: this.fb.group({
        quantidadeDeCafe: ['', Validators.required],
        quantidadeDeAgua: ['', Validators.required],
        temperatura: ['', Validators.required],
        granulometria: ['', Validators.required]
      })
    });
  }

  submit()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.coffeService.CreateCoffee(id, this.cafeForm.value).subscribe((data)=>{
      console.log(data)
      console.log(this.cafeForm.value)
      this.router.navigate(['/administrador'])
    })
    console.log(this.cafeForm.value)
  }
}
