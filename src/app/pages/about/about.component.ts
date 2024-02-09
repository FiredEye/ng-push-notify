import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private notifyService:NotifyService){}
  requestNotification(){
    this.notifyService.requestnotifyPermission()
    }
}
