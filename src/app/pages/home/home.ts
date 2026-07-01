import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
