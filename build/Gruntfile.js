'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          '../assets/css/styles.css': 'sass/_item-product.scss',       // 'destination': 'source'
        }
      }
    },

    concat: {
      core: {
        // Javascript Library
        src: [       
        // jQuery
        'bower_components/jquery/dist/jquery.js', 
        // Owl Carousel
        'bower_components/owl-carousel/owl-carousel/owl.carousel.js',
        // PrettyEmbed
        'bower_components/pretty-embed/jquery.prettyembed.js',
        ],
        dest: '../assets/js/compile/core.js',
      },
      // Javascript Initalization
      init: {
        src: [
        'js/init/init.begin.js',
          'js/init/init.owl-carousel.js',
          'js/init/init.prettyembed.js',
          'js/init/init.svg.js',
        'js/init/init.end.js' ],
        dest: '../assets/js/compile/init.core.js',
      },
      // Javascript Production
      production: {
        src: [
        '../assets/js/compile/core.js',
        '../assets/js/compile/init.core.js'],
        dest: '../assets/js/production.js',
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/{,**/}*.js', '!js/{,**/}*.min.js']
    },

    uglify: {
      dev: {
        options: {
          mangle: true,
          compress: true,
          banner: "// Compiled by KamesCG | www.kamescg.com\n",
          beautify: false
        },
        files: [{
          expand: true,
          flatten: true,
          cwd: '../assets/js',
          dest: '../assets/js',
          src: ['production.js'],
          rename: function(dest, src) {
            var folder = src.substring(0, src.lastIndexOf('/'));
            var filename = src.substring(src.lastIndexOf('/'), src.length);
            filename = filename.substring(0, filename.lastIndexOf('.'));
            return dest + '/' + folder + filename + '.min.js';
          }
        }]
      }
    },


    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/{,**/}*.{scss,sass}'],
        tasks: ['compass:dev'],
        options: {
          livereload: false
        }
      },
      registry: {
        files: ['*.info', '{,**}/*.{php,inc}'],
        tasks: ['shell'],
        options: {
          livereload: false
        }
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      js: {
        files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
        tasks: ['jshint', 'uglify:dev']
      }
    },

    shell: {
      all: {
        command: 'drush cache-clear theme-registry'
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        force: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      dist: {
        options: {
          environment: 'production'
        }
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', [
    'uglify:dist',
    'compass:dist',
    'jshint'
  ]);

};
