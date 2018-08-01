const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set('cid', 'hello world', {
      domain: 'localhost',
      maxAge: 10* 60 * 1000,
      path: '/index',
      expires: new Date('2018-7-26'),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = 'cookie is ok';
  }else {
    ctx.body = 'hello world';
  }
});

app.listen(3000);