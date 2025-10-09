import { Component } from '@angular/core';
import { DBButton } from '@db-ux/ngx-core-components';

@Component({
  selector: 'app-root',
  imports: [DBButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-example';
}
