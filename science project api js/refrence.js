// Generate star chart

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'd5dea32923msh8d81690768cfa38p196029jsn213fae4fe29d',
			'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
		},
		body: '{"observer":{"date":"2019-12-20","latitude":33.775867,"longitude":-84.39733},"style":"inverted","view":{"parameters":{"constellation":"ori"},"type":"constellation"}}'
	};
	
	fetch('https://astronomy.p.rapidapi.com/api/v2/studio/star-chart', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

	// Get positions for body

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd5dea32923msh8d81690768cfa38p196029jsn213fae4fe29d',
			'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
		}
	};
	
	fetch('https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
	
		// Generate moon phase
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'd5dea32923msh8d81690768cfa38p196029jsn213fae4fe29d',
			'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
		},
		body: '{"format":"png","observer":{"date":"2020-11-01","latitude":6.56774,"longitude":79.88956},"style":{"backgroundColor":"red","backgroundStyle":"stars","headingColor":"white","moonStyle":"sketch","textColor":"red"},"view":{"type":"portrait-simple"}}'
	};
	
	fetch('https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))