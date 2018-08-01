const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const Router = require('koa-router');

// 路由1
let home = new Router();
home.get('/', async (ctx) => {
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `;
  ctx.body = html;
});

// 路由2
let page = new Router();
page.get('/404', async (ctx) => {
  ctx.body = '404 page!';
}).get('/helloworld', async (ctx) => {
  ctx.body = 'hello world page!';
});

// 装载所有的子路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);