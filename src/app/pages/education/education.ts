import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      branch: 'Computer Science & Engineering',
      institute: 'Sanaka Educational Trust’s Group of Institutions',
      year: '2021 - 2025',
      cgpa: 'CGPA: 7.84',
    },
  ];
}
