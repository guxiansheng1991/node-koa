const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `/router/view/${page}`;
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if(err) {
        console.log(err);
        reject(err);
      }else {
        resolve(data);
      }
    });
  });
}

async function route(url) {
  let view = '404.html';
  switch(url) {
    case '/':
      view = 'index.html';
      break;
    case '/index.html':
      view = 'index.html';
      break;
    case '/todo.html':
      view = 'todo.html';
      break;
    case '/404.html':
      view = '404.html';
      break;
    default: 
      break;
  }
  let html = await render(view);
  return html;
}

app.use(async (ctx) => {
  let url = ctx.request.url;
  console.log(url);
  let html = await route(url);
  ctx.body = html;
});

app.listen(3000);


/**
 * 实验以失败结束
 */