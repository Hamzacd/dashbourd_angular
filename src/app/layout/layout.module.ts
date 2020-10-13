import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { TypographyComponent } from '../pages/typography/typography.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutes } from './layout.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    LayoutComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes)
    
  ]
})
export class LayoutModule { }
