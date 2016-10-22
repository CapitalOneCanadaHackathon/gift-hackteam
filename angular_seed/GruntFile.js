module.exports = function(grunt) {

  grunt.initConfig({

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    injector:{
        options:{
            template: 'index.html',
            addRootSlash: false,
            min:true,
        },
        injectScripts:{
            files:{
                'index.html':[
                    'app/**/*.module.js',
                    'app/**/*.js'
                ]
            }
        },
    },

    wiredep:{
        task:{
            src:['index.html']
        }
    }

  });

  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['wiredep', 'injector','nodemon']);  

};