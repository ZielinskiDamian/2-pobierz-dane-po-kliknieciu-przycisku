let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
	fetch('https://akademia108.pl/api/ajax/get-post.php')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			console.log(data.userId);
			console.log(data.id);
			console.log(data.title);
			console.log(data.body);

			let idElement = document.createElement('p');
			idElement.textContent = `User id: ${data.userId}`;
			let id = document.createElement('p');
			id.textContent = `ID Posta: ${data.id}`;
			let newTitle = document.createElement('p');
			newTitle.textContent = `Tytuł Posta: ${data.title}`;
			let newBody = document.createElement('p');
			newBody.textContent = `Treść posta: ${data.body}`;
			let hr = document.createElement('hr');
			// console.log(idElement);
			// console.log(id);
			// console.log(newTitle);
			// console.log(newBody);
			document.body.appendChild(newBody);
			document.body.appendChild(id);
			document.body.appendChild(newTitle);
			document.body.appendChild(idElement);
			document.body.appendChild(hr);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
