import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Pio Neto';
  public age = 45;
  public isDisabled = true;
  public srcValue = 'https://conteudo.imguol.com.br/c/home/f5/2024/08/26/bombeiros-combatem-incendio-em-plantacao-de-cana-de-acucar-em-dumont-cidade-na-regiao-de-ribeirao-preto-sp-24082024-1724714245293_v2_450x337.jpg.webp'

  public sum(val1: number, val2: number): number{
    return val1 + val2;
  }

  public sum2() {
    this.age++;
  }

  public sub() {
    this.age --;
  }

  public onKeyDown(event: Event): void {
    console.log(event);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log(event);
  }
}
