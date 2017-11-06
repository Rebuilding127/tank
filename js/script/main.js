require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery-3.2.1.slim'
    }
});
require(['jquery'], function($) {
    console.log('Hello World !');
    $('#contentBtn').on('click', function() {
        $('#messagebox').html('You have access Jquery by using require()');

        require(['script/desc'],function(desc){
            console.log(JSON.stringify(desc));
        });
    });
});
