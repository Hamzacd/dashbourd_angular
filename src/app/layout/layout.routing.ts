import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { MapsComponent } from '../pages/maps/maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
// import { TablesComponent } from '../pages/tables/tables.component';
// import { TypographyComponent } from '../pages/typography/typography.component';

export const LayoutRoutes : Routes = [
  {
		path: '',
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				data: {
					title: 'dashbourd',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'dashboard' }
					]
				}
			},
			{
				path: 'forms',
				component: FormsComponent,
				data: {
					title: 'forms',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'forms' }
					]
				}
			},
			{
				path: 'maps',
				component: MapsComponent,
				data: {
					title: 'maps',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'maps' }
					]
				}
			},
			{
				path: 'notifications',
				component: NotificationsComponent,
				data: {
					title: 'notifications',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'notifications' }
					]
				}
			},
		
		]
	}
  ];


 