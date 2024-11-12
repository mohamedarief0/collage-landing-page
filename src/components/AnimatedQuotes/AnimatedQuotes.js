import React, { useEffect, useState } from "react";
import "./AnimatedQuotes.css";

const quotes = [
  {
    text: "நிச்சயமாக உங்களில் ஒருவர் தன் சகோதரருக்கு கண்ணாடிப் போன்றாவார், எனவே தன் சகோதரரிடம் தவறைப் பார்த்தால் அதை அவரை விட்டும் அகற்றட்டும்.",
    author: "நூல் : திர்மிதீ",
  },
  {
    text: "ஒவ்வொரு மார்க்கத்திற்கும் ஒரு நற்குணம் இருக்கிறது, இஸ்லாத்தின் நற்குணம் வெட்கமாகும்.",
    author: "நூல் : முஅத்தா மாலிக்",
  },
  {
    text: "எவர் அல்லாஹ்வைக் கொண்டும் மறுமை நாளைக் கொண்டும் ஈமான் கொண்டுள்ளாரோ அவர் தன் அண்டை வீட்டாரை நோவினை படுத்த வேண்டாம்.",
    author: "நூல் : புகாரி,முஸ்லிம்",
  },
  {
    text: "உருவப்படமோ, நாயோ இருக்கும் வீட்டில் வானவர்கள் நுழையமாட்டார்கள்.",
    author: "நூல் : முஸ்லிம்",
  },
  {
    text: "நீ உலகத்தின் மீது பற்றற்றவனாக இரு. அல்லாஹ் உன்னை விரும்புவான். மக்களிடத்தில் உள்ளவற்றிலிருந்து பற்றற்றவனாக இரு. மக்கள் உன்னை விரும்புவார்கள்.",
    author: "நூல் : இப்னு மாஜா",
  },
  {
    text: "நீங்கள் குர்ஆனை ஒதுங்கள் ஏனெனில் நிச்சயமாக அது மறுமை நாளில் தன் தோழனுக்கு (ஓதுபவருக்கு) பரிந்துரைப்பதற்காக வரும்.",
    author: "நூல் : முஸ்லிம்",
  },
];

export default function AnimatedQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000); // Change every 15 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <>
      <div className="container">
        <div className="quotes-container animated-quotes">
          {quotes.map((quote, index) => (
            <p
              key={index}
              className={`quote ${index === currentQuoteIndex ? "active" : ""}`}
            >
              {quote.text}
              <span className="author">{quote.author}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
