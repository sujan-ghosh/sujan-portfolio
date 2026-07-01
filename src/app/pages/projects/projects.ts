import { Component } from '@angular/core';

interface Project {
  title: string;

  type: string;

  image: string;

  description: string;

  technologies: string[];

  github: string;

  live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'WanderLust',

      type: 'Full Stack',

      image: 'images/wanderlust.png',

      description:
        'A modern travel accommodation platform where users can browse, create, edit and manage listings with authentication, reviews and image uploads.',

      technologies: ['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'JavaScript'],

      github: 'https://github.com/Sujan-web-pro/WanderLust',

      live: 'https://wanderlust-tourism-txw6.onrender.com/listings',
    },

    {
      title: 'Weather Widget',

      type: 'Frontend',

      image: 'images/weather-widget.png',

      description:
        'Responsive weather application built with React and Material UI using a live Weather API.',

      technologies: ['React', 'Material UI', 'JavaScript', 'Weather API'],

      github: 'https://github.com/Sujan-web-pro/Weather-Widget',

      live: 'https://weather-widget-17qf.onrender.com',
    },
  ];
}
