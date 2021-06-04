var Slider = function() {
  var total, $images, $slider, sliderWidth, increment = 120;
  var on = function() {
    $slider = $('.slider');
    $images = $('.slider img');
    sliderWidth = $slider.width();
    total = $images.length;
    position();
  }

  var position = function() {
    var sign, half = $('.active').index(), x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin;
    $images.each(function(index, element) {
      scaleX = scaleY = 1;
      transformOrigin = sliderWidth / 2;
      if(index < half) {
        sign = 1;
        zindex = index + 1;
        x = sliderWidth / 2 - increment * (half - index + 1);
        z =  -increment * (half - index + 1);
      } else if(index > half) {
        sign = -1
        zindex = total - index;
        x = sliderWidth / 2 + increment * (index - half + 1);
        z =  -increment * (index - half + 1);
      } else {
        sign = 0;
        zindex = total;
        x = sliderWidth / 2;
        z = 1;
        scaleX = scaleY = 1.2;
        transformOrigin = 'initial';
      }
      $(element).css(
        {
          'transform': 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
          'z-index': zindex,
          'transform-origin-x': transformOrigin
        }
      );
    });
  };

  var calculateX = function(position, sign, width) {
    switch(sign) {
      case 1:
      case 0: return position - width / 2;
      case -1: return position - width / 2;
    }
  }
  
  var imageSize = function() {
    return $slider.width() / 3;
  }
  
  var recalculateSizes = function() {
    sliderWidth = $slider.width();
    position();
  }
  
  var clickedImage = function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    position();
  }
  
  var addEvents = function() {
    $( window ).resize(recalculateSizes);
    $(document).on('click','img', clickedImage);
  }
  
  return {
    init: function() {
      on();
      addEvents();
    }
  };
}();

$(function(){
  var slider = Slider.init();
})



/*************************************************************************************************************/
/*************************************************************************************************************/

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                <ReactCSSTransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
                <div className="basedOn">Based on: <strong><a href="https://codepen.io/andyNroses/pen/KaENLb" target="_blank">andyNroses</a></strong></div>
            </div>
        )
    }
}

class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}
                style={{
                    backgroundImage: "url(http://lorempixel.com/400/200/)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
                >
            </div>
        )
    }
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))
