var tests = [];
for(var file in window.__karma__.files) {
    if(window.__karma__.files) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
requirejs.config({
    baseUrl:'/base/public/js',
    paths: {
        jquery:'vendor/jquery/dist/jquery.min',
        underscore:'vendor/underscore/underscore',
        backbone:'vendor/backbone/backbone',
        alerts:'vendor/backbone-alert/src/alerts',
        bootstrap:'vendor/bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap:{
            deps:['jquery'],
            exports:'$.fn.popover'
        }
    },
    deps:tests,
    callback: window.__karma__.start
});
