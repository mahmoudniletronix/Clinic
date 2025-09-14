import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/Services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  lang: 'ar' | 'en' = 'ar';

  constructor(private langService: LangService) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }
}
