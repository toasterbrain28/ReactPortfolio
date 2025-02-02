import "./About.css";

export default function About() {
    return (
      <div>
        <h1 style={{ color: "#786F52" }}>About Me</h1>
        <img src={avatar} alt="avatar" />
        <p>
         Hello! I'm Talon Barkie, currently a bootcamp student for
         Uconn's full-stack web dev course! I am looking forward to the challenges!
        </p>
        <p>
         I got my associate's in multimedia design, with a focus in
         graphic design, and a small concentration in VR development. My skills as 
         a game developer, and designer will benefit greatly from learning many
         programming languages. Plus being able to do web stuff on your own is neat!
        </p>
        
      </div>
    );
  }