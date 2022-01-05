import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: [ './hobbies.component.css'
  ]
})
export class HobbiesComponent implements OnInit {
  itemsPerSlide = 4;

 
  animes = [
    {string: '1 - Shingeki no Kyojin', image: '../../../../assets/img/animes/1.jpg'},
    {string: '2 - Hajime no Ippo', image: '../../../../assets/img/animes/2.jpeg'},
    {string: '3 - Naruto Shippuden', image: '../../../../assets/img/animes/3.jpg'},
    {string: '4 - Kimetsu no Yaiba', image: '../../../../assets/img/animes/4.jpg'},
    {string: '5 - Steins:Gate', image: '../../../../assets/img/animes/5.jpg'},
    {string: '6 - Death Note', image: '../../../../assets/img/animes/6.jpg'},
    {string: '7 - One Punch Man', image: '../../../../assets/img/animes/7.jpg'},
    {string: '8 - One Piece', image: '../../../../assets/img/animes/8.jpg'},
    {string: '9 - Kiseiju', image: '../../../../assets/img/animes/9.jpg'},
    {string: '10 - Dragon Ball', image: '../../../../assets/img/animes/10.jpg'},
    {string: '11 - Another', image: '../../../../assets/img/animes/11.jpg'},
    {string: '12 - Blue Exorcist', image: '../../../../assets/img/animes/12.jpg'}
  ];

  series = [
    {string: '1 - Breaking Bad', image: '../../../../assets/img/serie/1.jpg'},
    {string: '2 - Arcane', image: '../../../../assets/img/serie/2.jpg'},
    {string: '3 - Game of Thrones', image: '../../../../assets/img/serie/3.jpeg'},
    {string: '4 - Vikings', image: '../../../../assets/img/serie/4.jpg'},
    {string: '5 - Prison Break', image: '../../../../assets/img/serie/5.jpeg'},
    {string: '6 - Two and a Half Men', image: '../../../../assets/img/serie/5.jpg'},
    {string: '7 - Everybody hates Chris ', image: '../../../../assets/img/serie/6.jpg'},
    {string: '8 - Ricky and Morty', image: '../../../../assets/img/serie/7.jpg'},
    {string: '9 - Atypical', image: '../../../../assets/img/serie/8.jpeg'},
    {string: '10 - Black Mirror', image: '../../../../assets/img/serie/9.jpeg'},
    {string: '11 - Sex Education', image: '../../../../assets/img/serie/11.jpg'},
    {string: '12 -  Round 6', image: '../../../../assets/img/serie/12.jpg'}
  ];

  games = [
    {string: '1 - Hollow Knight', image: '../../../../assets/img/games/1.jpg'},
    {string: '2 - God of War Trigonlogia', image: '../../../../assets/img/games/2.jpg'},
    {string: '3 - The Last of us', image: '../../../../assets/img/games/3.jpg'},
    {string: '4 - Celeste', image: '../../../../assets/img/games/4.jpg'},
    {string: '5 - Skate 3', image: '../../../../assets/img/games/5.jpg'},
    {string: '6 - Cuphead', image: '../../../../assets/img/games/cuphead.jpg'},
    {string: '7 - League of legends', image: '../../../../assets/img/games/7.jpg'},
    {string: '8 - FarCry Primal', image: '../../../../assets/img/games/8.jpeg'},
    {string: '9 - Brawlhalla', image: '../../../../assets/img/games/9.jpeg'},
    {string: '10 - Klonoa',image: '../../../../assets/img/games/10.jpg'},
    {string: '11 - Grand Theft Auto V',image: '../../../../assets/img/games/11.jpg'},
    {string: '12 - Metal Slug',image: '../../../../assets/img/games/12.jpg'}
  ];

  livros = [
    {string: '1 - As cronicas de gelo e fogo', image: '../../../../assets/img/livros/1.jpg'},
    {string: '2 - Flores para Algernon', image: '../../../../assets/img/livros/2.jpg'},
    {string: '3 - Eu, Robo', image: '../../../../assets/img/livros/3.jpg'},
    {string: '4 - Box Psicologia', image: '../../../../assets/img/livros/psi.jpeg'},
    {string: '5 Box Estratégia- ', image: '../../../../assets/img/livros/5.jpg'},
    {string: '6 - O ladrão de Raios', image: '../../../../assets/img/livros/6.jpg'},
    {string: '7 - Código Limpo', image: '../../../../assets/img/livros/7.jpg'},
    {string: '8 - Vivendo e Aprendendo', image: '../../../../assets/img/livros/8.jpg'},
    {string: '9 - Grandes Lideres', image: '../../../../assets/img/livros/9.jpg'},
    {string: '10 - Tudo sobre Mitologia Grega', image: '../../../../assets/img/livros/s10.jpg'},
    {string: '11 - O Preço da Desonra', image: '../../../../assets/img/livros/L.jpg'},
    {string: '12 - O mundo de Sofia', image: '../../../../assets/img/livros/11.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
