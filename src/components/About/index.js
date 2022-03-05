import React from 'react';
import coverImage from'../../assets/headshot.jpg';
function About() {
    return (
        <section className="my-5">
            <h1 id="about">EJC</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover" />
            <div className="my-2">
                <p> I am a person</p>
                </div>
            </section>
    );
}

export default About;