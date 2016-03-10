module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['Vizabi_Web_conf_Local.js']
    }
  });

  grunt.registerTask('default', 'lint');
  grunt.registerTask('travis', 'lint');

};