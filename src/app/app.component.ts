import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario2';
  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      email:['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['',
  [
    Validators.required,
    Validators.minLength(6)
  ]
],
terms:['',[
  Validators.required,
  Validators.requiredTrue
   ]]
 });
  }
  send():any {
    console.log(this.formLogin.value);
  }
}
