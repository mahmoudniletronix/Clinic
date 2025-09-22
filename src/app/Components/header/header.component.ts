import { Component, OnInit } from '@angular/core';
import { LangService } from '../../Services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lang: 'ar' | 'en' = 'ar';

  constructor(private langService: LangService) {}

  ngOnInit() {
    this.langService.lang$.subscribe((val) => (this.lang = val));
    window.addEventListener('scroll', () => {
      const header = document.getElementById('mainHeader');
      if (window.scrollY > 30) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }

  toggleLang() {
    this.langService.toggleLang();
  }
}
