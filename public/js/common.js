require.config({
    baseUrl:'/js',
    paths: {
        jquery:"vendor/jquery/dist/jquery.min",
        underscore:'vendor/underscore/underscore',
        backbone:'vendor/backbone/backbone',
        alerts:'vendor/backbone-alert/src/alerts',
        bootstrap:'vendor/bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap:{
            deps:['jquery'],
            exports:"$.fn.popover"
        }
    }
 });



