import { Component } from '@angular/core';
import { NotifyService } from '../../services/notify.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private notifyService:NotifyService){}
  requestNotification(){
    this.notifyService.requestnotifyPermission()
    }
    sendToken(){
      this.notifyService.requestAndSendToken()
    }
}
