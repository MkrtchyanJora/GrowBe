
export var slider = document.querySelector('.window__slider');
export var images = document.querySelectorAll('.window__slider__img-container');
export var buttonsCurrentImage = document.querySelectorAll('.window__current-img__btn');
export var btnSlideLeft = document.querySelector('.window__slide-left');
export var btnSlideRight = document.querySelector('.window__slide-right');


var imageSlider = (function() {
  var image = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4
  };
  
  
  var previousImage = image.fifth;
  var currentImage = image.first;
  var interval = null;

  
  function translateX(num) {
    var tr = 
      'transform: translateX(-' + num + '00%);' +
      '-moz-transform: translateX(-' + num + '00%);' +
      '-ms-transform: translateX(-' + num + '00%);' +
      '-o-transform: translateX(-' + num + '00%);' +
      '-webkit-transform: translateX(-' + num + '00%);';

    return tr;
  }

  
  function slideRight() {
    previousImage = currentImage;
    currentImage++;
  
    
    if(currentImage > image.fifth)
      currentImage = image.first;
    
    slider.setAttribute('style', translateX(currentImage));
  
   
    images[currentImage].classList
      .add('window__slider__img-container--opacity');
    images[previousImage].classList
      .remove('window__slider__img-container--opacity');

    
    buttonsCurrentImage[currentImage].classList
      .add('window__current-img__btn--current');
    buttonsCurrentImage[previousImage].classList
      .remove('window__current-img__btn--current');
  }

  return {
  
    goToImage: function(imageNumber) {
      clearInterval(interval);

      
      var beforeGoingToImage = currentImage;
      images[beforeGoingToImage].classList
        .remove('window__slider__img-container--opacity');
      buttonsCurrentImage[beforeGoingToImage].classList
        .remove('window__current-img__btn--current');

      currentImage = imageNumber;
     

      slider.setAttribute('style', translateX(currentImage));
      
      
      images[currentImage].classList
      .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
      .add('window__current-img__btn--current');
      
      
      interval = setInterval(slideRight, 3000);
    },
    handleBtnSlideLeft: function() {
      
      clearInterval(interval);
      
      
      var currentBeforeSlidingLeft = currentImage;
      images[currentBeforeSlidingLeft].classList
        .remove('window__slider__img-container--opacity');
      buttonsCurrentImage[currentBeforeSlidingLeft].classList
        .remove('window__current-img__btn--current');
      
    
      currentImage = previousImage;
      previousImage--;
    
      
      if(previousImage < image.first) {
        previousImage = image.fifth;
      }
      
      
      slider.setAttribute('style', translateX(currentImage));
      
      // add effect to image and respective btn
      images[currentImage].classList
        .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
        .add('window__current-img__btn--current');

      // start animation
      interval = setInterval(slideRight, 3000);
    },
    handleBtnSlideRight: function() {
      // stop animation
      clearInterval(interval);

      // remove effect from current before moving to new one
      var currentBeforeSlidingRight = currentImage;
      images[currentBeforeSlidingRight].classList
        .remove('window__slider__img-container--opacity');
      buttonsCurrentImage[currentBeforeSlidingRight].classList
        .remove('window__current-img__btn--current');

      // calculate new position
      previousImage = currentImage;
      currentImage++;
    
      // if on last element, go to first one
      if(currentImage > image.fifth)
        currentImage = image.first;

      // move slider
      slider.setAttribute('style', translateX(currentImage));

      // add to new image and button
      images[currentImage].classList
        .add('window__slider__img-container--opacity');
      buttonsCurrentImage[currentImage].classList
        .add('window__current-img__btn--current');

      // start animation
      interval = setInterval(slideRight, 3000);
    },
    // used to start animation when page loads
    startSlideRightInterval: function() {
      interval = setInterval(slideRight, 3000);
    }
  };
})();

function startSlider() {
  // start after loading page
  imageSlider.startSlideRightInterval();

  // left and right move by clicking
  btnSlideLeft.addEventListener('click', imageSlider.handleBtnSlideLeft);
  btnSlideRight.addEventListener('click', imageSlider.handleBtnSlideRight);

  // 5 button listeners for each image
  buttonsCurrentImage[0].addEventListener(
    'click', function() {
      imageSlider.goToImage(0)
    }
  );
  buttonsCurrentImage[1].addEventListener(
    'click', function() {
      imageSlider.goToImage(1)
    }
  );
  buttonsCurrentImage[2].addEventListener(
    'click', function() {
      imageSlider.goToImage(2)
    }
  );
  buttonsCurrentImage[3].addEventListener(
    'click', function() {
      imageSlider.goToImage(3)
    }
  );
  buttonsCurrentImage[4].addEventListener(
    'click', function() {
      imageSlider.goToImage(4)
    }
  );
}

window.addEventListener('load', startSlider);

