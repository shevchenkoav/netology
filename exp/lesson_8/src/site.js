class Site {
	constructor() {
		this._orders = {};
		this._price = 100;
	}

	get price() {
		return this._price;
	}

	get orders() {
		return this._orders;
	}

	makeOrder(customer, order, promo) {
		if (customer.birthday) {
			order.pizzas += 1;
		}

		order.amount = order.pizzas * this.price;

		if (promo == 'ABCD') {
			order.discount = 100;
			order.amount -= order.discount;
		}

		if (customer.bonus) {
			order.amount -= customer.bonus;
		}

		customer.buy(order);

		this._orders = {
			id: new Date().getTime(),
			customer,
			order
		}
	}

	clear() {
		this._orders = {};
	}
}

module.exports = Site;

