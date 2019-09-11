import { MenuService } from './../../service/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent implements OnInit {
  public menutype : any;
  constructor(private menu:MenuService) { }
  ngOnInit() {
    this.getmenu();
  }
  getmenu(){
    return this.menu.getAdminMenu().subscribe(res => {
      this.menutype = res['properties'];
      return res;

    });
  }



}

