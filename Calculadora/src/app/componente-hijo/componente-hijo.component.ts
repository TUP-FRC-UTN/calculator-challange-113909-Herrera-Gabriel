import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  standalone: true,
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})

export class ComponenteHijoComponent {
  @Input() valor1!: number;
  @Input() valor2!: number;
  @Output() resultado = new EventEmitter<number>();

  calcular(operacion: string) {
    let res: number;
    switch (operacion) {
      case '+':
        res = this.valor1 + this.valor2;
        break;
      case '-':
        res = this.valor1 - this.valor2;
        break;
      case '*':
        res = this.valor1 * this.valor2;
        break;
      case '/':
        res = this.valor2 !== 0 ? this.valor1 / this.valor2 : NaN;
        break;
      case '^':
        res = Math.pow(this.valor1, this.valor2);
        break;
      default:
        res = 0;
    }
    this.resultado.emit(res);
  }
}