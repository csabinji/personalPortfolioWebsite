import './contact.css'

export default function Contact() {
    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <span>Contact Me</span>
                    <h2>Contact Me</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="info-box">
                                    <i class="bx bx-share-alt"></i>
                                    <h3>Social Profiles</h3>
                                    <div class="social-links">
                                        <a href="https://www.facebook.com/sabinchapagainmusic" class="facebook" target="_blank"><i class="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/sabin.chapa/" class="instagram" target="_blank"><i class="bi bi-instagram"></i></a>
                                        <a href="https://youtube.com/sabinchapagainmusic" class="youtube" target="_blank"><i class="bi bi-youtube"></i></a>
                                        <a href="https://www.linkedin.com/in/sabin-chapagain-1372a91b8/" class="linkedin" target="_blank"><i class="bi bi-linkedin"></i></a>
                                        <a href="https://open.spotify.com/artist/2FETLAZXC7aNKB49GhwWI1?si=eshVA1eyQWCJPfwLsOXTJA" class="soundwave" target="_blank"><i class="bi bi-soundwave"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box mt-4">
                                    <i class="bx bx-envelope"></i>
                                    <h3>Email Me</h3>
                                    <p>csabinji@gmail.com</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-box mt-4">
                                    <i class="bx bx-phone-call"></i>
                                    <h3>Call Me</h3>
                                    <p>+977 9814028392</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div class="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div class="form-group mt-3">
                                <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}