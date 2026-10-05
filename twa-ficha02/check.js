// check.js
import assert from 'node:assert/strict';
import { items } from './data.js';
import { byCategory, search, total, top, categories, withDiscount } from './catalog.js';

// Teste byCategory
const games = byCategory(items, 'Games');
assert.equal(games.every(i => i.category === 'Games'), true);

// Teste search
const found = search(items, 'Multiplayer');
assert.equal(found.length > 0, true);

// Teste total
const sum = total(items);
assert.equal(typeof sum, 'number');
assert.equal(sum > 0, true);

// Teste top
const top2 = top(items, 2);
assert.equal(top2.length, 2);
assert.equal(top2[0].price >= top2[1].price, true);

// Teste categories
const cats = categories(items);
assert.equal(Array.isArray(cats), true);
assert.equal(new Set(cats).size, cats.length); // garantir que são únicos

// Teste withDiscount
const discounted = withDiscount(items, 10);
assert.equal(discounted[0].price < items[0].price, true);
assert.equal(items[0].price, items[0].price); // original intacto