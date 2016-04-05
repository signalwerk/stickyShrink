## stickyShrink
Inspired by https://github.com/codrops/AnimatedHeader but with jQuery dependency and some more functions.


###Usage

```
  $('#nav').stickyShrink({
    'shrinkStart' : 105
  });

```

###Options
`shrinkStart` the scroll position where the shrink gets activated in px.

###Class combinations

`.stickyShrink.inactive.down` = Scroll down but the scroll position (`shrinkStart`) is not passed. 
`.stickyShrink.active.down` = Scroll down and the scroll position (`shrinkStart`) is passed. 

`.stickyShrink.inactive.up` = Scroll up and the scroll position (`shrinkStart`) is not passed. 
`.stickyShrink.active.up` = Scroll up and the scroll position (`shrinkStart`) is passed. 

