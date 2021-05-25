import { Component, ContentChild, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement')
  element!: { type: string; name: string; content: string; };
  @Input()
  name!: string;
  @ViewChild("heading",{static:true}) header!: ElementRef;
  @ContentChild("contentParagraph", {static: true}) paragraph!: ElementRef;

  constructor() {
    console.log('constructor called!');
   }
  
  // ver ações que alteraram
  ngOnChanges(changes: SimpleChange){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  // iniciando o componente
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text:' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph ' + this.paragraph.nativeElement.tectContent);
    
    
  }

  //verificando ações que foram feitas
  ngDoCheck(){
    console.log('ngDoChecked called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
    console.log('Text Content of paragraph ' + this.paragraph.nativeElement.tectContent);

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  // ver ações para iniciar depois da formação do view
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!')
    console.log('Text:' + this.header.nativeElement.textContent);
  }

  // ver ações para que mudaram depois da formação do view
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  //destruir um elemento
  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
}
