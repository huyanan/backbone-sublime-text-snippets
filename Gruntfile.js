/*global module:false*/
module.exports = function(grunt) {
  var snippetsJson = grunt.file.readJSON('src/snippets.json');
  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'nodeunit']
      },
      snippets:{
        files: ['src/**/*.js','src/**/*.json'],
        tasks: ['wrap']
      }
    },
    wrap: {
      snippets: {
        header: 'src/snippet-base/snippet-header.js',
        footer: 'src/snippet-base/snippet-footer.js',
        extension: 'sublime-snippet',
        src: [
          'src/*.js'
        ],
        dest: 'dist/' // destination *directory*, probably better than specifying same file names twice
      }
    },
    /*wrap: {
      advanced: {
        cwd: 'src/',
        expand: true,
        header: 'src/snippet-base/snippet-header.js',
        footer: 'src/snippet-base/snippet-footer.js',
        src: ['*.js'],
        dest: 'dist/',
        options: {
          seperator: '\n',
          indent: '\t',
          wrapper: function(filepath, options) {
            // console.log(filepath + ': ' + options);
            // console.log(grunt.config('wrap').advanced.header);
            // console.log(grunt.config('wrap').advanced.footer);
            var advanced = grunt.config('wrap').advanced;
            var header = grunt.file.read(advanced.header);
            var footer = grunt.file.read(advanced.footer);
            return [header, footer];
          },
          rename: function(dest, src) {
            console.log(dest);
            console.log(src);
            return path.join(dest, src.replace(/(\.[\w]+)$/g, '.tagged$1'));
          }
        }
      }
    },*/
  });

  grunt.registerMultiTask('wrap', 'Wraps source files with specified header and footer', function() {
    grunt.log.writeln(this.data.src);
    var data = this.data,
      path = require('path'),
      dest = grunt.template.process(data.dest),
      // files = grunt.file.expandFiles(this.data.src),
      extension = data.extension,
      files = grunt.file.expand(data.src),
      header = grunt.file.read(grunt.template.process(data.header)),
      footer = grunt.file.read(grunt.template.process(data.footer)),
      sep = grunt.util.linefeed;


    files.forEach(function(f) {
      grunt.log.writeln(path.basename(f));
      var basename = path.basename(f);
      var newName = basename.replace(/(\.[\w]+)$/g, '.'+extension);
      var p = dest + '/' + newName,
        contents = grunt.file.read(f);

      if (contents=='') {
        contents = "Backbone";
      }

      //替换tabTrigger和scope
      var fileSnippetJson = snippetsJson[basename];
      // console.log(snippetsJson);
      // console.log(basename);
      // console.log(fileSnippetJson);
      var renderedFooter = grunt.template.process(footer,{data:fileSnippetJson});

      grunt.file.write(p, header + sep + contents + sep + renderedFooter);
      grunt.log.writeln('File "' + p + '" created.');
    });
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-wrap');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('snippets', ['wrap','watch:snippets']);
  // grunt.registerTask('build', ['snippets','copy']);

};