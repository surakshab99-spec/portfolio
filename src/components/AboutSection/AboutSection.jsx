import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='yashodha.jpeg' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>"I am a Web Developer skilled in HTML, CSS, JavaScript, Python, and React, I enjoy taking complex problems and turning them into intuitive web applications. Whether crafting responsive front-end interfaces."</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
