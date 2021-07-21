import React, {ReactElement} from 'react';
import '../App.css';

const Skills = ():ReactElement => {
  return (
    <div id="skills" className="skills">
      <h1 className="skillsTitle">My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4>TypeScript</h4>
              <h4>JavaScript</h4>
              <h4>Google Cloud Deployment</h4>
              <h4>HTML5</h4>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4>ReactJs</h4>
              <h4>React Native</h4>
              <h4>Material UI</h4>
              <h4>CSS</h4>
              <h4>BootStrap</h4>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4>WebPack</h4>
              <h4>Passport.js/ OAuth2</h4>
              <h4>Nodejs</h4>
              <h4>Git</h4>
            </div>
          </div>
          {/* */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <h4>MySQL</h4>
              <h4>Sequelize</h4>
              <h4>MongoDB</h4>
              <h4>Postman</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
