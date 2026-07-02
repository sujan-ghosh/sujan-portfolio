import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
