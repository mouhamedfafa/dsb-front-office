import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {

    if (this.loginForm.invalid) {
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Connexion en cours...'
    });
    await loading.present();

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe(
      async (user) => {
        await loading.dismiss();
        this.router.navigate(['/home']);
      },
      async (error) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Erreur de connexion',
          message: error.error?.message || 'Identifiants incorrects',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
  onSubmit() {
    if (this.loginForm.valid) {
      
      console.log('Formulaire soumis avec succès', this.loginForm.value);
      // Vous pouvez ajouter ici votre logique pour envoyer le formulaire, par exemple, appeler un service API pour l'authentification.
    } else {
      console.log('Formulaire invalide');
    }
  }
}
