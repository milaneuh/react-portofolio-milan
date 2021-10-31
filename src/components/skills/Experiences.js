import React from 'react';

const Experiences = () => {
    return (
        <div className="experiences">
            <h3>Experiences</h3>
            <div className="exp1">
                <h4>Mobile app Designer and Developer</h4>
                <h5><span>Alexandre ODA</span> | Internship. Oct.2021 - Nov.2021</h5>
                <p>Design and Developpement of an Android application based on data protection against IMSI Catchers. My contributions were : <br />
                        -UML <br />
                        -Wireframing <br />
                        -Developping a Java Android application</p>
            </div>
            <div className="exp2">
                <h4>Network technician</h4>
                <h5><span>DSI Toulouse métropole</span> | Internship. Fev.2021</h5>
                <p>Within the IT Department from Toulouse Métropole: <br />
                    -Switchs configuraition<br />
                    -Setting up servers<br />
                    -tickets responses.
                </p>
            </div>
            <div className="exp3">
                <h4>Discovery Internship</h4>
                <h5><span>Artilect FABLAB Toulouse</span> | Internship. Fev.2017</h5>
                <p>Designed and printed a 3d project</p>
            </div>
        </div>
    );
};

export default Experiences;