# Text Animation

## Stroke effects

Hello everyone !
this text animation was inspired by this video https://www.youtube.com/watch?v=vJNVramny9k
and I liked to share the source code with you.

In that video you creating a Text Animation but the implementation was not flexible and reuseable.

because you can't apply the animation on a diffrent text.
basically I decoupled all the logical about the animation to JavaScript.

for example :

- iterate over the paths and set their value
- set stroke-dasharray and stroke-Dashoffset dynamically
- set text fill dynamically based on stroke animation

In order to create this animation follow this steps:

## Vector Editor Tool

open up Figma.
use the Text tool to create any word that you want
(optinal) modify the font-family and leter-spacing
Right click Outline-Stroke (Ctrl+Shift+O)
Right-click copy/paste -> copy as SVG

## Visual Studio Code

open up you favorite code editor.
replace the svg content with your customize svg.
assign id attribute to svg

## End.
