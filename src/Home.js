import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
      <div class="opening-blurb">
        <h2>Hello</h2>
        <p>Welcome to my sandbox. This is React app was created in a day for Ideo to showcase some of the experimental code that I have worked on in the past year. The site is embarssingly crude and I am by no means an expert coder but as a designer, I believe it is important to make sure that what I dream up is achievable. Many a times the limitiations of the technology drives design.
        </p>
        <p>
          Although coding isn't my specialty, I'd be happy to walk you through how I would code this differently given more time to put this site together. At work I am part of a team putting together a component API style guide.
        </p>
        <p>
           FYI, I normally write in SCSS with BEM convention but most of this is a conglomerate of past work so I just imported the pre-complied CSS. I've also worked with SVG animations, HTML Canvas and D3 experiments but have not included them on this site.
        </p>
        <p>
           I'm a designer and a builder. You can find stuff I've built on the web <a href="http://avinoz.github.io/">here</a> and stuff I've built in real life <a href="https://www.aviocollective.com/">here</a>. If you're seriously interested in what I do, please <a href="mailto:avinoz@gmail.com?Subject=Hello%20Alvin" target="_top">contact me</a> and ask to see exciting, private work.
        </p>
      </div>
      </div>
    );
  }
}

export default Home