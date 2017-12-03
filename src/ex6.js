import React, { Component } from "react";
import $ from 'jquery'

class ex6 extends React.Component {
  render() {
    return (
      <div>
      <div class="opening-blurb">
        <h2>Flexbox Table</h2>
        <p>How do tables deal with nested fields? How might these look on a responsive site? Here is a demo that shows nested fields collapsing as the browser window changes size. Each cell gets their own heading label shown in a smaller italicized font. This example has been simplified for this site, but the top header would have all the white space removed and it would be used for sorting.
        </p>
      </div>

        <div class="flexbox-cont">
          <div class="container-fluid">

            <div class="resource-type">
              <p>Flex-table test</p>
              <div class="btn-cont">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </div>

            <div class="crd-item flexbox-table-header">
              <div class="crd-row-A">
                <div class="flx-top sz-remediation"></div>
                <div class="flx-top sz-4">Reason</div>
                <div class="flx-top sz-7">Cats conquering space?</div>
                <div class="flx-top sz-2">Why</div>
              </div>

               <div class="crd-scroll">
                <div class="crd-col-cont">
                 <div class="crd-row-C">
                   <div class="flx-stack sz-3">Name</div>
                   <div class="flx-stack sz-1">Hobby</div>
                   <div class="flx-stack sz-2">Food</div>
                   <div class="flx-stack sz-2">Birthday</div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div class="container-fluid">

          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>

          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar active"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>

          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar active"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

             <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

             <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

             <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

           <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>


          <div class="crd-item">
            <div class="crd-row-A">
             <div class="sz-alert-bar active"></div>
             <div class="flx-reach sz-remediation"><img src="img/triangle.png"/></div>
             <div class="flx-reach sz-4"><i>Reason</i><a>None</a></div>
             <div class="flx-reach sz-7"><i>Cats conquering space?</i>But of course! They rock!</div>
             <div class="flx-reach sz-2"><i>Why</i>true</div>
            </div>

            <div class="crd-scroll">
             <div class="crd-col-cont">

            <div class="crd-row-C">
              <div class="flx-stack sz-3"><i>Name</i><a>Alvin the chipmunk</a></div>
              <div class="flx-stack sz-1"><i>Hobby</i>eat</div>
              <div class="flx-stack sz-2"><i>Food</i>pizza & beer</div>
              <div class="flx-stack sz-2"><i>Birthday</i>Nov 9, 2016</div>
            </div>
          </div>
          </div>
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ex6