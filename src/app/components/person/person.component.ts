import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    NgIf
  ],
})
export class PersonComponent {
  selectedItem: number | null = null;
  items = [
    {
      nome: 'Profilo',
      icon: 'person',
    },
    {
      nome: 'Impostazioni',
      icon: 'settings',
    }
  ];

  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }

}
