import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];

  newUser: Partial<User> = {};

  // Ajouter un nouvel utilisateur
  addUser() {
    if (this.newUser.name && this.newUser.email) {
      const id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push({ id, name: this.newUser.name, email: this.newUser.email } as User);
      this.newUser = {}; // reset formulaire
    } else {
      alert('Veuillez remplir le nom et l’email');
    }
  }

  // Supprimer un utilisateur
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
