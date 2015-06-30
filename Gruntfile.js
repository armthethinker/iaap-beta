module.exports = function(grunt) {

   grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      banner: '/*!\n' +
      ' * <%= pkg.gname %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
      ' * Copyright 2015-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' */\n',
      concat: {
         options: {
            separator: '\n'
         },
         css: {
            src: ['css/built-bootstrap+<%= pkg.gname %>.css',
                  'bower_components/fontawesome/css/font-awesome.min.css',
                  //'bower_components/animate.css/animate.min.css',
                  //'bower_components/select2/select2.css',
                  //'bower_components/select2/select2-bootstrap.css',
                  //'bower_components/anchor-js/anchor.css',
                  //'bower_components/icheck/skins/flat/red.css'
                  ],
            dest: 'dist/css/<%= pkg.gname %>.css'
         },
         js: {
            src: ['bower_components/bootstrap/dist/js/bootstrap.min.js',
                  //'bower_components/fixie/fixie.min.js',
                  //'bower_components/holderjs/holder.min.js',
                  //'bower_components/select2/select2.js',
                  //'bower_components/anchor-js/anchor.js',
                  'bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
                  //'bower_components/icheck/icheck.min.js',
                  'bower_components/FitText.js/jquery.fittext.js',
                  'js/<%= pkg.gname %>.js'],
            dest: 'dist/js/<%= pkg.gname %>.js'
         }
      },
      uglify: {
         dist: {
            files: {
               'dist/js/<%= pkg.gname %>.min.js': ['dist/js/<%= pkg.gname %>.js']
            }
         }
      },
      cssmin: {
         dist: {
            files: [{
               expand: true,
               cwd: 'dist/css/',
               src: ['*.css', '!*.min.css'],
               dest: 'dist/css/',
               ext: '.min.css'
            }]
         }
      },
      copy: {
         fontawesome: {
            flatten: true,
            expand: true,
            src: 'bower_components/fontawesome/fonts/*',
            dest: 'fonts/'
         },
         fonts: {
            src: 'fonts/*',
            dest: 'dist/'
         },
         // select2: {
         //    flatten: true,
         //    expand: true,
         //    src: 'img/select2/*',
         //    dest: 'dist/css/'
         // },
         // icheck: {
         //    options: {
         //       noProcess: ['*.{png,gif,jpg,ico}'],
         //    },
         //    flatten: true,
         //    expand: true,
         //    src: ['bower_components/icheck/skins/flat/red.png',
         //          'bower_components/icheck/skins/flat/red@2x.png'],
         //    dest: 'dist/css/'
         // },
         // rand: {
         //    flatten: true,
         //    expand: true,
         //    src: 'bower_components/UIFunk/rand.php',
         //    dest: 'includes/'
         // },
         lessvar: {
            flatten: true,
            expand: true,
            src: 'bower_components/bootstrap/less/variables.less',
            dest: 'css/less/'
         }
      },
      clean: {
         dist: ["dist/*"],
         cleanup: ['dist', 'bower_components', 'node_modules', 'includes/ui/README.html'],
         preBuild: ['css/built-*']
      },
      less: {
         // mixin: {
         //    options: {
         //       sourceMap: false,
         //    },
         //    src: ['css/less/components/mixins/utility-belt.less'],
         //    dest: 'css/less/components/built-utility-belt.less'
         // },
         dev: {
            options: {
               banner: '<%= banner %>',
               stripBanners: false,
               sourceMap: true,
               sourceMapFilename: 'dist/css/<%= pkg.gname %>.css.map'
            },
            src: ['css/less/build.less'],
            dest: 'css/built-bootstrap+<%= pkg.gname %>.css'
         }
      },
      watch: {
         options: {
            livereload: true
         },
         less:{
            files: ['css/less/**'],
            tasks: ['css']
         },
         js:{
            files: ['js/**'],
            tasks: ['js']
         },
         html:{
            files: ['*.php', '*.html', 'includes/**' ],
            tasks: []
         },
         md:{
            files: ['*.md'],
            tasks: ['md2html']
         }
      },
      'ftp-deploy': {
         slim: {
            auth: {
               host: 'ftp.daseindesign.co',
               port: 21,
               authKey: 'key1'
            },
            src: '../iaap-beta/',
            dest: '/iamaprototype/beta',
            exclusions: [
               '.*',
               'bower_components',
               '*.less',
               'fonts',
               'img',
               'node_modules',
               '*.json',
               '*.md',
               '**/.DS_Store',
               '**/Thumbs.db',
            ],
            forceVerbose: true
         },
         fonts: {
            auth: {
               host: 'ftp.daseindesign.co',
               port: 21,
               authKey: 'key1'
            },
            src: '../iaap-beta/dist/fonts/',
            dest: '/iamaprototype/beta/dist/fonts',
            exclusions: [
               '.*',
               '*.json',
               '*.md',
               '**/.DS_Store',
               '**/Thumbs.db',
            ],
            forceVerbose: true
         },
         img: {
            auth: {
               host: 'ftp.daseindesign.co',
               port: 21,
               authKey: 'key1'
            },
            src: '../iaap-beta/img',
            dest: '/iamaprototype/beta/img',
            exclusions: [
               '.*',
               '.DS_Store',
               'Thumbs.db',
            ],
            forceVerbose: true
         }
      },
      autoprefixer: {
        options: {
            browsers: ['last 4 versions']
         },
         // prefix all files
         normal: {
            expand: true,
            flatten: true,
            src: 'dist/css/*.css',
            dest: 'dist/css/'
         }
      },
      replace: {
         glyphicon: {
            src: ['dist/css/*'],
            dest: 'dist/css/',
            replacements: [{
               from: 'glyphicon',
               to: 'fa'
            }]
         }
      },
      md2html: {
         multiple_files: {
            options: {},
            files: [{
               expand: true,
               cwd: '',
               src: ['*.md'],
               dest: 'includes/md/',
               ext: '.html'
            }]
         }
      },
      beaker: {
         css: {
            src: 'dist/css/',
            options: {
               collectData: true,
               dataStore: 'beaker.json'
            }
         },
         js: {
            src: 'dist/js/',
            options: {
               collectData: true,
               dataStore: 'beaker.json'
            }
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-less');    
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');   
   grunt.loadNpmTasks('grunt-contrib-concat');   
   grunt.loadNpmTasks('grunt-contrib-clean');    
   grunt.loadNpmTasks('grunt-contrib-copy');    
   grunt.loadNpmTasks('grunt-ftp-deploy');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-text-replace');
   grunt.loadNpmTasks('grunt-md2html');
   grunt.loadNpmTasks('grunt-beaker');

   // Utility runners
   grunt.registerTask('copy-stack', ['copy:fontawesome', 'copy:fonts']);
   grunt.registerTask('cleanup', ['clean:cleanup']);
   grunt.registerTask('setup', ['copy:lessvar', 'full']);

   // Slim task runners
   grunt.registerTask('default', ['css', 'js','watch']);
   grunt.registerTask('css', ['less:dev', 'concat:css', 'autoprefixer', 'cssmin', 'clean:preBuild', 'beaker:css']);
   grunt.registerTask('js', ['concat:js', 'uglify', 'beaker:js']);

   // Production ready task runners
   grunt.registerTask('full', ['clean:dist', 'copy-stack', 'css', 'js', 'md2html']);
   grunt.registerTask('deploy', ['ftp-deploy:slim']);
   grunt.registerTask('deployimg', ['ftp-deploy:img']);
   //grunt.registerTask('deployjs', ['ftp-deploy:js']);

};