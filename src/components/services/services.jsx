import './services.css'

export default function Services() {
    return (
        <section id="services" class="services">
            <div class="container">

                <div class="section-title">
                    <span>My Services</span>
                    <h2>My Services</h2>
                    <p> I am a beat producer and sound engineer at Loop Records. </p>
                </div>

                <div class="row">
                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bxs-microphone-alt"></i></div>
                            <h4 class="title"><a href="https://www.facebook.com/looprecordsnp" target="_blank">Audio Recording</a></h4>
                            <p class="description">We offer high-quality vocal recording in our acoustic-treated studio.</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bxs-music"></i></div>
                            <h4 class="title"><a href="https://www.facebook.com/looprecordsnp" target="_blank">Music Production</a></h4>
                            <p class="description">We make high-quality music for Hip-hop and other genres.</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box">
                            <div class="icon"><i class="bx bx-bar-chart"></i></div>
                        <h4 class="title"><a href="https://www.facebook.com/looprecordsnp" target="_blank">Mixing & Mastering</a></h4>
                        <p class="description">We have a team of mixing engineers with more than 6 years of experience.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-world"></i></div>
                        <h4 class="title"><a href="https://www.facebook.com/looprecordsnp" target="_blank">Promotion</a></h4>
                        <p class="description">We can help you reach more audiences by promoting your song on different social sites.</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    )
}