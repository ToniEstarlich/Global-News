class BusinessComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="news">
            <div class="title">
                <h2 class="news-title" style="text-decoration: underline; color: white; margin-left: 86px; margin-botton: 20px; font-size: 50px;">Business</h2>
            
            <div class="newsBox"> 
                <div class="content-wrapper">
                    <!-- News Card 1 -->
                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing First Title</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 2 -->
                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing Second Title that is Quite Long</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 3 -->
                    <div class="news-card">
                        <a href="#" class="news-card__card-link"></a>
                        <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" class="news-card__image">
                        <div class="news-card__text-wrapper">
                            <h2 class="news-card__title">Amazing Title</h2>
                            <div class="news-card__post-date">Jan 29, 2018</div>
                            <div class="news-card__details-wrapper">
                                <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae&hellip;</p>
                                <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}

window.customElements.define('business-component', BusinessComponent);
