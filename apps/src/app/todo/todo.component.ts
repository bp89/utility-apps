import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';

interface Task {
  title: string;
  timestamp: string;
}
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CalendarModule, FloatLabelModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks: Task[] = [];
  newTaskInputControl = '';
  newTaskTimeControl = '';
  constructor() { }


  submitTask(e: Event) {
    if ((e as KeyboardEvent).key === 'Enter') {
      const el = e.target as HTMLInputElement;
      this.tasks.push({title: el.value, timestamp: this.newTaskTimeControl});
      this.newTaskInputControl = '';
      this.newTaskTimeControl = '';
      console.info(this.newTaskTimeControl)
    }

  }

}
