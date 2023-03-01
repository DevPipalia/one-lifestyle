import React from "react";
import { Splide } from "@splidejs/splide";

function Slider(){
    return(
        <section id="image-carousel" class="splide" aria-label="Beautiful Images">
        <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg" alt="" />
			</li>
			<li class="splide__slide">
				<img src="https://www.shutterstock.com/image-vector/simple-web-icon-vector-address-260nw-253758850.jpg" alt="" />
			</li>
			<li class="splide__slide">
				<img src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-small-url-icon-opened-on-the-computer-png-image_4424025.jpg" alt="" />
			</li>
		    </ul>
         </div>
        </section>
    )
}

export default Slider;