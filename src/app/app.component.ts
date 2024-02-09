import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokeService } from './services/poke.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PokeService],
})
export class AppComponent implements OnInit {
  pokeObj: any = {};
  bidoof: any = {};
  showBidoof: boolean = false;
  objLength = 0;
  constructor(private pokeService: PokeService,) {}

  ngOnInit(): void {
    // this.getPokemonData();
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
