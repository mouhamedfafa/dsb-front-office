import { Component, OnInit } from '@angular/core';
interface MenuItem {
  icon: string;
  title: string;
  description: string;
  route: string;
}
@Component({
  selector: 'app-sante',
  templateUrl: './sante.page.html',
  styleUrls: ['./sante.page.scss'],
})
export class SantePage implements OnInit {

  constructor() { }
  searchQuery: string = '';
  menuItems: MenuItem[] = [
    { icon: 'logo-ionic', title: 'Sensibilisation', description: 'Bourses disponibles', route: '/scholarships' },
    { icon: 'body', title: 'Soutien à la santé maternelle', description: 'Banque', route: '/banque' },
    { icon: 'git-compare', title: 'santé communautaire', description: 'Santé', route: '/sante' },
    { icon: 'medkit', title: 'Assistance pour l\'achat de médicaments', description: 'Dernières nouvelles', route: '/Voyages' },
    // { icon: 'heart-half-outline', title: 'love', description: 'Faire un don', route: '/love' },


  ];
  ngOnInit() {
  }

}
