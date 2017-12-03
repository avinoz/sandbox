import React, { Component } from "react";
import $ from 'jquery'

class ex4 extends React.Component {
  componentDidMount() {
     // adjusts JS with window size change
     // $(window).resize(function() {
     prepSite();
     // });
  }

  render() {
    return (
      <div>
        <div class="opening-blurb">
          <h2>Moving Plane</h2>
          <p>This experiment demonstrates the easiest way to break 2-dimensionality in web design. It’s not the most effective but the concept is to break the rendering plane from the browser frame and make it respond to the user’s cursor location.
          </p>
        </div>

        <div class="floating-plane-cont">
          <div class="floating-plane"></div>
        </div>

      </div>
    );
  }
}

export default ex4



// prep site
function prepSite() {

  var window = $(document)
  var winWidth = window.width()
  var winHeight = window.height()

  // defines mouse location
  window.mousemove (function(e) {
    $('.openSite').fadeIn(2000);
    var mouseX = e.pageX/winWidth*100
    var mouseY = e.pageY/winHeight*100
    // console.log("X " + mouseX + " , Y " + mouseY);
    planeAnimate( mouseX, mouseY , winHeight );

  });

};

// animate planes
function planeAnimate( mouseX, mouseY , winHeight ) {

  var Xaxis = mouseX / 16.7;
  var Yaxis = mouseY / 16.7;

  var cssOriBg = "rgba(30,30,30,.8)"
  var cssAltBg = "red"

  var cssOriPlane = "scale(1) rotateX(" + (Yaxis - 3) + "deg) rotateY(" + (Xaxis - 3) + "deg)"
  var cssAltPlane = "scale(0.98) rotateX(" + (Yaxis - 3) + "deg) rotateY(" + (Xaxis - 3) + "deg)"

  $(".floating-plane").css("transform", cssOriPlane );
  $(".floating-plane").mousedown(function() {
   // $(this).css("background", cssAltBg);
   $(this).css("transform", cssAltPlane);
  });
   $(".floating-plane").mouseup(function() {
   // $(this).css("background", cssOriBg);
   $(this).css("transform", cssOriPlane );
  });
};


// if ($(".cover").is(':hidden')) { console.log("hello")}