import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet,RouterLink } from '@angular/router';
import { Footer } from './pages/footer/footer';
import { Header } from './pages/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive,Footer,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-homepage';
}
