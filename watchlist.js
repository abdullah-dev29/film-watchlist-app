function renderWatchlist() {
    const searchResultEl = document.getElementById("results")
    searchResultEl.style.backgroundImage = 'none'
    searchResultEl.style.backgroundColor = '#121212'
    const html = getWatchlistHtml()
    console.log(html)
    searchResultEl.innerHTML = html
}

function getWatchlistHtml () {
    let stored = JSON.parse(localStorage.getItem("watchlist"))
    let html = ''
    if(stored === null) {
        html = `
            <div class="no-results no-results-watchlist">
                <p>Your watchlist is looking a little empty...</p>
                <a href="index.html">
                <i class="fa-solid fa-circle-plus"></i>
                Let's add some movies!
                </a>
            </div>
        `
    } else {
        stored.forEach(item => {
            html += `
                <div class="result">

                    <div class="result-poster">
                        <img src="${item.Poster}" alt="">
                    </div>

                    <div class="result-content">
                        <div class="result-content--title-rating">
                            <span class="title">${item.Title}</span>
                            <span class="rating">
                                <i class="fa-solid fa-star"></i>
                                ${item.imdbRating}
                            </span>
                        </div>
                        <div class="result-content--spans">
                            <span>${item.Runtime}</span>
                            <span>${item.Genre}</span>
                            <span class="remove" id="remove" data-id="${item.imdbID}">
                                <i class="fa-solid fa-circle-minus"></i>
                                Remove
                            </span>
                        </div>
                        <p>${item.Plot}</p>
                    </div>

                </div>
            `
        })
    }
    return html
}

renderWatchlist()