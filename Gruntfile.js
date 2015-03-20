module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    hostname: '127.0.0.1',
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect']);

};
