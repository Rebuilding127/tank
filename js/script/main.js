require.config({
    paths: {
        'jquery': '../lib/jquery-3.2.1.slim',
        'tank': 'tank'
    }
});
require(['tank'], function(Tank) {
    console.log('Hello World !');

    var t1 = new Tank();
    console.log(t1);
    t1.fire({speed: 10});

});
