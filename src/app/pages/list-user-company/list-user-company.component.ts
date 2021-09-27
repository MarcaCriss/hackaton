import { Component, OnDestroy, OnInit } from '@angular/core';
import { BootcampService } from '../../core/services/bootcamp.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-user-company',
  templateUrl: './list-user-company.component.html',
  styleUrls: ['./list-user-company.component.css'],
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

  /************** */
  bootcamps$ = new BehaviorSubject<any[]>([]);
  batch = 7;
  lastKey = 1;
  finished: boolean = false;

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.nameRoute = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {

      this.getBootcamps()
  }
  getSubtitle() {
    if (this.nameRoute === 'bootcamp') this.subtitleName = 'Mis Bootcamps';
    if (this.nameRoute === 'usuario') this.subtitleName = 'Mis Inscripciones';
  }

  private getBootcamps() {
    if (this.finished) return;
    this.bootcampService
      .getBootcampsQuery(this.batch + 1, this.lastKey)
      .pipe(tap((rpta: any[]) => {
        this.lastKey = _.last(rpta)['population'];
        const newBootcamps = _.slice(rpta, 0, this.batch);
        const currentBootcamps = this.bootcamps$.getValue();
        if (this.lastKey == _.last(newBootcamps)['population']) {
          this.finished = true;
        }

        this.bootcamps$.next(_.concat(currentBootcamps,newBootcamps));
      }),take(1)).subscribe();
  }
  onScroll() {
    console.log('estas realizando scroll :)');
    this.getBootcamps();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
