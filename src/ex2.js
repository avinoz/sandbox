import React, { Component } from "react";
import $ from 'jquery'

// GOBAL FUNCTIONS & VARIABLES
var opened = false;
function open(item) {
  $(item).addClass("topic-expanded");
  $(item).children(".close-btn").toggle('slow');
}

function close() {
  $('article').removeClass("topic-expanded");
  $('article').children(".close-btn").css('display', 'none');
}


class ex2 extends React.Component {
  componentDidMount() {
    $('article').click(function(){
      if (opened) {
        close();
        open(this);
      } else {
        open(this);
        opened = true;
      }
    });

    $('.close-btn').click(function(e){
      e.stopPropagation();
      close();
      opened = false;
    });
  }

  render() {
    return (
      <div>
      <div class="opening-blurb">
        <h2>Table of Cards</h2>
        <p>For work, I deal with a lot of data and tables. This experiment was an attempt at how we can show more related data to any given row. It was also an way to explore the idea that data doesn’t have to exists in tables but that some data should be seen as cards. This concept excels well when you need your users to think of each piece of data separately particularly when that entry needs some sort of action.
        </p>
      </div>

        <div class="article-cont">
          <article class="topic">
            Table Entry A
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry B
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry C
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry D
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry E
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry F
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry G
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry H
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry I
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry J
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry K
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry L
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry M
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry N
            <div class="close-btn">X</div>
          </article>
          <article class="topic">
            Table Entry O
            <div class="close-btn">X</div>
          </article>

        </div>
      </div>
    );
  }
}

export default ex2



