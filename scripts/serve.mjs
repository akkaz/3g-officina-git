import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.md':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{
 try{
  const route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(route.split('/').some(x=>x.startsWith('.')))throw Error();
  let file=path.resolve(root,'.'+route);
  if(!file.startsWith(root+path.sep)&&file!==root)throw Error();
  if((await stat(file)).isDirectory())file=path.join(file,'index.html');
  const data=await readFile(file);
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('File non trovato: controlla il collegamento.');}
}).listen(8787,'127.0.0.1',()=>console.log('Officina aperta: http://localhost:8787 · Ctrl+C per fermare.'));
