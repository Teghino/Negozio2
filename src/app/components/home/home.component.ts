import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { Subscription, fromEvent } from 'rxjs';
import { Users } from 'src/app/userModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private resizeSubscription!: Subscription;
  private nome: string = '';

  constructor(private http: HttpClient) {
    const utente = localStorage.getItem('utente');
    if (utente) {
      this.nome = JSON.parse(utente).name;
    }
  }

  ngOnInit() {
    this.animate();
    this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => this.animate());

  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

    private animate() {
      const element = document.querySelector('.img');
      if (element) {
        gsap.to(".img", {duration: 0.1, y: 500});
        gsap.to(".img", {duration: 1.1, y: 0, delay: 0.1});
        gsap.to(".img", {duration: 1.2, opacity: 1,})
        gsap.to(".img", {duration: 1.0, 'box-shadow': '#3f51b5 0px 0px 10px', delay: 1.2});
        gsap.to(".sotto", {duration: 1.0, opacity: 1, delay: 1.7});
        gsap.to('#migliori', {duration: 1.0, opacity: 1, delay: 1.7});

      } else {
        console.log("Elemento .img non trovato");
      }
    }

    getNome() {
      return this.nome;
    }


}
