// app.js
import { items } from './data.js';
import { byCategory, search, top, total, categories } from './catalog.js';
import { writeFile } from 'node:fs/promises';

const [cmd, arg] = process.argv.slice(2);

async function main() {
    if (cmd === 'report') {
        const reportData = {
            count: items.length,
            total: total(items),
            categories: categories(items),
            top3: top(items, 3)
        };
        await writeFile('report.json', JSON.stringify(reportData, null, 2));
        console.log('Report generated: report.json');
        return;
    }

    let result = items;

    if (cmd === 'search') {
        result = search(items, arg);
    } else if (cmd === 'top') {
        const n = Number(arg) || 3;
        result = top(items, n);
    } else if (cmd) {
        result = byCategory(items, cmd);
    }

    result.forEach((i) => {
        console.log(`${i.id} | ${i.name} (${i.category}) - ${i.price}€`);
    });
}

main();