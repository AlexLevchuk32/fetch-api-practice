import '../scss/style.scss';

getUsersData();

async function getUsersData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		// console.log(data);

		data.forEach((user) => {
			const template = `<li class='users__item'>${user.name}</li>`;

			document.querySelector('.users__list').insertAdjacentHTML('beforeend', template);
		});
	} catch (error) {
		console.log(error);
	}
}
