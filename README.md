## Update

Major refactor of previous project, Concentration.
Code was refactored according to the principles of OOP.










----------------
Looking at the CSS, `class='front'` has a z-index of 2, meaning that it is on top of `class='back'`.</br>
`class='back'` is transformed 180 degrees away, meaning that it is facing down(opposite of where `div` with `class='front'` is facing).</br>

The CSS attribute `transform-style: preserve-3d` in `.flipper` allows the front and back div's 3d-position within the `.flipper` div to be preserved (i.e. `.front` being on top of `.back`), </br> such that a 180 degree rotation of `.flipper` along the y-axis will mimic the rotation of an actual flip, resulting in the `.back` side facing up after the flip(and `.front` side will face down).

```css
.flipper {
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;
  margin: 0px;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

/* front pane, placed above back */
.front {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
  transform: rotateY(180deg);
}

.col.flipped .flipper {
  transform: rotateY(180deg);
}
```

