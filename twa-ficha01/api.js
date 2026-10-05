// api.js
import { writeFile } from 'node:fs/promises';

const res = await fetch('https://api.github.com/repos/nodejs/node');

if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}

const repo = await res.json();

console.log(repo.name, repo.stargazers_count);

// Gravar o resultado em repo.json
await writeFile('repo.json', JSON.stringify(repo, null, 2));
console.log('Ficheiro repo.json gerado com sucesso!');