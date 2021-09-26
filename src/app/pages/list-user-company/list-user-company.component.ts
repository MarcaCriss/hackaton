import { Component, OnDestroy, OnInit } from '@angular/core';
import { BootcampService } from '../../core/services/bootcamp.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list-user-company',
  templateUrl: './list-user-company.component.html',
  styleUrls: ['./list-user-company.component.css']
})
export class ListUserCompanyComponent implements OnInit, OnDestroy {
  bootcamps: any = [];
  nameRoute;
  onDestroy$: Subject<boolean> = new Subject();
  subtitleName: string = 'Mis Bootcamps';
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value: number = 50;
  loading: boolean = false;

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.nameRoute = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    if (this.nameRoute === 'bootcamp')
      this.subtitleName = 'Mis Bootcamps';
    if(this.nameRoute === 'usuario')
      this.subtitleName = 'Mis Inscripciones';
    this.bootcampService.getBootcamps()
    .pipe(takeUntil(this.onDestroy$))
    .subscribe(
      (data) => {
        this.bootcamps = data;
        this.loading = true;
      }
    )
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
