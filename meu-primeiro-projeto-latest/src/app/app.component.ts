import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./components/new-component/new-component.component";
import { TemplateBindingComponent } from './components/templates/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, TemplateBindingComponent],
  styles: `
    h1 {
      color: red,
    }
  `,
  template: `
<!--    <router-outlet /> -->
    <h1>Primeiro programa NG</h1>
    <app-new-component></app-new-component>
    <app-template-binding />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
