import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Employee Management System',
      image: 'images/project-placeholder.jpg',
      description:
        'A full-stack employee management system with authentication, CRUD operations, reporting, and role-based access.',
      technologies: ['Angular', '.NET Core', 'SQL Server'],
      github: '#',
      demo: '#',
    },

    {
      title: 'Banking Management System',
      image: 'images/project-placeholder.jpg',
      description:
        'Enterprise banking software developed using Angular, .NET Core, REST APIs and SQL Server.',
      technologies: ['Angular', '.NET Core', 'REST API'],
      github: '#',
      demo: '#',
    },

    {
      title: 'Portfolio Website',
      image: 'images/project-placeholder.jpg',
      description:
        'Modern responsive portfolio built with Angular, Bootstrap and Angular Material.',
      technologies: ['Angular', 'Bootstrap', 'SCSS'],
      github: '#',
      demo: '#',
    },
  ];
}
