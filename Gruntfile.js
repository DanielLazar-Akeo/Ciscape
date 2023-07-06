module.exports = grunt => {
  const sass = require('sass');

  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');

  const pkg = grunt.file.readJSON('package.json');

  const browserifyConfig = {
    src: [
      '<%= pkg.dirs.source %>/js/index.js'
    ],
    dest: '<%= pkg.dirs.build %>/js/theme.min.js',
    options: {
      transform: [[
        'babelify', {
          presets: [[
            '@babel/preset-env',
            {
              targets: '<%= pkg.browserslist %>',
              useBuiltIns: 'usage',
              corejs: 3
            }
          ]]
        },
      ]]
    }
  };

  const sassConfig = {
    options: {
      implementation: sass
    },
    files: [{
      '<%= pkg.dirs.build %>/scss/theme.min.css': [
        '<%= pkg.dirs.source %>/scss/theme.scss'
      ]
    }]
  };

  const sassProdConfig = { ...sassConfig };
  sassProdConfig.options.outputStyle = 'compressed';

  grunt.initConfig({
    pkg: pkg,
    'dart-sass': {
      dev: {
        ...sassConfig
      },
      prod: {
        ...sassProdConfig
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require("autoprefixer")()
        ]
      },
      dist: {
        options: {
          map: false,
        },
        files: {
          '<%= pkg.dirs.build %>/scss/theme.min.css': [
            '<%= pkg.dirs.build %>/scss/theme.min.css'
          ]
        },
      },
    },
    browserify: {
      dev: {
        ...browserifyConfig
      },
      prod: {
        ...browserifyConfig
      }
    },
    uglify: {
      options: {
        sourceMap: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          '<%= pkg.dirs.build %>/js/theme.min.js': ['<%= pkg.dirs.build %>/js/theme.min.js']
        }
      },
    },
    bake: {
      target: {
        files: {
          '<%= pkg.dirs.build %>/html/login.html': '<%= pkg.dirs.source %>/html/login.html'
        }
      }
    },
    watch: {
      dart_sass: {
        files: ['<%= pkg.dirs.source %>/scss/**/*.scss'],
        tasks: ['dart-sass:dev', 'postcss']
      },
      js: {
        files: ['<%= pkg.dirs.source %>/js/**/*.js'],
        tasks: ['browserify:dev']
      },
      bake: {
        files: ['<%= pkg.dirs.source %>/html/**/*.html'],
        tasks: ['bake']
      },
      build_complete: {
        files: ['<%= pkg.dirs.build %>/css/*.css', '<%= pkg.dirs.build %>/js/*.js'],
        tasks: ['ping']
      }
    },
  });

  grunt.registerTask('ping', function (pkg) {
    let exec = require('child_process').execSync;

    exec(grunt.template.process('<%= pkg.audio.player %> <%= pkg.audio.success_sound %>', { data: pkg }), { encoding: 'utf8' });
    grunt.log.writeln('Build successful.');
  });

  grunt.registerTask('default', ['dart-sass:prod', 'postcss', 'browserify:prod', 'uglify', 'bake', 'ping']);
};