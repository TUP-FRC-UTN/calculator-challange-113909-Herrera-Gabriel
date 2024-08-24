import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  asignarValor1(evento: Event): void {
    this.valor1 = Number((evento.target as HTMLInputElement).value);
  }

  asignarValor2(evento: Event): void {
    this.valor2 = Number((evento.target as HTMLInputElement).value);
  }

  Resultado(resultado: number) {
    this.resultado = resultado;
  }
}
