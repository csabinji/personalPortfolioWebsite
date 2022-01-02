import './project.css'
import Dekhawati from '../../assets/img/dekhawati.jpg'

export default function Projects() {
    return (
        <section id="portfolio" class="portfolio">
            <div class="container">

                <div class="section-title">
                    <span>My Projects</span>
                    <h2>My Projects</h2>
                    <p>These are some of my projects.</p>
                </div>

                <ul id="portfolio-flters" class="d-flex justify-content-center">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-popular">Popular</li>
                    <li data-filter=".filter-mv">Music Video</li>
                    <li data-filter=".filter-collab">Collab</li>
                </ul>

                <div class="row portfolio-container">

                    <div class="col-lg-4 col-md-6 portfolio-item filter-mv">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/VaetwZ8sPN8" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src={Dekhawati} class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Dekhawati</h4>
                            <p>Dekhawati EP</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-popular">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/IE1VEpboIzo" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/IE1VEpboIzo/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Hamro Lipulekh ra Kalapani</h4>
                            <p>Single</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-popular">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/lC0BwTgCxYQ" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/lC0BwTgCxYQ/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Yaha Ganja Pahinxa</h4>
                            <p>Single</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-mv">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/LGz_gGeMGQA" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/LGz_gGeMGQA/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Bageko Khola</h4>
                            <p>Dekhawati EP</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-popular">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/bXItvhvVKAc" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/bXItvhvVKAc/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Dari</h4>
                            <p>Sangarsha</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-collab">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/E4DwoYKhrKM" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/E4DwoYKhrKM/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>SABDALE BALDINXU AAGO</h4>
                            <p>Rabbit  ft. Sabin Chapagain</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-popular">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/kQ7-n0GfA7k" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/kQ7-n0GfA7k/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Paisa</h4>
                            <p>Sangarsha</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-collab">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/A79ktKoZjLg" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/A79ktKoZjLg/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Galti Bho</h4>
                            <p>Beat : Girish Khatiwada </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-popular">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/UI-vnLzRfbY" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/UI-vnLzRfbY/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Rapping with only S words</h4>
                            <p>Sangarsha</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-mv">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/7RPdlwOtpZk" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/7RPdlwOtpZk/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Kaidi</h4>
                            <p>Ma pani Rapper</p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-collab">
                        <div class="portfolio-img">
                            <a href="https://www.youtube.com/embed/CMPcf_4QOvQ" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://i.ytimg.com/vi/CMPcf_4QOvQ/maxresdefault.jpg" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Adhuro Geet</h4>
                            <p> Sabin Chapagain ft. Gongba </p>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-mv">
                        <div class="portfolio-img">
                            <a href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsabin.dai.564%2Fvideos%2F350603176490282%2F&show_text=false&width=560&t=0" width="560" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" data-gallery="portfolioGallery"
                                class="portfolio-lightbox preview-link">
                                <img src="https://1.bp.blogspot.com/-XEccdplhEf0/YNmWF5myahI/AAAAAAAAHok/FG2L02MNEw49dixbtLy6eML4KBkkaigvQCLcBGAsYHQ/s720/break.png" class="img-fluid" alt="" />
                            </a>
                        </div>
                        <div class="portfolio-info">
                            <h4>Breakbars Cypher</h4>
                            <p> Break Station </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}