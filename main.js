const find = (el) => document.querySelectorAll(el)[0];
const css  = (el, name, value) => el.style[name] = value;


const boxSky    =  find('.boxSky'),
      boxWater  =  find('.boxWater'),
      boxForest =  find('.boxForest'),
      forest    =  find('.forest'),
      water     =  find('.water')

const num        = 1000,
      transform  = 'transform',
      position   = 'position',
      fixed      = 'fixed',
      translateY = 'translateY',
      opacity    = 'opacity',
      relative   = 'relative';

document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;

    css(boxSky, transform, `${translateY}(${-50 - (scrollTop / 10)}%)`);
    css(boxSky, opacity, 1 - scrollTop / num);

    if (scrollTop >= num) {
        css(forest, position, fixed);
        css(forest, 'top', 0);
        css(boxForest, transform, `${translateY}(${-50 + ((scrollTop - num) / 10)}%)`);
        css(boxForest, opacity, 1 - (scrollTop - num) / num);
    } else {
        css(forest, position, relative);
        css(forest, 'top', `${num}px`);
    }
})