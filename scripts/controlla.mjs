import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const number=process.argv[2];
if(!/^(0[1-9]|[12][0-9]|30)$/.test(number||'')){console.error('Uso: node scripts/controlla.mjs XX (da 01 a 30)');process.exit(1);}
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const file=path.join(root,'missioni',number,'index.html');
const html=await readFile(file,'utf8');
const link=html.match(/<link\s+rel="stylesheet"\s+href="([^"]+)"/);
try{if(!link)throw Error();await stat(path.resolve(path.dirname(file),link[1]));console.log(`Scheda ${number}: il foglio di stile esiste. Ora controlla il risultato nel browser.`);}
catch{console.error(`Scheda ${number}: il collegamento al foglio di stile non trova il file. Confronta percorso e nome con i file del repository.`);process.exitCode=1;}
