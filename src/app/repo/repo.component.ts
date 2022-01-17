import { Component, OnInit  ,Output,EventEmitter} from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  fillImput= new User("","","","",new Date(),0,0,0)
  constructor() { }
@Output()getUser:EventEmitter<string>=new EventEmitter<string>()
find(){
  this.getUser.emit(this.fillImput.login)
} 
  ngOnInit(): void {
  }

}
