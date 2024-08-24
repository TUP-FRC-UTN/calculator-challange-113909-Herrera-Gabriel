import { Component  } from '@angular/core';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  alCambiarValor1(evento: Event): void {
    this.valor1 = Number((evento.target as HTMLInputElement).value);
  }

  alCambiarValor2(evento: Event): void {
    this.valor2 = Number((evento.target as HTMLInputElement).value);
  }

  alRecibirResultado(resultado: number) {
    this.resultado = resultado;
  }
}
