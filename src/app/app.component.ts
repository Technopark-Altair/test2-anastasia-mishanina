import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
firstOperand: number;
 secondOperand: number;
 operator:string;
 result: number;
 errorMessage: string;
  doCalc(){
    if (this.firstOperand !=null && this.secondOperand !=null && this.operator !=null) {
       if (this.operator == "-"){
        this.result = this.firstOperand - this.secondOperand;
        this.errorMessage = "Нет ошибки";
       }else if(this.operator =="+"){
      this.result = this.firstOperand + this.secondOperand;
        this.errorMessage = "Нет ошибки";
    }else if(this.operator =="/"){
if (this.secondOperand == 0) {
  this.errorMessage=" На ноль делить нельзя";
  this.result = null;
}else{
  this.result= this.firstOperand / this.secondOperand;
  this.errorMessage = "Нет ошибки";

}
  }else if(this.operator =="*"){
this.result = this.firstOperand * this.secondOperand;
    this.errorMessage = "Нет ошибки";
  }
}else{
  if(this.errorMessage == null){
    this.errorMessage == "Нет первого операнда";
  } else if ( this.secondOperand == null) {
    this.errorMessage == "Нет второго операнда";
  } else if (this.operator == null){
    this.errorMessage =="Нет оператора действия";
  }
}
  }






}
