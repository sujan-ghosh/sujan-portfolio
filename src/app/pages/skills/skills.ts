import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', icon: 'fab fa-angular', level: 90 },
        { name: 'React', icon: 'fab fa-react', level: 75 },
        { name: 'JavaScript', icon: 'fab fa-js-square', level: 88 },
        { name: 'TypeScript', icon: 'fas fa-code', level: 85 },
        { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 88 },
        { name: 'Angular Material', icon: 'fas fa-layer-group', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: '.NET Core', icon: 'fas fa-server', level: 88 },
        { name: 'C#', icon: 'fas fa-code', level: 70 },
        { name: 'Node.js', icon: 'fab fa-node-js', level: 70 },
        { name: 'Express.js', icon: 'fas fa-network-wired', level: 68 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'SQL Server', icon: 'fas fa-database', level: 85 },
        { name: 'MongoDB', icon: 'fas fa-leaf', level: 65 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', level: 88 },
        { name: 'GitHub', icon: 'fab fa-github', level: 88 },
        { name: 'Postman', icon: 'fas fa-paper-plane', level: 80 },
      ],
    },
  ];
}
