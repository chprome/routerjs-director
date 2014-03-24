function requireDeps(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
}

function initConfig(grunt) {

    var JS_CLIENT_SRC = ['app.js'];

    grunt.initConfig({

        browserify: {
            dev: {
                files: {
                    'app.dist.js': 'app.js'
                }
            }
        },

        watch: {
            jsclient: {
                files: JS_CLIENT_SRC,
                tasks: ['browserify:dev']
            }
        }
    });
}

function registerTasks(grunt) {
    grunt.registerTask('default', ['browserify:dev', 'watch']);
}

module.exports = function(grunt) {
    requireDeps(grunt);
    initConfig(grunt);
    registerTasks(grunt);
};