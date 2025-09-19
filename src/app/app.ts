import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet,RouterLink } from '@angular/router';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-homepage';
}
