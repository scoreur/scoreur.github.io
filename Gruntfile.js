
module.exports = function(grunt){
    grunt.initConfig({
        pug: {
            options: {
                client: false,
                pretty: true
            },
            web: {
                src: 'view/index.pug',
                dest: './index.html',
            }
        },
        
    });
   
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.registerTask('default', ['pug:web']);

}