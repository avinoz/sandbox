import React, { Component } from "react";
import $ from 'jquery'

// GOBAL FUNCTIONS & VARIABLES
var magenta = "#d6006c"
var cyan = "#009dd8"


class ex1 extends React.Component {

  componentDidMount() {
    isMobile();
    clickAnimate( magenta , cyan );

    // adjusts JS with window size change
    $(window).resize(function() {
      prepSite();
    });

    if (isMobile() == true) {
      mobilePrepSite();
    } else {
      prepSite();
    }
  }


  render() {
    return (
      <div>
        <div class="opening-blurb">
          <h2>Ball Play</h2>
          <p>At one point I was looking to re-create my personal site and came to the conclusion that my work is comprised of two categories: physical work (buildings, spaces, furniture) and virtual work (websites, branding, graphics). The ball is symbolic of my body of work and I created the 3D illusion of it spinning as you move your mouse through JS calculations and CSS manipulation. In the original concept, when you choose a side, the background would change to that color and show you the related work.</p>
        </div>


        <div class="ball-page-cont">

          <div class="ball-plane cir-C debug"></div>
          <div class="ball-plane cir-A debug"></div>
          <div class="cir-D debug">

            <div class="text-cont">
              <div class="title-left">DIGITAL</div>
              <div class="ball-cont">
                <div class="half-left">
                  <div class="grow-right"></div>
                </div>
                <div class="half-right">
                  <div class="grow-left"></div>
                </div>
              </div>
              <div class="title-right">PHYSICAL</div>
            </div>
            <div id="ball-shadow"></div>

          </div>
          <div class="ball-plane cir-B debug"></div>
        </div>

      </div>
    );
  }
}

export default ex1





// prep site
function mobilePrepSite() {
  window.addEventListener('load', function(){

      var screen
      var hello = document.getElementById('hello')
      var statusdiv = document.getElementById('hello')
      $('.ball-page-cont').fadeIn('slow');

      hello.addEventListener('touchmove', function(e){
        // reference first touch point for this event
        var touchobj = e.changedTouches[0]
        var distX = parseInt(touchobj.clientX)
        var distY = parseInt(touchobj.clientY)

        // mobile screen size
        var ratio = window.devicePixelRatio || 1;
        var winWidth = screen.width * ratio / 2;
        var winHeight = screen.height * ratio / 2;

        var mouseX = Math.min(Math.max(parseInt(distX/winWidth*100), 1), 100);
        var mouseY = distY/winHeight*100

        planeAnimate( mouseX, mouseX , winHeight )
        ballAnimate( mouseX , mouseY );

        statusdiv.innerHTML = 'Status: touchmove<br> Horizontal: ' + distX + 'px <br>Vertical: ' + distY + "px" + "<br>" + winHeight + "<br>" + winWidth + "<br>" + mouseX + "<br>" + mouseY
        e.preventDefault()
      }, false)
    }, false)
};




//////////////////////
// SITE PREPARATION //
//////////////////////


// detect mobile
function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // $("body").css("background", "red")
    return true;
  } else {
    return false;
  }
}



// prep site
function prepSite() {

  var window = $(document)
  var winWidth = window.width()
  var winHeight = window.height()

  // defines mouse location
  window.mousemove (function(e) {
    $('.ball-page-cont').fadeIn(300);
    var mouseX = e.pageX/winWidth*100
    var mouseY = e.pageY/winHeight*100
    // console.log("X " + mouseX + " , Y " + mouseY);

    planeAnimate( mouseX, mouseY , winHeight )
    ballAnimate( mouseX , mouseY );

  });

  hoverAnimate();
};


///////////////////////
// ANIMATE FUNCTIONS //
///////////////////////

// clicking a half transition
function clickAnimate( colorA , colorB ) {
  $('.half-left').click(function(){
    clickHalf(colorA)});
  $('.half-right').click(function(){
    clickHalf(colorB)});

  function clickHalf(color) {
    $('body').css({background: color, transition: 'ease .5s all'})
    $('.ball-plane').toggle();
    $('.text-cont').css({
      transform: 'scale(11)',
      transition: 'ease .5s all',
      opacity: 0
    })
  };
}


// hovering hover half animation
function hoverAnimate() {
  $('.half-left').hover( function(){
    $('.half-left, .grow-left').css("-webkit-filter", "brightness(110%)");
    $('.title-left').fadeToggle('fast');
  }, function() {
    $('.title-left').toggle();
    $('.half-left, .grow-left').css("-webkit-filter", "brightness(100%)");
  });

 $('.half-right').hover( function(){
    $('.half-right, .grow-right').css("-webkit-filter", "brightness(110%)");
    $('.title-right').fadeToggle('fast');
  }, function() {
    $('.title-right').toggle();
    $('.half-right, .grow-right').css("-webkit-filter", "brightness(100%)");
  });
}


// make 3D ball
function ballAnimate( Xaxis, Yaxis ) {

  // ball with X axis movement
  if (Xaxis < 50) {
    $(".grow-right").css("width", "0px");
    $(".grow-left").css("width", 100 - Xaxis*2 + "px");
  } else if (Xaxis > 50) {
    $(".grow-left").css("width", "0px");
    $(".grow-right").css("width", (Xaxis-50)*2 + "px");
  }

  // ball with Y axis movement
  if (Yaxis < 50) {
    $(".text-cont").css("transform", "rotate(" + (50 - Yaxis) + "deg)")
  } else if (Yaxis > 50) {
    $(".text-cont").css("transform", "rotate(" + (50 - Yaxis) + "deg)")
  }
}


// animate planes
function planeAnimate( Xaxis, Yaxis , winHeight ) {

  // moves planes on X axis
  $(".cir-A").css("left", 21 - Xaxis/15 + "vw");
  $(".cir-B").css("right", 15 - Xaxis/8 + "vw");
  $(".cir-C").css("left", 36 - Xaxis/60 + "vw");

  // moves planes on Y axis
  $(".cir-A").css("top", 13 - Yaxis/20 + "vh");
  $(".cir-B").css("top", Yaxis/40 + 10 + "vh");
  $(".cir-C").css("top", Yaxis/60 + 15 + "vh");
  $(".cir-D").css("top", winHeight/38 + Yaxis/100 + "vh");
}




