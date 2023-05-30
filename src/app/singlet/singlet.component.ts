import { Component } from '@angular/core';

@Component({
  selector: 'app-singlet',
  templateUrl: './singlet.component.html',
  styleUrls: ['./singlet.component.css']
})
export class SingletComponent {

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
