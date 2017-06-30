import React from "react";
import ReactDOM from "react-dom";


// var test = 0;
class App extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  slideIndex: 0,
                  selectedID: null,
                  handleToUpdate: null
            };

            this.plusDivs = this.plusDivs.bind(this);
            this.handleClick = this.handleClick.bind(this);
            this.test = this.test.bind(this);
      }

      // componentDidUpdate(prevState) {
      //    var tomovedivwidth = ReactDOM.findDOMNode(this.refs.mySlides.offsetWidth);
      // }

      handleClick(e) {
            //   console.log(e.currentTarget);
            var currentli = e.currentTarget.id;
            // var dataList = document.getElementById("data").children;
            this.setState({
                  //tomovedivwidth :this.mySlides.offsetWidth,
                  selectedID: currentli
            });
      }

      componentDidMount() {
            var beforebutton = this.refs.beforebutton
            beforebutton.disabled = true;
      }

      plusDivs(n) {
            var slideIndex = this.state.slideIndex + n;
            this.setState({
                  //tomovedivwidth :this.mySlides.offsetWidth,
                  slideIndex: slideIndex
            });
            // test = 10;
            this.showDivs(slideIndex);
      }
      showDivs(n) {
            //console.log(n);
            var tomovedivwidth = ReactDOM.findDOMNode(this.refs.mySlides).offsetWidth
            var tomove = tomovedivwidth * n;
            console.log(tomove);

            var beforebutton = this.refs.beforebutton;
            if (tomove == 0) {
                  beforebutton.disabled = true;
            } else {
                  beforebutton.disabled = false;
            }
            var tabs = this.refs.Tabs;
            var header = this.refs.header;
            tabs.style.left = -tomove + 'px';

            var headerwidth = header.clientWidth;
            var tabswidth = tabs.clientWidth;
            var remain = tabswidth - headerwidth;

            var afterbutton = this.refs.afterbutton;
            var disableright = parseInt(tomove);
            var compare = parseInt(remain);
            if (Math.floor(disableright) == (Math.floor(compare))) {
                  afterbutton.disabled = true;
            } else {
                  afterbutton.disabled = false;
            }
      }

      test(name) {
            //      this.refs.name.style.display = 'block';
      }
      render() {

            return (
                  <div>
                        <div className="main">
                              <button id="before" ref="beforebutton" onClick={() => this.plusDivs(-1)}>
                                    &#10094;
                               </button>
                              <div className="header" ref="header">
                                    <div id="Tabs" ref="Tabs" >
                                          <ul className="clearfix">
                                                {/*<li className="mySlides" ref={(li) => { this.mySlides = li; }} id="Tab1"><a href="#">Tab 1</a></li>*/}
                                                <li className="mySlides" ref="mySlides" id="Tab1" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 1</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab2" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 2</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab3" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 3</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab4" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 4</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab5" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 5</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab6" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 6</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab7" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 7</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab8" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 8</a>
                                                </li>
                                                <li className="mySlides" ref="mySlides" id="Tab9" onClick={(e) => this.handleClick(e)}>
                                                      <a href="#">Tab 9</a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                              <button id="after" ref="afterbutton" onClick={() => this.plusDivs(1)}>&#10095;</button>
                              <Pane id="data" ref="pk" test={this.test} selectedID={this.state.selectedID} handleToUpdate={this.state.handleToUpdate}>
                                    <div id="Div_Tab1" ref="Div_Tab1" >
                                          <div>Dolly</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>

                                    <div id="Div_Tab2" ref="Div_Tab2">
                                          <div>Gudal</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab3" ref="Div_Tab3">
                                          <div>Chandu</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab4" ref="Div_Tab4">
                                          <div>Papa</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab5" ref="Div_Tab5">
                                          <div>Mommy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab6" ref="Div_Tab6">
                                          <div>Minions</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab7" ref="Div_Tab7">
                                          <div>Home</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab8" ref="Div_Tab8">
                                          <div>BUNDI</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                                    <div id="Div_Tab9" ref="Div_Tab9">
                                          <div>Gurgaon</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Coat</div>
                                          <div>Home</div>
                                          <div>Building</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Bottle</div>
                                          <div>Elephant</div>
                                          <div>1</div>
                                          <div>Home</div>
                                          <div>Cup</div>
                                          <div>Elephant</div>
                                          <div>Toy</div>
                                          <div>Home</div>
                                          <div>Cat</div>
                                          <div>Elephant</div>
                                          <div>Teddy</div>
                                          <div>Mobile</div>
                                          <div>Cat</div>
                                          <div>Ant</div>
                                    </div>
                              </Pane>
                              <div id="popup"></div>
                        </div>
                  </div>
            );
      }
}

class Pane extends React.Component {

      constructor(props) {
            super(props);

            this.test = this.test.bind(this);
            this.rollover = this.rollover.bind(this);
      }

      test() {
            console.log(Hi);
      }

      componentWillReceiveProps(newProps) {
            console.log('test');
      }

      labels(child, index) {

            var splitName = child.props.id.split("_");
            var surname = splitName[splitName.length - 1];
            var c = surname;

            if (this.props.selectedID == c) {
                  var show = child.props.id;
                  // ReactDOM.findDOMNode(child.ref).style.display = 'block';    
                  // this.props.test(show);
                  // this.props.handleToUpdate = show;
                  this.props.children.map(function (data, index) {
                        console.log(data);
                        if (data.ref == show) {
                              data.ref.style.display = 'block';
                        }
                        else {
                              data.ref.style.display = 'none';
                        }
                  })
            }
      }

      rollover(e)
      {
            console.log(e.currentTarget)
      }

      render() {
            // var handleToUpdate = this.props.handleToUpdate;
            // var _makeBlue = function (element) {
            //        var splitName = child.props.id.split("_");
            //        var surname = splitName[splitName.length - 1];
            //        var c = surname;
            //       if (this.props.selectedID == c) {
            //       return React.addons.cloneWithProps(element, { style: { display: 'block' } });
            // }
            // else{
            //       return null;
            // }

            // };
            var children = React.Children.map(this.props.children, function (child, i) {

                  var splitName = child.props.id.split("_");
                  var surname = splitName[splitName.length - 1];
                  var c = surname;

                  // if (this.props.selectedID == c) {
                  // React.children.map(this.props.children, function (child, i) {
                  //       return React.cloneElement(child, { onMouseOver: this.rollover.bind(this) });
                  // },this);
                  // }
                  // else
                  // {
                  //       return null;
                  // }

                  // var childrenWithProps = React.Children.map(this.props.children, function(child) {
                   
                  // });  


                  child.props.children.map(function (data, index) {
                        console.log(data.props.children);
                  })

                  if (this.props.selectedID == c) {
                        React.children.map(child.props.children, function (childe, i) {
                        return React.cloneElement(childe, { onMouseOver: this.rollover.bind(this) });
                        },this);
                        return React.cloneElement(child, { style: { display: 'block' } });
                  }
                  else {
                        return React.cloneElement(child, { style: { display: 'none' } });
                  }

            }, this)
            return (
                  <div>
                        {/*{this.props.children.map(this.labels.bind(this))}*/}
                        {children}
                  </div>
            );
      }
}

Pane.propTypes = {
      children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element
      ]).isRequired
}


export default App;
