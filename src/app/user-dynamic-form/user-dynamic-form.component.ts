import { Component, ViewChild, OnInit } from '@angular/core';
import { FieldConfig } from '../model/Field.interface';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { FormService } from './../service/form.service';

@Component({
  selector: 'app-user-dynamic-form',
  templateUrl: './user-dynamic-form.component.html',
  styleUrls: ['./user-dynamic-form.component.css']
})
export class UserDynamicFormComponent implements OnInit {
  formdata: {};
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(private forms: FormService) {
    this.forms.getForm().subscribe(res => {
      const main = [];
      this.formdata = res[0].schema.properties;
      res[0].form[0].items.forEach(newkey => {
        newkey.items.forEach(key => {
          const data = this.getData(key);
          main.push(data);
        // console.log(data);
        });

      });
      localStorage.setItem('jsondata', JSON.stringify(main));
    });
  }
  regConfig: FieldConfig[] = JSON.parse(localStorage.getItem('jsondata'));
  getData(name) {
    return this.formdata[name];
  }
  ngOnInit() {
  }
  submit(value: any) {
   }
}
