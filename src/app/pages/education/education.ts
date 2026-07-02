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
      scoreLabel: 'CGPA',
      score: '7.84',
    },
    {
      degree: 'Higher Secondary (Class XII)',
      branch: 'Science',
      institute: 'Bankura Zilla School',
      year: '2021',
      scoreLabel: 'Percentage',
      score: '90.2%',
    },
    {
      degree: 'Secondary (Class X)',
      branch: 'General',
      institute: 'Majdiha Saradamoni Vidyayatan',
      year: '2019',
      scoreLabel: 'Percentage',
      score: '90.85%',
    },
  ];
}
