import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lang: 'ar' | 'en' = 'ar';

  toggleLang() {
    this.lang = this.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }

  constructor() {}

  ngOnInit(): void {}
}
