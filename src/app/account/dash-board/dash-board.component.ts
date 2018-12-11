import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styles: []
})
export class DashBoardComponent implements OnInit {

  data: any;

  constructor(private service: UsersService) {
    this.service.getData().subscribe(
      (data) => this.data = data
    );
  }

  ngOnInit() {
  }

}
