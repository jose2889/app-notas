import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  notes = [
    {'id':1, 'title':'nota', 'description':'muy bien'},
    {'id':1, 'title':'nota', 'description':'muy bien'}
  ]   

  datos = {'id':null, 'title':null, 'description':null};

  show:boolean = false;
  editing:boolean = false;

  addNote() {
    this.show = true;
     
  }
  createNote (){
    this.datos.id = Date.now();
    this.notes.push(this.datos);  
    console.log(this.datos);    
    this.datos =  {'id':null, 'title':null, 'description':null};
    this.show = false;
  }
  
}

