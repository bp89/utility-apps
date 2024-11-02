import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Operator } from './types/Operator';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  title = 'apps';
  finalOutput=0.0;
  outputBuffer: any[]=[];
  lastInputOperator : Operator|undefined=undefined;

  getCurrentBufferValue(){
    return JSON.stringify(this.outputBuffer);
  }

   isNumeric(str: string) {
    return str && typeof str === "string" && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  apply(val: number | string){
    if( typeof val === 'number'){
      if(this.outputBuffer.length  >= 1 && this.isNumeric(this.outputBuffer[this.outputBuffer.length - 1])){
        this.outputBuffer[this.outputBuffer.length - 1] = this.outputBuffer[this.outputBuffer.length - 1] + '' + val;
      }else{
        this.outputBuffer.push(val+'');
      }
    } else {
      const operator: Operator = <Operator>val;
      this.outputBuffer.push(val);
        switch(operator){
          case Operator.AC:
            this.finalOutput = 0;
            this.outputBuffer = [];
            this.lastInputOperator = undefined;
            break;
          case Operator.EQUAL:
            let output = this.newMethod();
            this.finalOutput = output;
            this.outputBuffer.push(output) ;
            this.lastInputOperator = undefined;
            break;
          default:
            this.lastInputOperator = operator; 
            break;
        }
    }
    console.info('val' + JSON.stringify(this.outputBuffer))
  }

  private newMethod() {
    const currentValue = parseFloat(this.outputBuffer[this.outputBuffer.length - 2]);
    const previousValue = this.outputBuffer.length >= 4 ? parseFloat(this.outputBuffer[this.outputBuffer.length - 4]) : 0;
    console.info(currentValue, previousValue);
    let output = 0;
    switch (this.lastInputOperator) {
      case Operator.PLUS:
        output = previousValue + currentValue;
        break;
      case Operator.MINUS:
        output = previousValue - currentValue;
        break;
      case Operator.DIVIDE:
        output = previousValue / currentValue;
        break;
      case Operator.MULTIPLY:
        output = previousValue * currentValue;
        break;
      default:
        output = currentValue * 2;
        break;
    }
    return output;
  }
}
