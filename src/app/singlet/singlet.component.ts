import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-singlet',
  templateUrl: './singlet.component.html',
  styleUrls: ['./singlet.component.css']
})
export class SingletComponent {
  constructor(private renderer: Renderer2){}
  // ############################ variables #################################
  // use for disable
  imageDp = "block";
  colorDp = "none";
  thumbnail = "none";
  color_thumbnail = "none";
  // use for data pas
  color = "#faeab1";
  thumbNail = "";
  cthumb = "";
  // use for section
  logic = "design";
  // for slide button
  slide = 0;

  // use for thumnail image
  // ################################ use for main image disable ##################################
  mainImage(data: string) {
    this.imageDp = "none";
    if (data == "thumbnail") {
      this.thumbnail = "block";
      this.colorDp = "none";
    } else if (data == "color") {
      this.colorDp = "block";
      this.thumbnail = "none";
      this.color_thumbnail="none";
    }else if(data == "color_thumbnail"){
      this.color_thumbnail="block";
      this.thumbnail = "none";



    }

  }
  // ###############################use for main image element disable ##################################
  updateColorDp(color: string) {
    if (color) {
      this.color = color;
    }
    this.imageDp = "block";
    this.colorDp = "none";
    this.thumbnail = "none";
    this.color_thumbnail = "none";

  }

  imageUrl(data: string): void {

    this.thumbNail = data;
    this.thumbnail = "none";
    this.imageDp = "block";
    this.colorDp = "none";
    this.color_thumbnail = "none";


  }

  updateThumbnailColor(color: string) {
    if (color) {
      this.cthumb = color;
      console.warn(color);

    }
    this.imageDp = "block";
    this.colorDp = "none";
    this.thumbnail = "none";
    this.color_thumbnail = "none";


  }


  // ########################################### use for sections  #######################################

  design() {
    console.warn(
      this.logic = "design"

    );

  }

  image() {
    console.warn(

      this.logic = "image"
    );

  }
  text() {
    console.warn(

      this.logic = "text"
    );


  }
  review() {
    console.warn(

      this.logic = "review"
    );

  }
  submit() {
    console.warn(

      this.logic = "submit"
    );

  }

  /// #################################### for slide button #############################
  side(data: number) {
    if (data == 0) {
      this.slide = -720;


    } else {
      this.slide = 0;
    }
  }


}
