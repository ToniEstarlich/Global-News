class mixcardscomponent extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
            <div class="content-wrapper">
  
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

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Forth Title that is Quite Long</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing Fifth Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio&hellip;</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

<!--  <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image">
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div> -->

</div>
        `;
    }
}

window.customElements.define('mix-card-component', mixcardscomponent);