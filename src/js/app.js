import '../scss/style.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

getUsersData();
getProductsData();

async function getUsersData() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		// console.log(data);

		function sortNames() {
			const namesArr = [];

			data.forEach((user) => {
				namesArr.push(user.name);
			});

			return namesArr.sort();
		}

		const sortedNames = sortNames();

		sortedNames.forEach((name) => {
			// console.log(name);
			const template = `<li class='users__item'>${name}</li>`;
			document.querySelector('.users__list').insertAdjacentHTML('beforeend', template);
		});
	} catch (error) {
		console.log(error);
	}
}

async function getProductsData() {
	try {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();

		const products = data.products;
		// console.log(products);
		let rows = '';

		products.forEach((product) => {
			rows += `
        <tr>
          <td>
            ${product.id}
          </td>
          <td>
            ${product.title}
          </td>
          <td>
            ${product.description}
          </td>
          <td>
            ${product.price}
          </td>
          <td>
            ${product.discount}
          </td>
          <td>
            ${product.rating}
          </td>
          <td>
            ${product.stock}
          </td>
          <td>
            ${product.brand}
          </td>
          <td>
            ${product.category}
          </td>
          <td>
            <img src='${product.thumbnail}' title='${product.title}' alt='${product.title}' style='width: 50%;' />
          </td>
        </tr>
      `;

			document.querySelector('.table-rows').insertAdjacentHTML('beforeend', rows);
		});
	} catch (error) {
		console.log(error);
	}
}
