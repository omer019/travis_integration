/*  module.exports = function(grunt){

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
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('travis', ['express:dev', 'protractor:e2e']);

};
**************************
*/


/*
 * grunt-protractor-runner
 * https://github.com/teerapap/grunt-protractor-runner
 *
 * Copyright (c) 2013 Teerapap Changwichukarn
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    protractor: {
      options: {
        keepAlive: false
      },
      testTargetConfigFile: {
        configFile:"Vizabi_Web_Conf_Local.js",
        options: {
          webdriverManagerUpdate: true
        }
      },
      testKeepAliveOnFailedTest: {
        configFile:"Vizabi_Web_Conf_Local.js",
        options: {
          keepAlive: true,
          args: {
            specs:["failedTest.js"],
          }
        }
      },
      testArgs: {
        configFile:"Vizabi_Web_Conf_Local.js",
        options: {
          args: {
            params: {
              number: 1,
              bool_true: true,
              bool_false: false,
              str: "string",
              nil: null, // Null is not supported.
              obj: {
                array: [1, 2, 3],
                undef: undefined
              }
            },
            capabilities: {
              'browserName': 'chrome'
            },
            rootElement:"body",
            specs:["test/argsTest.js"],
            verbose:true
          }
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['Vizabi_Web_Conf_Local.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'protractor', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
 //grunt.registerTask('travis', ['express:dev', 'protractor:e2e']);
  
};