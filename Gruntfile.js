
module.exports = function(grunt){
    grunt.initConfig({
        jade: {
            options: {
                client: false,
                pretty: true
            },
            web: {
                src: 'view/index.jade',
                dest: './index.html',
            }
        },
        
    });
   
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.registerTask('default', ['jade:web']);

}