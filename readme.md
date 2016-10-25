# Sandbox for Practical SVG

This is a sandbox repo to play with some of the ideas discussed in the A List Apart book [Practical SVG](https://abookapart.com/products/practical-svg).

It comes with gulp to start a [browserSync](https://www.browsersync.io/) instance as well as compile SVGs in the `icons` folder into a single `icons.svg` file in the `public` folder.

## Overview

The main goal of this is to increase understanding of SVG and what it's limitations are. Most of the things in here are gleaned from reading Practical SVG, but there are some other really good resources to review, especially when doing more advanced functionality like styling and animation:

* [Styling SVG `use` Content with CSS](http://tympanus.net/codrops/2015/07/16/styling-svg-use-content-css/)
* [SVG and Media Queries](https://jakearchibald.com/2016/svg-media-queries/)
* [Rethinking Responsive SVG](https://www.smashingmagazine.com/2014/03/rethinking-responsive-svg/)
* [Transforms on SVG Elements](https://css-tricks.com/transforms-on-svg-elements/)

And also, be sure to look at some inspiration:

* [GreenSock](https://greensock.com/examples-showcases)
* [SnapSVG](http://snapsvg.io/)

## Installation

To get started with this sandbox, clone this repo, install the node modules and start gulp:

```shell
git clone https://github.com/bgturner/sandbox-practical-svg.git
cd sandbox-practical-svg
npm install
npm run start
```
