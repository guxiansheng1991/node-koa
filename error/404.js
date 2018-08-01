const Koa = require('koa');
const app = new Koa();

let main = async (ctx) => {
  ctx.response.status = 404;
  ctx.response.body = '404 Page Not Found';
}
app.use(main);
app.listen(3000);