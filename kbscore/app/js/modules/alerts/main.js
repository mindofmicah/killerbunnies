define(['modules/alerts/models/alert','modules/alerts/views/alert_view'], function (Alert, AlertView) {
    

    return {
        create: function (params) {
            params.model = new Alert;
            return new AlertView(params);
        }
    }

});
