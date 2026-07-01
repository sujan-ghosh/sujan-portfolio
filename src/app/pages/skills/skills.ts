import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      level: 'Advanced',
    },

    {
      name: '.NET Core',
      icon: 'fas fa-code',
      level: 'Advanced',
    },

    {
      name: 'SQL Server',
      icon: 'fas fa-database',
      level: 'Advanced',
    },

    {
      name: 'TypeScript',
      icon: 'fab fa-js',
      level: 'Advanced',
    },

    {
      name: 'React',
      icon: 'fab fa-react',
      level: 'Intermediate',
    },

    {
      name: 'Node.js',
      icon: 'fab fa-node-js',
      level: 'Intermediate',
    },

    {
      name: 'Git',
      icon: 'fab fa-git-alt',
      level: 'Advanced',
    },

    {
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      level: 'Advanced',
    },
  ];
}
