import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    };

     this.plusDivs = this.plusDivs.bind(this);
  }

  // componentDidUpdate(prevState) {
  //    var tomovedivwidth = ReactDOM.findDOMNode(this.refs.mySlides.offsetWidth);
  // }

  plusDivs(n) {
    this.setState({
      //tomovedivwidth :this.mySlides.offsetWidth,
      slideIndex: this.state.slideIndex + n
    });
    this.showDivs(this.state.slideIndex);
  }
  showDivs(n) {
    //console.log(n);
    var tomovedivwidth  =  ReactDOM.findDOMNode(this.refs.mySlides).offsetWidth
    var tomove = tomovedivwidth * n;
    console.log(tomove);
    var tabs = this.refs.Tabs;
  }
  render() {
    return (
      <div>
        <div className="main">
          <button id="before" onClick={() => this.plusDivs(-1)}>
            &#10094;
          </button>
          <div className="header">
            <div id="Tabs"  ref="Tabs">
              <ul className="clearfix">
                {/*<li className="mySlides" ref={(li) => { this.mySlides = li; }} id="Tab1"><a href="#">Tab 1</a></li>*/}
                <li className="mySlides" ref="mySlides" id="Tab1">
                  <a href="#">Tab 1</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab2">
                  <a href="#">Tab 2</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab3">
                  <a href="#">Tab 3</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab4">
                  <a href="#">Tab 4</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab5">
                  <a href="#">Tab 5</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab6">
                  <a href="#">Tab 6</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab7">
                  <a href="#">Tab 7</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab8">
                  <a href="#">Tab 8</a>
                </li>
                <li className="mySlides" ref="mySlides" id="Tab9">
                  <a href="#">Tab 9</a>
                </li>
              </ul>
            </div>
          </div>
          <button id="after" onClick={() => this.plusDivs(1)}>&#10095;</button>
        </div>
      </div>
    );
  }
}

export default App;
