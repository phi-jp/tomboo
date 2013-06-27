module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: "src",
    buildDir: "build",
    
    watch: {
      jsx: {
        files: ['<%= srcDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
    },
    jsx: {
      build: {
        src: 'src/main.jsx',
        dest: 'build/main.js',
        "add-search-path": "libs/Tombo.js/src/",
        executable: "web",
      },
    },
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('test', ['coffee']);
}