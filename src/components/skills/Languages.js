import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
    state = {
        languages : [
            {id:1, value: "Javascript", xp:1.2},
            {id:2, value: "CSS", xp:1.5},
            {id:3, value: "Php", xp:1},
            {id:4, value: "Python", xp:1},
            {id:5, value: "Java & Kotlin", xp:0.9},
        ],

        frameworks: [
            {id: 1, value: "React", xp:0.4},
            {id: 2, value: "Bootstrap", xp:1.2},
            {id: 3, value: "Sass", xp:0.4},
            {id: 4, value: "Spring", xp:0.9},
            {id:5, value: "Ajax & jQuery", xp:0.6},
        ]
    }
    render() {

        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                object = {languages}
                className="languagesDisplay"
                title="Languages"
                />
                <ProgressBar
                object = {frameworks}
                className="frameworksDisplay"
                title="Frameworks & Libraries" />
            </div>
        );
    }
}

export default Languages;
