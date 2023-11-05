fetch('/api/v1/all_events')
    .then(response => response.json())
    .then(data => {
        var events = data.items;

        events.forEach(function (instance) {
            var coordinates = [instance.latitude, instance.longitude];
            var circle = L.circle(coordinates, 2000, greenCircleOptions).addTo(map);
            var marker = L.marker(coordinates, { icon: redMarkerIcon });
		console.log(instance);
            var popupContent = `
<div class="card popup-custom">
    <img class="card-img-top popup-image" src="../../../static/images/events/${instance.imageUrl}" alt="${instance.title}" onerror="this.src='https://example.com/default-image.jpg';">
    <div class="text-center">
        <p class="display-5" style="color: brown;">${instance.title}</p>
        <p class="" style="font-family: cursive;"><b>Venue:</b> ${instance.venue}</p>
        <p class="card-text"><b>Start:</b> ${instance.startDateTime}</p>
        <p class="card-text"><b>End:</b> ${instance.endDateTime}</p>
        <p class="card-text"><b>Organizer:</b> ${instance.organizer}</p>
    </div>
</div>
`;

            marker.bindPopup(popupContent, { maxWidth: "auto" }).addTo(map);
        });
    });
