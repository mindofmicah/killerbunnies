module.exports = function (grunt) {
    grunt.initConfig({
        requirejs: {
            compile : {
                options : {
                    appDir : 'public/',
                    baseUrl : 'js',
                    dir :'target/public/',
                    mainConfigFile:'public/js/main.js',
                    keepBuildDir:false,
                    modules:[
                    {name:'main'}
                    ],
                    logLevel:0,
                    findNestedDependencies : true,
                    fileExclusionRegExp:/^\./,
                    skipDirOptimize:true,
                    inlineText:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
