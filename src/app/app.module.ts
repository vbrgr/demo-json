import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './_layout/admin-footer/admin-footer.component';
import { PageNotFoundComponent } from './_layout/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { OnlynumberDirective } from './directive/onlynumber.directive';
import { AlphanumericDirective } from './directive/alphanumeric.directive';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { RadioComponent } from './components/radio/radio.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { UserDynamicFormComponent } from './user-dynamic-form/user-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OnlynumberDirective,
    AlphanumericDirective,
    InputComponent,
    SelectComponent,
    RadioComponent,
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    TextareaComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    UserDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent
  ]
})
export class AppModule { }
