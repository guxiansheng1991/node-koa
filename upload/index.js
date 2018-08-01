const Koa = require('koa');
const path = require('path');
const koaBody = require('koa-body');
const os = require('os');
const fs = require('fs');

const app = new Koa();

const main = async function(ctx) {
  const tmpdir = os.tmpdir();
  const filePaths = [];
  const files = ctx.request.body.files || {};
  for(let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }
  ctx.body = filePaths;
};

app.use(koaBody({multipart: true}));
app.use(main);
app.listen(3000);