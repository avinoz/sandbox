import React, { Component } from "react";
import $ from 'jquery'

// GOBAL FUNCTIONS & VARIABLES
var opened = false;

class ex8 extends React.Component {
  componentDidMount() {
    var dial = $(".dial"),
        currdeg  = 0;

   $(".dial-package").mousemove(function(e){
      var parentOffset = $(this).offset();
      var posY = e.pageY - parentOffset.top;
      var rotNum = (posY - 80) * 5;

     dial.css({
         "-webkit-transform": "rotateX("+rotNum+"deg)",
         "-moz-transform": "rotateX("+rotNum+"deg)",
         "-o-transform": "rotateX("+rotNum+"deg)",
         "transform": "rotateX("+rotNum+"deg)"
       });
   });

   $('.item').css('display', 'none');
   $(".dial-cont").mouseenter(function(e){
       e.stopPropagation();
       $('.item').css('display', 'block');
       $('.temp').css('display', 'none');
       $('.state-btns').css('display', 'none');
     }).mouseleave(function(e){
       e.stopPropagation();
       $('.temp').css('display', 'block');
       $('.state-btns').css('display', 'block');
       $('.item').css('display', 'none');
     });

  }


  render() {
    return (
      <div>
      <div class="opening-blurb">
        <h2>Rolodex Menu</h2>
        <p>What’s the best way to show a series of menu items? Dropdown of course! Here is an alternative because, why not? There are times for pure function but there are other times where we can afford to be playful. The algorithm needs some fine tuning but you get the gist of the concept.
        </p>
      </div>

      <div class="dial-package">
      <div class="dial-cont">
       <div class="arrow">&#60;</div>

       <div class="state-btns">
          <div class="btn-toggle">Look here</div>
          <div class="btn-toggle">Look there</div>
        </div>


       <div class="temp">Rolodex Menu</div>

        <div class="dial">
          <div class="item dial-a">Humming fish</div>
          <div class="item dial-b">Swimming birds</div>
          <div class="item dial-c">Services offered</div>
          <div class="item dial-d">Space kittens</div>
          <div class="item dial-e">Bowling dogs</div>
          <div class="item dial-f">Driving reptiles</div>
          <div class="item dial-g"></div>
          <div class="item dial-h"></div>
        </div>
      </div>

      </div>

    </div>


    );
  }
}

export default ex8


