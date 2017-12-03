import React, { Component } from "react";
import $ from 'jquery'

class ex3 extends React.Component {
  componentDidMount() {
    prepSite();
    $('td').click(function(e) {
      if ($(this).parent().parent().parent().parent().attr('class') == "grid-plane A") {
        bool = false;
      } else {
        bool = true;
      };
      console.log(bool);
    });

  }


  render() {
    return (
      <div>
      <div class="opening-blurb">
        <h2>3D Grid</h2>
        <p>I took the idea of cards even further at one point and organized them in ‘3-dimensional' space. I was fascinated with mouse tracking and really wanted to break the idea that websites need to be flat, existing only in 2-dimensions. I took a lot of cues from game design where they have complicated UIs but didn’t deny themselves from style, ornamentation and dimensions.
        </p>
      </div>

      <div class="plane-cont">
        <div class="grid-plane 3D-A">
          <table>
          <tr>
              <td>This is Plane A</td>
              <td>Smith</td>
              <td>Android</td>
          </tr>
          <tr>
              <td>Eve</td>
              <td>No Touch</td>
              <td>Reid</td>
            </tr>
          </table>
        </div>

        <div class="grid-plane 3D-B">
          <table>
          <tr>
              <td>This is Plane B</td>
              <td>Torah</td>
              <td>Minons</td>
            </tr>
            <tr>
              <td>Dragons</td>
              <td>Rainclouds</td>
              <td>Ballons</td>
            </tr>
          </table>
        </div>
      </div>
      </div>

    );
  }
}

export default ex3






var bool = true;

function prepSite() {
  var window = $(document)
  var winWidth = window.width()
  var winHeight = window.height()

  // defines mouse location
  window.mousemove (function(e) {
    var Xaxis = e.pageX/winWidth*100
    var Yaxis = e.pageY/winHeight*100/16.7

    var color = randomColor();
    clickability(color)

    var planeObj = planeVariable(Xaxis, Yaxis)
    planeAnimate( planeObj, bool);
  });
};


function planeVariable(Xaxis, Yaxis) {
  var cssPlane = "scale(1) rotateX(" + (Yaxis - 3) + "deg) rotateY(" + (Xaxis - 50) + "deg) translateZ(0em)"
  var cssPlaneB = "scale(1) rotateX(" + (Yaxis - 3) + "deg) rotateY(" + (Xaxis - 50) + "deg) translateZ(20em)"
  return [ cssPlane , cssPlaneB ]
}

function planeAnimate( planeObj, bool ) {
  if (bool == true) {
    console.log("animate " + bool)
    $(".grid-plane.3D-A").css("transform", planeObj[0] );
    $(".grid-plane.3D-B").css("transform", planeObj[1] );
  } else {
    $(".grid-plane.3D-A").css("transform", planeObj[1] );
    $(".grid-plane.3D-B").css("transform", planeObj[0] );
  }
};

function clickability(color) {
  $("td").mousedown(function() {
    $(this).css({
      "background" : color,
      "transform" : "scale(.95)"
    });
  });
   $("td").mouseup(function() {
    $(this).css("transform", "scale(1)");
  });
}

function randomColor() {
  return '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
}