import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
//carousel img
import img1 from "../../Asset/banner-1.jpg";
import img2 from "../../Asset/banner-2.jpg";
import img3 from "../../Asset/banner-3.jpg";
import pillerImg from "../../Asset/piller.png";
// banner img
import banncer1 from "../../Asset/rice-image.jpg";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import AnimatedQuotes from "../../components/AnimatedQuotes/AnimatedQuotes";
//css
import "./AboutCollege.css"
export default function Home() {
  const [confettiActive, setConfettiActive] = useState(false);
  const navigate = useNavigate();
  // Function to trigger confetti when the link is clicked
  const handleConfetti = () => {
    setConfettiActive(true);

    // Stop confetti after a few seconds
    setTimeout(() => {
      setConfettiActive(false);
      navigate("/ஹதீஸ்");
    }, 3000); // 5 seconds
  };

  return (
    <div>
      <Navbar />
      {confettiActive && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <section>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: "600px", position: "relative" }}
        >
          {/* Carousel Inner */}
          <div className="carousel-inner" style={{ height: "100%" }}>
            <div className="carousel-item active">
              <img
                src={img3}
                className="d-block w-100"
                alt="img-carousel"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100"
                alt="img-carousel"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img1}
                className="d-block w-100"
                alt="img-carousel"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Black Transparent Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "600px",
              backgroundColor: "rgba(0, 0, 0, 0.55)", // Black overlay with transparency
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // Aligns the text to the left
              padding: "50px",
            }}
          ></div>
        </div>

        <div className="m-4">
          <h4>
            இர்ஷாதுல் உலூம் இஸ்லாமிய அரபிக்கல்லூரியின் தொடக்கமும் வளர்ச்சியும்
            தோற்றம்
          </h4>
          <p>
            அல்லாஹ்வின் பேரருளால் நூருல் முஸ்லிமீன் முன்னேற்றச் சங்கத்தாரால்
            ஆங்கில வருடம் 09.07.1987 ஹிஜ்ரீ 12.11.1407 அன்று பெரம்பலூர் மாநகரில்
            இக்கல்லூரி தொடங்கப்பட்டது. காரணம் : திருச்சிக்கும் சேலத்துக்கும்
            இடையிலுள்ள பெரம்பலூர், துறையூர், ஆத்தூர் மற்றும் பெரம்பலூரை மையமாக
            வைத்து அதன் சுற்று வட்டாரங்களில் அரபிக் கல்லூரி இல்லை. இந்தத்
            தேவையைப் பூர்த்தி செய்வதற்காக வேண்டியும் மேலும் இப்பகுதியில் வாழும்
            மக்களுக்கிடையில பெருகிவரும் அனாச்சரங்கள், சீர்கேடுகள்,
            மார்க்கத்துக்குப் புறம்பான செயல்பாடுகளைக் களைந்திட வேண்டும் என்ற
            எண்ணத்திலும் இக்கல்லூரி தொடங்கப்பட்டது. மேலும் இப்பகுதியில்
            மட்டுமல்ல எல்லாப் பகுதிபளிலும் அறியாமை எனும் இருளை அகற்றி மார்க்க
            ஞான ஒளியை ஏற்றிட வேண்டும் என்ற நோக்கத்திலும் இக்கல்லூரி
            தொடங்கப்பட்டது.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <h4>பிடி அரிசி திட்டம்</h4>
            <p>
              ஆனால் உணவுக்கு பதிலாக பிடி அரிசி திட்டம் ஒன்று தொடங்கப்பட்டது.
              (இஸ்லாமிய பெண்மணிகள் தங்கள் வீடுகளில் தங்களுக்காக சமைக்க எடுக்கும்
              அரிசியில் ஒரு பிடியை கல்லூரியின் அரிசி சேமிப்புக் குடத்தில்
              சேமித்து வைப்பார்கள். அது நிறைந்தவுடன் கல்லூரிக்குக்
              கொண்டுவரப்பட்டு மாணவர்களின் உணவுக்குப் பயன்படுத்தப்படும்).
              இத்திட்டத்தில் பெரம்பலூர் முஸ்லிம்கள் மட்டுமல்லாமல் சுற்று
              வட்டாராத்திலுள்ள அனைத்து ஊர் முஸ்லிம்களும் பங்குபெற்று சிறப்பான
              ஆதாரபினை நல்கினார்கள். அல்லாஹ் அவர்கள் அனைவருக்கும் ஈருலக
              நற்காக்கியங்களைத் தந்தருள்வானாக – ஆமீன்.
            </p>
          </div>
          <img src={banncer1} className="" alt="banner-img-1" />
        </div>
        <section className="piller-section">
          <div className="container">
            <AnimatedQuotes  />
            <img className="piller-img" src={pillerImg} alt="piller-image" />
          </div>
        </section>
      </section>
    </div>
  );
}
