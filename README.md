# Icons Explorer

## Usage

Service is available at http://sibprogrammer.github.com/icons-explorer/

Also you can download the project's archive and use it immeditally with
zero-time installation. Just extract the archive and open index.html in your 
favorite browser.

![Screenshot](https://github.com/sibprogrammer/icons-explorer/raw/master/screenshot.png)

## How to Add New Icon Set

Here is the brief instructions on how to add a new icon set:

* define short icon set name, which will be used (*icon-set*)
* create icon set directory: mkdir -p icons/*icon-set*/16x16
* edit build script and add: find_icons "./icons/*icon-set*/16x16" "*icon-set*IconsNames"
* edit javascripts/application.js and add: createIcons(*icon-set*IconsNames, '#*icon-set*-icons', '*icon-set*', false);
* edit templates/header.html and add the link for *icon-set* into sets-links div block
* edit templates/footer.html and add the block for *icon-set* similar to others
* run the build script: ./build

## License

Project is licensed under the GPLv3 license.
See http://www.gnu.org/licenses/gpl.html

Icons sets are licensed under the separate licenses. See corresponding LICENSE
files for details.
