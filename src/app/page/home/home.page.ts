
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Interfaces/user.interface'
import {AuthService } from 'src/app/services/authentication.service';
import { getName } from 'ionicons/dist/types/components/icon/utils';

interface MenuItem {
  icon: string;
  title: string;
  description: string;
  route: string;
}


interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  image: string;
   name: string;
  category: 'Éducation' | 'Santé' | 'Urgence' | 'Communauté'| 'Accompagnement';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: User | null = null;
  searchQuery: string = '';

  campaigns: Campaign[] = [
    {
      id: 1,
      title: 'Bourses pour Étudiants Défavorisés',
      description: 'Aidez des jeunes talents à poursuivre leurs études',
      goal: 50000,
      raised: 25600,
      image: 'assets/etude.png',
      category: 'Éducation',
      name: 'home-outline'
    },
    {
      id: 2,
      title: 'Secours Médicaux d\'Urgence',
      description: 'Soutenez les familles dans le besoin de soins médicaux',
      goal: 75000,
      raised: 42300,
      image: 'assets/sante.png',
      category: 'Santé',
       name:  'home-outline'
    },
    {
      id: 3,
      title: 'Reconstruction Communautaire',
      description: 'Reconstruisons ensemble après les catastrophes',
      goal: 100000,
      raised: 65400,
      image: 'assets/Reconstruction.png',
      category: 'Communauté',
       name:  'home-outline'
    },
    {
      id: 4,
      title: 'Accompagnement',
      description: 'Accompagnement sur tous les plans',
      goal: 100000,
      raised: 65400,
      image: 'assets/accompagnement.png',
      category: 'Accompagnement',
       name:  'home-outline'
    }
  ];
  menuItems: MenuItem[] = [
    { icon: 'school-sharp', title: 'Etudes', description: 'Bourses disponibles', route: '/etude' },
    { icon: 'card', title: 'Banque', description: 'Banque', route: '/banque' },
    { icon: 'medkit', title: 'santé', description: 'Santé', route: '/sante' },
    { icon: 'airplane', title: 'Voyages', description: 'Dernières nouvelles', route: '/Voyages' },
    { icon: 'heart-half', title: 'love', description: 'Faire un don', route: '/love' },
    { icon: 'thumbs-up', title: 'Accompagnement', description: 'Nos partenaires', route: '/organizations' },
    { icon: 'diamond', title: 'Religion', description: 'Mes messages', route: '/messages' },
    // { icon: 'settings', title: 'Paramètres', description: 'Configuration', route: '/settings' },
    // { icon: 'information-circle', title: 'À propos', description: 'Informations', route: '/about' },
    { icon: 'people', title: 'Aide', description: 'Demander de l\'aide', route: '/help' }

  ];


  categories: string[] = ['Tout', 'Éducation', 'Santé', 'Urgence', 'Communauté'];
  selectedCategory: string = 'Tout';
  // AuthService: any;


  constructor(private router: Router ,
    private authService: AuthService
  ) {}

  ngOnInit() {



    this.user = this.authService.getCurrentUser();
console.log(this.user);

  }

  calculateProgress(campaign: Campaign): number {
    return (campaign.raised / campaign.goal) * 100;
  }

  filterCampaigns(): Campaign[] {
    if (this.selectedCategory === 'Tout') {
      return this.campaigns;
    }
    return this.campaigns.filter(campaign => campaign.category === this.selectedCategory);
  }

  navigateToCampaignDetails(campaignId: number) {
    this.router.navigate(['/campaign-details', campaignId]);
  }
}
