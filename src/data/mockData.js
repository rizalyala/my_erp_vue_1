export const customers = [
    { id: 'CUST-001', name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234', company: 'Doe Industries' },
    { id: 'CUST-002', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '555-5678', company: 'Smith & Co.' },
    { id: 'CUST-003', name: 'Peter Jones', email: 'peter.jones@example.com', phone: '555-9012', company: 'Jones Logistics' },
];

export const products = [
    { id: 'PROD-001', name: 'Laptop Pro 15', category: 'Electronics', price: 1500, stock: 150 },
    { id: 'PROD-002', name: 'Wireless Mouse', category: 'Accessories', price: 25, stock: 400 },
    { id: 'PROD-003', name: 'Mechanical Keyboard', category: 'Accessories', price: 120, stock: 250 },
];

export const sales = [
    { id: 'SALE-001', customerId: 'CUST-001', productId: 'PROD-001', quantity: 2, total: 3000 },
    { id: 'SALE-002', customerId: 'CUST-002', productId: 'PROD-002', quantity: 5, total: 125 },
    { id: 'SALE-003', customerId: 'CUST-001', productId: 'PROD-003', quantity: 1, total: 120 },
];

export const purchases = [
    { id: 'PUR-001', supplier: 'Supplier A', productId: 'PROD-001', quantity: 50, cost: 50000 },
    { id: 'PUR-002', supplier: 'Supplier B', productId: 'PROD-002', quantity: 200, cost: 4000 },
    { id: 'PUR-003', supplier: 'Supplier A', productId: 'PROD-003', quantity: 100, cost: 10000 },
];
