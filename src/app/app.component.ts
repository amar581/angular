import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  allUser:any;

constructor(private commonService: CommonService) {}

ngOnInit(){
  this.getLatestUser();
}

addUser(formObj: any) {
  console.log(formObj)
  this.commonService.createUser(formObj).subscribe((Response) => {
    console.log("user has been added")
  })
}

getLatestUser() {
  this.commonService.getAllUsers().subscribe((Response) => {
    this.allUser = Response
  })
}

}
