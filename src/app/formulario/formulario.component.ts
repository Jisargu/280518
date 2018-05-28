import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
nombre: string= 'Panchito';
apellido: string = 'Lopez';
edad: number=18;
sexo: string='Masculino';
correo: string='panchito.lopez@gmail.com';
password: string='1234';
submitText: string='Tómalo bb';
textitoFormulario='Dame tu info y yo te llamo ;)';

  constructor() { }

  ngOnInit() {
  }


  
}
