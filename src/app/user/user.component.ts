import { Component, OnInit } from '@angular/core';
import { FindDataService } from '../find-data.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
user!:User

  findUser(name:string){
    this.profile.findData(name)
    this.user=this.profile.user

  }

  constructor(private profile:FindDataService) { }

  ngOnInit(): void {
  }

}
