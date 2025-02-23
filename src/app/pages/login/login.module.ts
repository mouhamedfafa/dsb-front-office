import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module'
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Importez IonicModule ici
    ReactiveFormsModule,
    FormsModule,
    ExploreContainerComponentModule,
    LoginPageRoutingModule

  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

