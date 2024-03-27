import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <hr />
      <h2>Functional Component</h2>
      <User name={"Name: Mohak"} />
      <hr />
      <h2>Class based component</h2>
      <UserClass name={"Name: Mohak"} />
      <hr />
    </div>
  );
};

export default About;
