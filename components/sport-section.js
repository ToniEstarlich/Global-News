class SportComponent extends HTMLElement {
    connectedCallback() {
        const newsData = {
            "sportsNews": [
                {
                    "epigraph": "Breaking boundaries in tennis",
                    "headline": "Historic Victory at Wimbledon 2024",
                    "subtitle": "A newcomer shocks the world with her stunning performance",
                    "picture": "assets/images/sport1.jpg"
                },
                {
                    "epigraph": "The rise of American football stars",
                    "headline": "Unstoppable Force: The Rise of Quarterback David Stone",
                    "subtitle": "David Stone is redefining the game with his incredible skills",
                    "picture": "assets/images/sport2.jpg"
                },
                {
                    "epigraph": "A new dawn for cycling",
                    "headline": "Tour de France 2024: The Underdog Triumphs",
                    "subtitle": "An unexpected victory shakes the cycling world",
                    "picture": "assets/images/sport3.jpg"
                }
            ]
        };

        const sportsNewsSection = `
            <div class="title">
                <h2 class="news-title" style="text-decoration: underline; color: white; margin-left: 86px; margin-bottom: 20px; font-size: 50px;">Sports</h2>
            </div>
            <div class="newsBox"> 
                <div class="content-wrapper">
                    ${newsData.sportsNews.map(sport => `
                        <div class="news-card">
                            <a href="#" class="news-card__card-link"></a>
                            <img src="${sport.picture}" alt="" class="news-card__image">
                            <div class="news-card__text-wrapper">
                                <h2 class="news-card__title">${sport.headline}</h2>
                                <div class="news-card__post-date">${sport.date || 'Jan 29, 2018'}</div>
                                <div class="news-card__details-wrapper">
                                    <p class="news-card__excerpt">${sport.subtitle}</p>
                                    <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        this.innerHTML = `
            <div class="news">
                ${sportsNewsSection}
            </div>
        `;
    }
}

customElements.define('sport-component', SportComponent);
