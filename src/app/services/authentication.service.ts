import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage-angular';
import { User } from '../Interfaces/user.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User: User | null = null;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  route: any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    const storedUser = await this.storage.get('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  // Régénération du token
  regenerateToken(): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/regenerate-token`, {})
      .pipe(
        map(user => {
          // Mettre à jour l'utilisateur stocké
          this.storage.set('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  // Méthode de connexion
  login(email: string, password: string): Observable<User> {

    console.log(`${environment.apiUrl}/auth/login`);

    return this.http.post<User>(`${environment.apiUrl}/login`, { email, password })
      .pipe(
        map(user => {
          // Stocker l'utilisateur
          this.storage.set('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
    return this.route.navigate(['/home']);
  }

  // Inscription
  register(userData: any): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/register`, userData);
  }

  // Déconnexion
  async logout() {
    await this.storage.remove('currentUser');
    this.currentUserSubject.next(null);
  }

  // Vérification de l'authentification
  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  // Récupération de l'utilisateur actuel

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
