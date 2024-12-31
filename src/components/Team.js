import React from 'react';

const Team = () => (
  <section className="my-4 text-center">
    <h2>Our Team</h2>
    <div className="row">
      <div className="col-md-4">
        <img src="/images/sutar-sir.jpg" alt="Sutar Sir" className="img-fluid rounded-circle" />
        <p>Faculty Convener: Sutar Sir</p>
      </div>
      <div className="col-md-4">
        <img src="/images/deshmukh-sir.jpg" alt="Deshmukh Sir" className="img-fluid rounded-circle" />
        <p>HOD: Deshmukh Sir</p>
      </div>
      <div className="col-md-4">
        <h4>Current Team</h4>
        <ul>
          <li>Chairperson: Speed</li>
          <li>General Secretary: GS</li>
          {/* Add other members */}
        </ul>
      </div>
    </div>
  </section>
);

export default Team;