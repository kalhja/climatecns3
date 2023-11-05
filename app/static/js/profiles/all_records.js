async function fetchData() {
	try {
		const response = await fetch(`/api/v1/all_records`);
		const data = await response.json();
		return data.items;
	} catch (error) {
		console.error('Error fetching data:', error);
		return [];
	}
}

async function renderTreePlantingRecords() {
	const treePlantingData = await fetchData();

	const container = document.querySelector('.grid');

	for (const record of treePlantingData) {
		const card = document.createElement('div');
		card.className = 'bg-white rounded-lg shadow-lg';

		card.innerHTML = `
      <img src="../../../static/images/records/${record.imageUrl || 'placeholder_image_url'}" alt="Tree Image" class="h-40 w-full object-cover object-top rounded-t-lg">
      <div class="p-4">
	<h2 class="text-xl font-semibold mb-2">Tree Species: ${record.species}</h2>
	<p class="text-gray-600 mb-2">Location: ${record.location}</p>
	<p class="text-gray-600 mb-2">Date Planted: ${moment(record.datePlanted).format('MMMM D, YYYY')}</p>
	<p class="text-gray-600 mb-2">Number of Trees: ${record.numberOfTrees}</p>
      </div>
    `;

		container.appendChild(card);
	}
}

renderTreePlantingRecords();
