 module.exports = function(grunt){

  grunt.initConfig({
    protractor: {
      options: {
        // Location of your protractor config file
       
	   configFile: "Vizabi_Web_Conf_Local.js",

        // Do you want the output to use fun colors?
        noColor: false,

        // Set to true if you would like to use the Protractor command line debugging tool
        // debug: true,

        // Additional arguments that are passed to the webdriver command
        args: { }
      },
      e2e: {
        options: {
          // Stops Grunt process if a test fails
          keepAlive: false
        }
      },
      continuous: {
        options: {
          keepAlive: true
        }
      }
    },

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'bin/www'
        }
      },
      prod: {
        options: {
          script: 'path/to/prod/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },

    protractor_webdriver: {
      options: {
        // Task-specific options go here. 
      },
      your_target: {
        // Target-specific file lists and/or options go here. 
      },
    },

  });
   grunt.loadTasks('Vizabi_Web_Conf_Local.js');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('Vizabi_Web_Conf_Local.js', ['clean', 'protractor', 'nodeunit']);

  // By default, lint and run all tests.
  //grunt.registerTask('default', ['jshint', 'test']);

};
**************************
