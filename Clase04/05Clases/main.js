const items = [
    { name: '0', price: 21 },
    { name: 'prp', price: 37 },
    { name: '0100', price: 45 },
    { name: '0', price: 60 }
]

items.sort(
    (a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    }
)

console.log(items);