import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { MaterialIcenComponent } from './material-icen/material-icen.component';
import { ButtonComponent } from './button/button.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FullWidthComponent } from './full-width/full-width.component';
import { WidgetComponent } from './widget/widget.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { ElementsComponent } from './elements/elements.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
  },
  {
path:'register',
component: RegisterComponent
  },
  {
    path:'nav', 
    component: NavComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path:'chart',
        component: ChartComponent
      },
      {
        path: 'widget',
        component: WidgetComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'full-width',
        component: FullWidthComponent
      },
      {
        path: 'form-basic',
        component: FormBasicComponent
      },
      {
        path: 'form-wizard',
        component: FormWizardComponent
      },
      {
        path: 'buttons',
        component: ButtonComponent
      },
      {
        path: 'material-icon',
        component: MaterialIcenComponent
      },
      {
        path: 'font-awesome-icons',
        component: FontawesomeIconComponent
      },
      {
        path: 'elements',
        component: ElementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
