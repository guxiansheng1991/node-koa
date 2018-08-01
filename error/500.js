const Koa = require('koa');

const app = new Koa();

let main = async (ctx) => {
  ctx.throw(500);
}

app.use(main);
app.listen(3000);