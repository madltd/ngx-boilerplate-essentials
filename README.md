# ngx-boilerplate-essentials by Mad Ltd

  1. Clone this repo
  2. Run `npm i` in the root of the cloned repo

## Contents

* [About this projects](#about-this-project)
* [Details](#details)
* [Notes](#notes)
* [Roadmap](#roadmap)
* [Bugs and requests](#bugs-and-fixes)
* [Changelog](#changelog)
* [Packages and disclaimers](#packages-and-disclaimers)

## About this project

I create multiple Angular projects every week, let it be for testing or production, I end up recreating the same structure and functions every time, so I decided to put together this boilerplate that I can just clone and speed up my development.

Have a look at the structure, see if you like it, and you are more than welcome to use it for free of course :)

## Details

* This set up uses **ngxs** as state management library

* 3 service files

  * Data Service - _intended to be used in interaction with an API (if any)_
  * Auth Service
  * Helper Service - _contains most commonly used functions_

* 2 pipes

  * Safe Code - _to inject code (html, style, etc) into template (e.g. in  *innerHTML* attribute) without sanitatization warnigns_
  * Markdown to HTML

* 1 guard

  * Auth Guard

* Components and Layouts
  
  * Layouts are just components that are intended to specify a certain structure depending on the route/authentication level (e.g. visitor layout and user layout)

## Notes

My vision of how projects shouls be structured can be entirely different to yours, so if it does not coincide let me know what you think would be a better way of doing certain things with justified reasons.

## Roadmap

Nothing too specific, just to continue adding 'essentials' as I encounter them and keeping packages up-to-date

## Bugs and requests

If you find that something is off in this project, don't hesitate to submit an issue regarding this matter.
Additionally, as I mentioned in notes, you are very welcome toi suggest you vision of how it is better to structire project with justifications.

## Changelog

**Current Version:** 1.0.0-beta.0

* **1.0.0-beta.0**

  Initial release

## Packages and disclaimers

For converting strings to camelCase and back, I am using the same exact functions as [@swimlane/ngx-datatable](https://github.com/swimlane/ngx-datatable/blob/master/src/utils/camel-case.ts) uses