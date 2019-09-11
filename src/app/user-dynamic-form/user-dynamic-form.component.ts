import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../model/Field.interface';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from './../service/form.service';

@Component({
  selector: 'app-user-dynamic-form',
  templateUrl: './user-dynamic-form.component.html',
  styleUrls: ['./user-dynamic-form.component.css']
})
export class UserDynamicFormComponent implements OnInit {
  typeArray: [] = [];
  regConfig: FieldConfig[] = [];
  formdata: {};
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(private forms: FormService) {
    this.forms.getForm().subscribe(res => {
      this.formdata = res[0].schema.properties;
      /* res[0].form[0].items.forEach(newkey => {
        newkey.items.forEach(key => {
          this.regConfig.push(this.getData(key));
        });
      });
      const index = this.regConfig.indexOf(this.regConfig[0], 0);
      if (index > -1) {
        this.regConfig.splice(index, 1);
      } */
    });

  
   /*  this.result[0].forEach(element => {
        console.log(element);
    }); */
  }
  getData(name) {
    return this.formdata[name];
  }


 /*  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
  ]; */

ngOnInit() {
  this.forms.getUserForm().subscribe(res => {
    this.regConfig = res;
    // console.log(res);
    /* res.forEach(newkey => {
      this.regConfig.push(newkey);
    }); */
  });
  console.log('test', this.regConfig);
}
submit(value: any) {}
}
