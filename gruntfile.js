module.exports = function(grunt) {

  //Configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'public/stylesheets/style.css' : 'src/scss/schmeater.scss'
        }
      },
      build: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/stylesheets/style.css' : 'src/scss/schmeater.scss'
        }
      }
    },
    imagemin: {
      build: {
        options: {
          optimizationLevel: 5
        },
        files:[{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images'
        }]
      }
    },
    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        src: 'src/js/*.js',
        dest: 'public/javascripts/script.min.js'
      },
      build: {
        src: 'src/js/*.js',
        dest: 'public/javascripts/script.min.js'
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
        files: ['src/scss/**/*.scss'],
        tsasks: ['sass:dev']
      }
    }
  });

  //Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Register tasks
  grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
  grunt.registerTask('build', ['uglify:build', 'sass:build', 'imagemin:build']);
};
