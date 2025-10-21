import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, UserListComponent],
  template: `
  <nav class="menu">
    <a href="#">Accueil</a>
    <a href="#">À propos</a>
    <a href="#">Contact</a>
  </nav>

  <div class="login-form">
    <h2>Connexion</h2>
    <form (ngSubmit)="login()">
      <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
      <input type="password" [(ngModel)]="password" name="password" placeholder="Mot de passe" required>
      <button type="submit">Se connecter</button>
    </form>
  </div>

  <div class="cards">
    <div class="card" *ngFor="let card of cards">
      <h3>{{ card.title }}</h3>
      <p>{{ card.content }}</p>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = '';
  password = '';

  login() {
    alert(`Connexion de ${this.email}`);
  }

  cards = [
    { title: 'Fenêtre 1', content: 'Contenu de la fenêtre 1' },
    { title: 'Fenêtre 2', content: 'Contenu de la fenêtre 2' },
    { title: 'Fenêtre 3', content: 'Contenu de la fenêtre 3' }
  ];
}
