const items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];


const index = (req, res) => {
	res.render('index', {
		title: 'My Webstore'
	})
}

const listOfProducts = (req, res, next) => {
	res.render('products', {
		title: 'List of Products',
		items: items
	});
}

const newProducts = (req, res, next) => {
	const { newItem } = req.body;
	items.push({
		id: items.length + 1,
		name: newItem
	});
	res.redirect('/products');
}

module.exports = {
	index,
	listOfProducts,
	newProducts
}
