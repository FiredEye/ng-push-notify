import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokeService } from './services/poke.service';
import { NotifyService } from './services/notify.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokeService],
})
export class AppComponent implements OnInit {
  pokeObj: any = {};
  bidoof: any = {};
  showBidoof: boolean = false;
  objLength = 0;
  constructor(private pokeService: PokeService,private notifyService:NotifyService) {}

  ngOnInit(): void {
    // this.getPokemonData();
  }
requestNotification(){
this.notifyService.requestnotifyPermission()
}
sendToken(){
  this.notifyService.requestAndSendToken()
}
  // getPokemonData() {
  //   this.service.getPokemonData().subscribe({
  //     next: (res: any) => {
  //       this.pokeObj = res;
  //       this.objLength = Object.keys(this.pokeObj).length;
  //       console.log(this.pokeObj);
  //     },
  //   });
  // }
  // shinyBidoof() {
  //   this.service.shinyBidoof().subscribe({
  //     next: (res: any) => {
  //       console.log('res', res);
  //       this.bidoof = res.sprites.front_shiny;
  //       this.showBidoof = true;
  //     },
  //   });
  // }
}
