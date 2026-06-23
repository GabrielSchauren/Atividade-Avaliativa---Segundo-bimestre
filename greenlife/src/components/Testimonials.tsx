import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mariana Silva',
      role: 'Cliente GreenLife',
      text: 'Os produtos da GreenLife transformaram minha rotina! O óleo de coco é simplesmente maravilhoso para a pele.',
      stars: 5,
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Carlos Mendes',
      role: 'Cliente GreenLife',
      text: 'Comprei os suplementos e senti uma diferença enorme na minha disposição. Recomendo a todos!',
      stars: 5,
      image: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Ana Paula Costa',
      role: 'Cliente GreenLife',
      text: 'A linha de cosméticos veganos é incrível! Minha pele nunca ficou tão saudável.',
      stars: 5,
      image: 'https://i.pravatar.cc/150?img=3'
    },
    {
      name: 'Roberto Almeida',
      role: 'Cliente GreenLife',
      text: 'Os produtos naturais da GreenLife têm uma qualidade incomparável. Já recomendei para toda a família!',
      stars: 5,
      image: 'https://i.pravatar.cc/150?img=4'
    },
    {
      name: 'Fernanda Lima',
      role: 'Cliente GreenLife',
      text: 'O shampoo sólido de alecrim é maravilhoso! Meu cabelo nunca esteve tão saudável e brilhante.',
      stars: 5,
      image: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  const totalSlides = testimonials.length;

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`star ${index < count ? 'star-filled' : 'star-empty'}`}
        fill={index < count ? '#fbbf24' : 'none'}
        color={index < count ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Conselho de quem conhece</span>
          <h2>Cada cliente importa!</h2>
          <p>Veja o que nossos clientes dizem sobre os produtos GreenLife</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev-btn" onClick={goToPrevious}>
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src={test.image} alt={test.name} />
                  </div>
                  <div className="testimonial-stars">
                    {renderStars(test.stars)}
                  </div>
                  <p className="testimonial-text">"{test.text}"</p>
                  <h4>{test.name}</h4>
                  <span className="testimonial-role">{test.role}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={goToNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;