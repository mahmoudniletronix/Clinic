import { Component, OnInit, OnDestroy } from '@angular/core';
import { LangService } from '../../Services/lang.service';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';

interface Clinic {
  ServiceParentNameAr: string;
  ServiceParentNameEn: string;
  TicketNumber: string;
  ServiceNameAr: string;
  ServiceNameEn: string;
  WindowNumber: number;
  ClinicNameAr: string;
  ClinicNameEn: string;
  [key: string]: string | number;
}

@Component({
  selector: 'app-clini-table',
  templateUrl: './clini-table.component.html',
  styleUrls: ['./clini-table.component.css'],
})
export class CliniTableComponent implements OnInit, OnDestroy {
  clinics: Clinic[] = [];
  serverTime: string | null = null;
  lang: 'ar' | 'en' = 'ar';
  isLoading = false;
  lastUpdate: Date = new Date();

  private destroy$ = new Subject<void>();
  private readonly REFRESH_INTERVAL = 30000;

  constructor(private langService: LangService) {}

  ngOnInit() {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      this.lang = val;
    });

    this.loadClinics();
    this.lastUpdate = new Date();
    this.loadSampleData();

    interval(this.REFRESH_INTERVAL)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadClinics());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadClinics() {
    this.isLoading = true;
    this.loadSampleData();
    this.isLoading = false;
  }

  private loadSampleData() {
    this.clinics = [
      {
        ServiceParentNameAr: 'عيادة الباطنة',
        ServiceParentNameEn: 'Internal Medicine',
        TicketNumber: 'A-101',
        ServiceNameAr: 'د. محمد أحمد',
        ServiceNameEn: 'Dr. Mohamed Ahmed',
        WindowNumber: 3,
        ClinicNameAr: 'مستشفى القاهرة',
        ClinicNameEn: 'Cairo Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة النساء والتوليد',
        ServiceParentNameEn: 'Obstetrics & Gynecology',
        TicketNumber: 'B-202',
        ServiceNameAr: 'د. سارة علي',
        ServiceNameEn: 'Dr. Sarah Ali',
        WindowNumber: 1,
        ClinicNameAr: 'مستشفى الشروق',
        ClinicNameEn: 'El Shorouk Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة العظام',
        ServiceParentNameEn: 'Orthopedics',
        TicketNumber: 'C-303',
        ServiceNameAr: 'د. كريم محمود',
        ServiceNameEn: 'Dr. Karim Mahmoud',
        WindowNumber: 2,
        ClinicNameAr: 'مستشفى السلام',
        ClinicNameEn: 'El Salam Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة الأطفال',
        ServiceParentNameEn: 'Pediatrics',
        TicketNumber: 'D-404',
        ServiceNameAr: 'د. ليلى حسن',
        ServiceNameEn: 'Dr. Layla Hassan',
        WindowNumber: 5,
        ClinicNameAr: 'مستشفى النيل',
        ClinicNameEn: 'El Nile Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة الجلدية',
        ServiceParentNameEn: 'Dermatology',
        TicketNumber: 'E-505',
        ServiceNameAr: 'د. أحمد سامي',
        ServiceNameEn: 'Dr. Ahmed Sami',
        WindowNumber: 4,
        ClinicNameAr: 'مستشفى التحرير',
        ClinicNameEn: 'El Tahrir Hospital',
      },
      {
        ServiceParentNameAr: 'عيادة القلب',
        ServiceParentNameEn: 'Cardiology',
        TicketNumber: 'F-606',
        ServiceNameAr: 'د. منى فؤاد',
        ServiceNameEn: 'Dr. Mona Fouad',
        WindowNumber: 6,
        ClinicNameAr: 'مستشفى قصر العيني',
        ClinicNameEn: 'Kasr El Ainy Hospital',
      },
    ];
  }

  refreshData() {
    this.loadClinics();
  }

  trackByTicketNumber(index: number, item: Clinic): string {
    return item.TicketNumber || index.toString();
  }
}
