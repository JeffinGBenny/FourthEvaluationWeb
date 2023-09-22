const TravelRequests = document.getElementById('TravelRequests');

function displayTravelRequests() {
    TravelRequests.innerHTML = '';
    const reversedpost=posts.slice().reverse();

    for (const post of reversedpost) {
        const postElement = document.createElement('div');
        postElement.classList.add('border', 'p-3', 'mb-3');

        postElement.innerHTML = `
            <h4>${post.name}</h4>
            <div>${post.destination}</div>
            <p><strong>Author:</strong> ${post.name}</p>
            <p><strong>Email:</strong> ${post.email}</p>
            <p><strong>Date:</strong> ${post.timestamp.toLocaleString()}</p>
        `;
        blogPosts.appendChild(postElement);
    }
}
