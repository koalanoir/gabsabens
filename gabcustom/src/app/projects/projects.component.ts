import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public images: string[] = [
    'assets/images/projets/1.jpg',
    'assets/images/projets/2.jpg',
    'assets/images/projets/3.jpg',
    'assets/images/projets/4.jpg',
  ];
  public randomImage: string = 'assets/images/projets/1.jpg';
  private currentIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
        // Changez automatiquement l'image toutes les 4 secondes
        interval(4000).subscribe(() => {
          this.changeImage();
        });
  }
  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.randomImage = this.images[this.currentIndex];
  }

}
