import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuObj = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  public getAdminMenu() {
    this.http.get('http://localhost:3000/menu/administratormenu').subscribe(res => {
    this.setMenuData(res);
  });
    return this.http.get('http://localhost:3000/menu/administratormenu');
  }
  public updateMenu(updatedata) {
   // console.log(data);
   const menuData = this.getMenuData();
    menuData['properties'] = updatedata
    return this.http.put('http://localhost:3000/menu/update/administratormenu', menuData);
  }
  public setMenuData(val) {
    this.menuObj = val;
  }
  public getMenuData() {
    return this.menuObj;
  }
}
