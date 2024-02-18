import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cafes } from 'src/app/models/Cafes';
import { MetodosService } from 'src/app/services/metodos.service';

@Component({
  selector: 'app-criar-cafe',
  templateUrl: './criar-cafe.component.html',
  styleUrls: ['./criar-cafe.component.css']
})
export class CriarCafeComponent implements OnInit{

  cafeForm!: FormGroup;
  cafe!: Cafes;

  constructor(private fb: FormBuilder, private metodosService: MetodosService, private route: ActivatedRoute, private router: Router) {
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
    this.metodosService.CreateCafe(id, this.cafeForm.value).subscribe((data)=>{
      console.log(data)
      console.log(this.cafeForm.value)
      this.router.navigate(['/administrador'])
    })
    console.log(this.cafeForm.value)
  }
}
