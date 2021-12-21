const truongHocRouter =  require('./truongHoc.route')

function route(app) {
   /* GET home page. */
   app.use('/', truongHocRouter);
}

module.exports = route;
