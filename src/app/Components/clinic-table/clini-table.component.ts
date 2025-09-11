import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/Services/clinic.service';

@Component({
  selector: 'app-clini-table',
  templateUrl: './clini-table.component.html',
  styleUrls: ['./clini-table.component.css'],
})
export class CliniTableComponent implements OnInit {
  clinics: any[] = [];
  lang: 'ar' | 'en' = 'ar';

  ngOnInit() {
    this.loadClinics();
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }

  loadClinics() {
    // ✅ Fake data (Arabic + English)
    this.clinics = [
      {
        ServiceParentNameAr: 'عيادة الباطنة',
        ServiceParentNameEn: 'Internal Medicine',
        TicketNumber: 'A-101',
        ServiceNameAr: 'د. محمد أحمد',
        ServiceNameEn: 'Dr. Mohamed Ahmed',
        WindowNumber: 3,
      },
      {
        ServiceParentNameAr: 'عيادة النساء والتوليد',
        ServiceParentNameEn: 'Obstetrics & Gynecology',
        TicketNumber: 'B-202',
        ServiceNameAr: 'د. سارة علي',
        ServiceNameEn: 'Dr. Sarah Ali',
        WindowNumber: 1,
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
      },
      {
        ServiceParentNameAr: 'عيادة الأطفال',
        ServiceParentNameEn: 'Pediatrics',
        TicketNumber: 'D-404',
        ServiceNameAr: 'د. ليلى حسن',
        ServiceNameEn: 'Dr. Layla Hassan',
        WindowNumber: 5,
      },
    ];
  }

  toggleLang() {
    this.lang = this.lang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
  }
}
