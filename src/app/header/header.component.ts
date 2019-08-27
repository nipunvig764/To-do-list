import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/datastorage.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService:DataStorageService,private authService:AuthService){}

  onLogout(){
    this.authService.logout();
  }



  ngOnInit() {
  }

}
