function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponser() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#regionlist');
	s.style.display = block;
	s.textContent = sel.value;
	
}

function selectResponset() {
	const t = document.querySelector('#selected')
	const sel = document.querySelector('#stormtlist');
	t.style.display = block;
	t.textContent = sel.value;
	
}
