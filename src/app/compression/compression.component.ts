import { Component } from '@angular/core';

@Component({
  selector: 'app-compression',
  templateUrl: './compression.component.html',
  styleUrls: ['./compression.component.css']
})
export class CompressionComponent {
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
