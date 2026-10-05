// catalog.js

// 1. Filter items by category
export const byCategory = (list, cat) => 
    list.filter((i) => i.category === cat);

// 2. Items whose name or tags contain text (case-insensitive)
export const search = (list, text) => {
    const query = text.toLowerCase();
    return list.filter((i) => 
        i.name.toLowerCase().includes(query) || 
        i.tags.some((t) => t.toLowerCase().includes(query))
    );
};

// 3. Total price of all items
export const total = (list) => list.reduce((sum, i) => sum + i.price, 0);

// 4. Top n items by price
export const top = (list, n) => 
  [...list].toSorted((a, b) => b.price - a.price).slice(0, n);

// 5. Unique categories in the list
export const categories = (list) => 
  [...new Set(list.map((i) => i.category))].toSorted();

// 6. Items with a discount applied        
export const withDiscount = (list, pct) => 
  list.map((i) => ({
    ...i,
    price: Number((i.price * (1 - pct / 100)).toFixed(2))
  }));