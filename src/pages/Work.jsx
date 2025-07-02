import Card from '../components/Card';

const Work = () => {
  return (
    <section className="work">
      <h1>
        <b>Projects</b>
      </h1>
      <p>
        <strong>
          <a className="work-link" href="https://www.github.com/atypicalesper">github&mdash;</a>
          <a className="work-link" href="https://www.naukri.com/code360/profile/atypicalesper">Coding Ninjas&mdash;</a>
          <a className="work-link" href="https://www.leetcode.com/atypicalesper/">leetcode&mdash;</a>

        </strong>
      </p>

      <div className="grid">
        <Card 
          title="Drumkit Game" 
          description="Description of the card goes here." 
          imageSrc="./assets/images/drumkit.png" 
          link="https://github.com/atypicalesper/drumkit"
        />
        
        <Card 
          title="TBA" 
          description="Hehe We're under development" 
          imageSrc="https://via.placeholder.com/300"
        />
        
        <Card 
          title="TBA" 
          description="Description of the project goes here." 
          imageSrc="https://via.placeholder.com/300"
        />
        
        <Card 
          title="TBA" 
          description="Description of the project goes here." 
          imageSrc="https://via.placeholder.com/300"
        />
      </div>
    </section>
  );
};

export default Work;