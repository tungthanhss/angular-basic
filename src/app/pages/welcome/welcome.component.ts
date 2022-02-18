import {Component, OnInit} from '@angular/core';
import {User} from '../../models';
import {UserService} from '../../shared/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loading = false;
  users: User[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
