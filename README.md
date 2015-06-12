# iaap-beta
The second version of the IAMAPROTOTYPE site.

## Getting Started
The frontend is built with a series of tools.

1. <a href="https://docs.npmjs.com/getting-started/what-is-npm">npm</a> or the Node Package Manager helps Grunt run. You'll need to install <a href="https://nodejs.org/">NodeJS</a> with a packaged installer. npm comes with Node, but you should update it via <code>$ sudo npm install npm -g</code>.
2. <a href="http://bower.io/">Bower</a> is our package manager for the browser. Install the command line interface with a <code>$ npm install -g bower</code>.
3. <a href="http://gruntjs.com/">Grunt</a> is a task runner. Install the command line interface with <code>$ sudo npm install -g grunt-cli</code>.

Now that you have the command line setup, download the repository. Rename the project. Do a global search for
```
project-init-php
```
and replace it your project's name.

Next, run these tasks to get your environment situated and the files you need built.
```
$ npm install
$ bower update
$ grunt setup
```
All of your files should be set up and ready to go! Try <code>$ grunt</code> to start the persistent task.

If something goes wrong, first try deleting <code>/node_modules/</code> and <code>/bower_components</code>, then rerun the three lines above.

## Grunting
<a href="http://gruntjs.com/">Grunt</a> is a JavaScript task runner, meaning that it automates frontend tasks. We use it to compile various CSS and JS files, prefix our CSS so we can write cleanly without worrying about vendor prefixes, it cleans /dist/ so the most up-to-date files are being used, it minifies both our CSS and JS so download speeds are quicker, and it watches our code so it can reload our browser when we change it.

#### Full Grunt flow (not all tasks run everything):
1. Clean <code>/dist/</code>
2. Copy any files it needs from <code>/bower_components/</code>
3. Compile all of the Less files into CSS
4. Concatenate CSS, including files from <code>/bower_components/</code>
5. Concatenate JS, including files from <code>/bower_components/</code>
6. Replace all instances of 'glyphicon' in CSS with 'fa'
7. Add and remove vendor prefixes in CSS
8. Minify CSS
9. Minify JS
10. Compile the README.md to HTML
11. Clean up any files that were only used in the build

When done, <code>/dist/</code> is ready to go and the app's frontend is built.

### <code>$ grunt</code> (slim)
This is what you'll use all the time.

Runs the base build tasks and watches for updates in your files. When you save, Grunt will rebuild the frontend. It's a little smart too and only runs tasks that are related to the file you've saved.

If you have the <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en">LiveReload Chrome extension</a>, your browser will update when Grunt is done building.

### <code>$ grunt css</code> (slim)
Runs the core CSS tasks, doesn't minify.

### <code>$ grunt js</code> (slim)
Runs the core JS tasks, doesn't minify.

### <code>$ grunt full</code> (production)
Runs all of the CSS, JS, and other tasks. Minifies. Packages for production. Run this before you push to the Git repo.

### <code>$ grunt deploy</code> (production)
Deploys all code except for <code>/img/</code>, via SFTP, to the specified server.

You'll need to set up a <code>.ftppass</code> with your magic username and password in it. Rename <code>.ftppass-template</code> to <code>.ftppass</code> and follow the instructions. Don't worry, Git will ignore your password.

### <code>$ grunt cleanup</code> (utility)
Cleans your folder tree of <code>/bower_components/</code>, <code>/node_modules/</code>, and <code>/dist/</code>.

### <code>$ grunt setup</code> (utility)
This task does the inital build. It is mostly <code>$ grunt full</code>.

### Grunt Tasks
- <a href="https://github.com/nDmitry/grunt-autoprefixer">Autoprefixer</a>: vendor prefixes for CSS, adds and removes based on the browser variable.
- <a href="https://github.com/gruntjs/grunt-contrib-clean">Contrib-Clean</a>: cleans files and folders.
- <a href="https://github.com/gruntjs/grunt-contrib-concat">Contrib-Concat</a>: concatenate files.
- <a href="https://github.com/gruntjs/grunt-contrib-copy">Contrib-Copy</a>: copy files and folders.
- <a href="https://github.com/gruntjs/grunt-contrib-cssmin">Contrib-CSSmin</a>: compress CSS.
- <a href="https://github.com/gruntjs/grunt-contrib-less">Contrib-LESS</a>: compile LESS files to CSS.
- <a href="https://github.com/gruntjs/grunt-contrib-uglify">Contrib-Uglify</a>: minify files with UglifyJS.
- <a href="https://github.com/gruntjs/grunt-contrib-watch">Contrib-Watch</a>: run tasks whenever watched files change.
- <a href="https://github.com/bylexus/grunt-md2html">md2html</a>: converts Markdown files to HTML.
- <a href="https://github.com/thrashr888/grunt-sftp-deploy">SFTP-Deploy</a>: deploys code over SFTP.
- <a href="https://github.com/yoniholmes/grunt-text-replace">Text-Replace</a>: general purpose text replacement.

You can find the Grunt tasks in <code>Gruntfile.js</code> and <code>package.json</code> for more detail.

## Bowering
<a href="http://bower.io/">Bower</a> is a package manager. It pulls and manages project dependencies (libaries built in HTML, CSS, and JS) and keeps it separate from the rest of the app files. When Grunt compiles the frontend, it pulls files out of <code>/bower_components/</code> and mixes them appropriately with our app files. When adding a dependency, do it via Bower either by <a href="http://bower.io/search/">searching for it</a> or using the <a href="http://bower.io/docs/api/#install"><code>$ bower install</code> API</a>.

You will need to write some lines in Grunt to add the dependency to the core app files.

### Components
We use a base of customized <code>Bootstrap</code> and build up with our own code. When using files, make sure to only pull from <code>/static</code> as this is where the final, compiled, minified files land.

#### HTML
- <a href="http://getbootstrap.com/">Bootstrap</a>: HTML, CSS, and JS framework.

#### CSS
- <a href="http://getbootstrap.com/">Bootstrap</a>: HTML, CSS, and JS framework.
- <a href="http://fontawesome.io/">Font Awesome</a>: icon set.
- <a href="https://daneden.me/animate/">Animate.css</a>: CSS animations.
- <a href="http://select2.github.io/">Select2</a>: more robust select tool.
- <a href="https://github.com/bryanbraun/anchorjs">Anchor</a>: builds inline anchors for our docs.
- <a href="http://fronteed.com/iCheck/">iCheck</a>: better checkboxes and radios.

The CSS is often written in <a href="lesscss.org/">Less</a>, a CSS preprocessor. It allows the use of variables and nesting (among other things). The files are broken into components, each file only holding that component's Less. There is a variable file, <code>/css/less/variables.less</code>, which holds the majority of the Less variables. Another file, <code>/css/less/build.less</code>, is the file that pulls together all of the Less components.

#### JS
- <a href="http://getbootstrap.com/">Bootstrap</a>: HTML, CSS, and JS framework.
- <a href="https://github.com/ryhan/fixie">FixieJS</a>: adds filler text (DEV).
- <a href="http://imsky.github.io/holder/">HolderJS</a>: adds filler images (DEV).
- <a href="http://select2.github.io/">Select2</a>: more robust select tool.
- <a href="https://github.com/bryanbraun/anchorjs">Anchor</a>: builds inline anchors for our docs.
- <a href="https://github.com/flesler/jquery.scrollTo">ScrollTo</a>: smooth in-page link scrolling.
- <a href="http://fronteed.com/iCheck/">iCheck</a>: better checkboxes and radios.

#### PHP
- <a href="https://github.com/armthethinker/uifunk">UIFunk</a>: PHP arrays for random data generation (DEV).