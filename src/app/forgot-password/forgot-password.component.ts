import { MenuService } from './../service/menu.service';
import { FormService } from './../service/form.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formdata: any;
  formclass: any;
  formitems: any;
  formrequired: any;
  formschema: any;
  formResult: any;
  data: any;
  editData: any;
  profileForm: FormGroup;
  submitted = false;
  constructor(private forms: FormService, private menus: MenuService, private fb: FormBuilder) {

  }
  ngOnInit() {
    this.profileForm = this.fb.group({});
    this.data = this.forms.getForm().subscribe(res => {
      this.formschema = res[0].schema;
      this.formdata = res[0].schema.properties;
      this.formrequired = res[0].schema.required;
      this.formclass = res[0].form;
      this.formitems = res[0].form[0].items;
     // console.log(this.formdata);
      res[0].form[0].items.forEach(newkey => {
        newkey.items.forEach(key => {
         if (this.formrequired.indexOf(key) !== -1 && this.getData(key).min !== '' && this.getData(key).max !== ''
            && this.getData(key).pattern !== '') {
            this.profileForm.addControl(key, this.fb.control('', [Validators.required,
              Validators.minLength(this.getData(key).min), Validators.maxLength(this.getData(key).max),
              Validators.pattern(this.getData(key).pattern)]));
        }  else if (this.formrequired.indexOf(key) !== -1 && this.getData(key).min !== '' && this.getData(key).max !== '') {
        this.profileForm.addControl(key, this.fb.control('', [Validators.required,
          Validators.minLength(this.getData(key).min), Validators.maxLength(this.getData(key).max)]));
        } else if (this.formrequired.indexOf(key) !== -1 && this.getData(key).min !== '' ) {
          this.profileForm.addControl(key, this.fb.control('', [Validators.required,
            Validators.minLength(this.getData(key).min)]));
        } else if (this.formrequired.indexOf(key) !== -1 && this.getData(key).max !== '' ) {
          this.profileForm.addControl(key, this.fb.control('', [Validators.required,
            Validators.maxLength(this.getData(key).max)]));
        } else if (this.formrequired.indexOf(key) !== -1 && this.getData(key).type === 'email' ) {
          this.profileForm.addControl(key, this.fb.control('', [Validators.required, Validators.email]));
        } else if (this.formrequired.indexOf(key) !== -1 && this.getData(key).pattern !== '' ) {
          this.profileForm.addControl(key, this.fb.control('', [Validators.required,
            Validators.pattern(this.getData(key).pattern)]));
        } else if (this.formrequired.indexOf(key) !== -1 ) {
        this.profileForm.addControl(key, this.fb.control('', Validators.required));
        } else if (this.getData(key).min !== '' && this.getData(key).max !== '' && this.getData(key).pattern !== '') {
          this.profileForm.addControl(key, this.fb.control('', [Validators.minLength(this.getData(key).min),
              Validators.maxLength(this.getData(key).max), Validators.pattern(this.getData(key).pattern)]));
        } else if (this.getData(key).min !== '' && this.getData(key).max !== '') {
          this.profileForm.addControl(key, this.fb.control('', [Validators.minLength(this.getData(key).min),
              Validators.maxLength(this.getData(key).max)]));
        } else if (this.getData(key).min !== '' ) {
          this.profileForm.addControl(key, this.fb.control('', Validators.minLength(this.getData(key).min)));
        } else if (this.getData(key).pattern !== '' ) {
          this.profileForm.addControl(key, this.fb.control('', Validators.pattern(this.getData(key).pattern)));
        } else {
          this.profileForm.addControl(key, this.fb.control(''));
        }
      });
    });

    });

  }


  getData(name) {
    return this.formdata[name];
  }
  getRequired() {
    return this.formrequired;
  }
submit() {
  this.submitted = true;
 // console.log(this.profileForm.value);
  console.log(this.profileForm);
  if (this.profileForm.invalid) {
    return;
} else {
  this.formResult = this.profileForm.value;
}
  console.log(this.profileForm.value);
}



}


