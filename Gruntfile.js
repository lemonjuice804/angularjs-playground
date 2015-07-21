module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // jshint: {
        //     // files: ['Gruntfile.js', 'app/src/**/*.js', 'app/*.js'],
        //     // options: {
        //     //     globals: {
        //     //         jQuery: true,
        //     //         console: true,
        //     //         undef: true,
        //     //         predef: ["angular"]
        //     //     }
        //     // }
        // },
        concat: {
            js: {
                src: ['app/*.js', 'app/src/**/*.js', '!app/src/**/*_test.js'],
                dest: 'app/public/js/production.js'
            },
            css: {
                src: ['app/*.css', 'app/src/**/*.css'],
                dest: 'app/public/css/production.css'
            }
        },
        cssmin: {
            css: {
                src: 'app/public/css/production.css',
                dest: 'app/public/css/production.min.css'
            }
        },
        uglify: {
            js: {
                src: 'app/public/js/production.js',
                dest: 'app/public/js/production.min.js'
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'app/src/views',
                    src: ['*/*.html'],
                    dest: 'app/public/html/'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'copy']);

};