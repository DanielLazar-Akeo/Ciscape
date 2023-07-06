# Labrys Portal
The front-end package for the Labrys user portal

## Installation
This is not a Wordpress theme, but rather, a series of raw HTML layouts combined with minified javascript and css to be integrated with a backend solution.

## Primary dependencies:
* Grunt
* NPM

## Usage:
Build and source directories can be changed within `package.json`
> To install all project dependencies, run `npm install`.

> To build for production, run `grunt`.

> To watch for any changes, run `grunt watch`.

> For updating packages, run `npm update`.

## Grunt plugins used:
* Browserify (Convert CommonJS to web browser friendly form)
* Dart-Sass (SCSS compiler to make writing styles easier)
* PostCSS (For browser compatibility, autoprefixing)
* UglifyJS (To uglify/obfuscate minified Javascript files)
* Grunt Bake (To allow for modular HTML during development)

## Notes:
The `Ping` task is unnecessary for compilation, but provides a nice audio cue for successful builds.