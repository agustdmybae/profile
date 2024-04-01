import './About.css'
function About() {
  return (
    <div class='about-section'>
      <section class='content'>
        <h1 class="title">About me.</h1>
        <p class="intro">
            Hi, this is Stephanie from Taiwan.<br/>
            <br/>
            I’m currently a Computer Science grad student at Virginia Tech, specializing in frontend and fullstack development.<br/> 
            <br/>
            My passion lies in building digital products with meaningful impacts.
        </p>
      </section>
      <img src={require('./image/home-profile.png')} alt='profile' class='image'></img>
    </div>
  );
}

export default About;