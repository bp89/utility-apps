import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './404.component.html',
  styleUrl: './404.component.scss'
})
export class PageNotFoundComponent {
 
}
