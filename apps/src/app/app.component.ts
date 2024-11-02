import { CommonModule } from '@angular/common';
import { Component, numberAttribute } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive, MenubarModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  items= [{
    label: 'Home',
    icon: 'pi pi-home'
},
{
    label: 'Utilities',
    icon: 'pi pi-search',
    items: [
        {
            label: 'Calculator',
            icon: 'pi pi-bolt',
            route: '/calculator'
        },
        {
            label: 'TODO List',
            icon: 'pi pi-server',
              route: '/todo'
        },
        {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Apollo',
                    icon: 'pi pi-palette'
                },
                {
                    label: 'Ultima',
                    icon: 'pi pi-palette'
                }
            ]
        }
    ]
},
{
    label: 'Contact',
    icon: 'pi pi-envelope'
}]
 
}
