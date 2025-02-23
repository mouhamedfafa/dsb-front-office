import { Component, OnInit } from '@angular/core';
interface MenuItem {
  icon: string;
  title: string;
  titles: string;
  description: string;
  route: string;
}
@Component({
  selector: 'app-etude',
  templateUrl: './etude.page.html',
  styleUrls: ['./etude.page.scss'],
})



export class EtudePage implements OnInit {
  searchQuery: string = '';
  menuItems: MenuItem[] = [
    { icon: 'school', titles: 'Bourse', title: 'Bourse étude', description: 'Bourses disponibles', route:'/bourse' },
    { icon: 'help-buoy',  titles: 'Soutien', title: 'Soutien scolaire', description: 'Banque', route: '/banque' },
    { icon: 'hardware-chip-outline',  titles: 'matériels', title: 'matériels scolaires', description: 'Santé', route: '/sante' },
    { icon: 'medal',  titles: 'formations', title: 'Programmes pour formations', description: 'Dernières nouvelles', route: '/Voyages' },
    // { icon: 'heart-half-outline', title: 'love', description: 'Faire un don', route: '/love' },


  ];

  constructor() { }

  ngOnInit() {
  }

}
