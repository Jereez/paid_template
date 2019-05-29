import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { WidgetComponent } from './widget/widget.component';
import { TablesComponent } from './tables/tables.component';
import { FullWidthComponent } from './full-width/full-width.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { ButtonComponent } from './button/button.component';
import { MaterialIcenComponent } from './material-icen/material-icen.component';
import { FontawesomeIconComponent } from './fontawesome-icon/fontawesome-icon.component';
import { ElementsComponent } from './elements/elements.component';
import { AdonsComponent } from './adons/adons.component';
import { RegisterComponent } from './register/register.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { ElevenComponent } from './eleven/eleven.component';
import { TwelveComponent } from './twelve/twelve.component';
import { ThirteenComponent } from './thirteen/thirteen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    ChartComponent,
    WidgetComponent,
    TablesComponent,
    FullWidthComponent,
    FormBasicComponent,
    FormWizardComponent,
    ButtonComponent,
    MaterialIcenComponent,
    FontawesomeIconComponent,
    ElementsComponent,
    AdonsComponent,
    RegisterComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    NineComponent,
    TenComponent,
    ElevenComponent,
    TwelveComponent,
    ThirteenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
