// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bourse',
//   templateUrl: './bourse.page.html',
//   styleUrls: ['./bourse.page.scss'],
// })
// export class BoursePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
// import {  } from '@angular/forms'; // <-- Importer ReactiveFormsModule
@Component({
  selector: 'app-bourse',
  templateUrl: './bourse.page.html',
  styleUrls: ['./bourse.page.scss'],
})
export class BoursePage implements OnInit {
  scholarshipForm!: FormGroup;
  educationLevels = [
    'Lycée',
    'Licence',
    'Master',
    'Doctorat',
    'Formation professionnelle'
  ];

  scholarshipTypes = [
    'Bourse d\'excellence',
    'Bourse sociale',
    'Bourse de recherche',
    'Bourse de mobilité',
    'Aide d\'urgence'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.scholarshipForm = this.formBuilder.group({
      personalInfo: this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        nationality: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]]
      }),

      academicInfo: this.formBuilder.group({
        currentLevel: ['', [Validators.required]],
        institution: ['', [Validators.required]],
        major: ['', [Validators.required]],
        gpa: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
        graduationDate: ['', [Validators.required]]
      }),

      scholarshipDetails: this.formBuilder.group({
        type: ['', [Validators.required]],
        amount: ['', [Validators.required, Validators.min(0)]],
        startDate: ['', [Validators.required]],
        duration: ['', [Validators.required]],
        reason: ['', [Validators.required, Validators.minLength(100)]]
      }),

      documents: this.formBuilder.group({
        cvUploaded: [false, [Validators.requiredTrue]],
        transcriptUploaded: [false, [Validators.requiredTrue]],
        motivationLetterUploaded: [false, [Validators.requiredTrue]]
      })
    });
  }

  async submitForm() {
    if (this.scholarshipForm.invalid) {
      const alert = await this.alertController.create({
        header: 'Formulaire incomplet',
        message: 'Veuillez remplir tous les champs obligatoires.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Soumission en cours...'
    });
    await loading.present();

    try {
      // Simuler l'envoi à l'API
      await new Promise(resolve => setTimeout(resolve, 2000));

      await loading.dismiss();

      const successAlert = await this.alertController.create({
        header: 'Succès',
        message: 'Votre demande de bourse a été soumise avec succès.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }]
      });
      await successAlert.present();

    } catch (error) {
      await loading.dismiss();
      const errorAlert = await this.alertController.create({
        header: 'Erreur',
        message: 'Une erreur est survenue lors de la soumission.',
        buttons: ['OK']
      });
      await errorAlert.present();
    }
  }

  async uploadFile(documentType: string) {
    // Simulation d'upload
    const loading = await this.loadingController.create({
      message: 'Upload en cours...'
    });
    await loading.present();

    setTimeout(() => {
      const documentsForm = this.scholarshipForm.get('documents');
      switch(documentType) {
        case 'cv':
          documentsForm?.patchValue({cvUploaded: true});
          break;
        case 'transcript':
          documentsForm?.patchValue({transcriptUploaded: true});
          break;
        case 'motivation':
          documentsForm?.patchValue({motivationLetterUploaded: true});
          break;
      }
      loading.dismiss();
    }, 1500);
  }
}
