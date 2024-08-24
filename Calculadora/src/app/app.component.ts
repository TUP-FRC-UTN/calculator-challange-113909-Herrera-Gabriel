import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteHijoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Calculadora';
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  Resultado(resultado: number): void {
    this.resultado = resultado;
  }
}
