import { Component } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent {
  logic = "design";

  design(){
    console.warn(
      this.logic="design"

    );

  }

  image(){
    console.warn(

      this.logic="image"
    );

  }
  text(){
    console.warn(

      this.logic="text"
    );


  }
  review(){
    console.warn(

      this.logic="review"
    );

  }
  submit(){
    console.warn(

      this.logic="submit"
    );

  }

}
