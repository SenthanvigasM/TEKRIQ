import React from 'react';
import './Home.css';
import Nav from './Navbar.jsx'
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import digitalGif from './assets/digital-lifestyle-ent.gif';
import promoVideo from './assets/promo_vid.gif';
import webDev from './assets/web-dev.gif';
import socialMedia from './assets/social-media-1.gif';
import brandGif from './assets/branding-1.gif';
import videoEditing from './assets/editing-1.gif';
import multimediaGif from './assets/multimedia.gif';
import adGif from './assets/google-ad.gif';
import aboutImg from './assets/about-us.gif';

const services = [
  {
    icon: "🎥",
    title: "Promotion Videos",
    description: "Engaging and high-quality videos to showcase your brand, products, or services — ideal for social media, ads, and events.",
    image: promoVideo,
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Professional websites that are fast, secure, and designed to convert. From landing pages to full e-commerce platforms.",
    image: webDev,
  },
  {
    icon: "📱",
    title: "Social Media Handling",
    description: "We build your brand across platforms like Instagram, Facebook, and LinkedIn with creative content and active engagement.",
    image: socialMedia,
  },
  {
    icon: "🖼️",
    title: "Branding",
    description: "We help define your identity through logo design, brand strategy, and visual storytelling that resonates with your audience.",
    image: brandGif,
  },
  {
    icon: "✂️",
    title: "Video Editing",
    description: "Polished, professional video editing for reels, ads, YouTube, and more — built for impact and clarity.",
    image: videoEditing,
  },
  {
    icon: "🛠️",
    title: "Multimedia Support",
    description: "From graphic design to motion graphics, we support all your media needs under one roof.",
    image: multimediaGif,
  },
  {
    icon: "📢",
    title: "Google & Meta Ads",
    description: "Reach your ideal customers with strategic ad campaigns that deliver real ROI across Google, Facebook, and Instagram.",
    image: adGif,
  },
];

const Home = () => {
  return (
<>
    <Nav />
    <div className="home">
      {/* Introduction Section */}
      <section className="intro-section" id="intro">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Digital Impact Starts Here</h1>
          <p>
            Amplify your brand’s online presence with our cutting-edge digital marketing strategies. 
            From engaging content to result-driven campaigns, TEKRIQ helps your business grow online smartly and effectively.
          </p>
          <a href="https://forms.gle/vjLDhWi1qUwbAnFF6" className="intro-btn">Get Started</a>
        </motion.div>

        <motion.div
          className="intro-img"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={digitalGif} alt="Digital Marketing" />  
        </motion.div>

      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => {
            const isLast = index === services.length - 1 && services.length % 3 !== 0;
            return (
              <motion.div
                className={`service-card ${isLast ? "center-last" : ""}`}
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-inner">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="card-img"
                  />
                  <motion.div
                    className="card-info"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={aboutImg} alt="About TEKRIQ" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>About TEKRIQ</h2>
          <p>
            At <strong>TEKRIQ</strong>, we fuse creativity with cutting-edge technology to craft digital experiences that captivate, engage, and convert.
            From cinematic promotional videos to high-converting ad campaigns, everything we build is tailored to your brand’s success.
          </p>
          <p>
            We’re not just service providers — we’re strategic partners.
            Our transparent process, dedication to client success, and focus on real results ensure that every solution is aligned with your vision.
          </p>
          <p>
            Backed by a passionate team of experts, TEKRIQ is committed to pushing boundaries and delivering digital excellence that elevates your brand’s presence and performance.
          </p>
        </motion.div>
        <br />
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <motion.div
          className="footer-container"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Quick Links */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#intro">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="footer-title">Contact</h4>
            <p>Email: <a href="mailto:tekriq@gmail.com">tekriq@gmail.com</a></p>
            <p>Founders:</p>
            <ul>
              <li>M.V. Ranjith - 9443774973</li>
              <li>M. Aswanth - 9443853434</li>
              <li>M. Vidhyaadaran - 888356049</li>
              <li>S. Aswin - 9344036861</li>
            </ul>
            <p>Follow Us:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/tekriq.in?igsh=YTN4cnB2YXBkdGx0" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href=" https://x.com/tekriq_in?s=21" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="footer-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLScQsAFAEdd6p7OjUwFvXUdq0UqRGy9G2lI5Fjs1QAGeItczZQ/formResponse"
            method="POST"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="footer-title">Get in Touch</h4>
            <input type="text" name="entry.2005620554" placeholder="Your Name" required />
            <input type="email" name="entry.1045781291" placeholder="Your Email" required />
            <textarea name="entry.1166974658" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </motion.form>
        </motion.div>
          
        <motion.div
          className="footer-bottom"
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p>© 2025 TEKRIQ. All rights reserved.</p>
          <p>Designed By <a href="https://senthanvigasm.netlify.app/" target='new' className='sen'>SENTHAN VIGAS M</a></p>
        </motion.div>
      </footer>
    </div>
    
</>
  );
};

export default Home;
