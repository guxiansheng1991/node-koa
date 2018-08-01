const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  let url = ctx.url;
  // 从上下文的request中查询
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  // 从上下文中直接获取
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;

  ctx.body = {
    url: url,
    req_query: req_query,
    req_querystring: req_querystring,
    ctx_query: ctx_query,
    ctx_querystring: ctx_querystring
  }
});

app.listen(3000);