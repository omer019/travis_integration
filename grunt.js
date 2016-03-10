module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['Asynchronous.js']
    }
  });

  grunt.registerTask('default', 'lint');
  grunt.registerTask('travis', 'lint');

};