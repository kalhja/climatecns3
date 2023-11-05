fetch('/api/v1/all_records')
    .then(response => response.json())
    .then(data => {
        var records = data.items;

        records.forEach(function (record) {
            var coordinates = [record.latitude, record.longitude];

            // Create a green-tinted circle
            var circle = L.circle(coordinates, 2000, greenCircleOptions).addTo(map);
            var marker = L.marker(coordinates, { icon: redMarkerIcon });
            var popupContent = `
<div class="card popup-custom">
    <img class="card-img-top popup-image" src="../../../static/images/records/${record.imageUrl}" alt="${record.title}" onerror="this.src='https://example.com/default-image.jpg';">
    <div class="text-center">
        <p class="display-5" style="color: brown;">${record.species}</p>
        <p class="" style="font-family: cursive;"><b>Date Planted:</b> ${record.datePlanted}</p>
        <p class="card-text"><b>Location:</b> ${record.location}</p>
        <p class="card-text"><b>Number of trees:</b> ${record.numberOfTrees}</p>
    </div>
</div>
`;

            marker.bindPopup(popupContent, { maxWidth: "auto" }).addTo(map);
        });
    });
