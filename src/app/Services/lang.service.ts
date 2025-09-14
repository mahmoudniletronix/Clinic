import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private langSource = new BehaviorSubject<'ar' | 'en'>('ar');
  lang$ = this.langSource.asObservable();

  setLang(lang: 'ar' | 'en') {
    this.langSource.next(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  toggleLang() {
    const current = this.langSource.value;
    this.setLang(current === 'ar' ? 'en' : 'ar');
  }
}
