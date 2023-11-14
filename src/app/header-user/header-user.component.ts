import { Component } from '@angular/core';
import { UserserviceService } from '../serviceuser/userservice.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {

  constructor(private userService: UserserviceService) {}

  public userId: any = "salut";
  public nom:any ="salut"
  // ngOnInit() {
  //    this.userId = this.userService.getUserId();
  //   console.log(this)
  // // Faites ce que vous devez avec l'identifiant récupéré
  // }

}
