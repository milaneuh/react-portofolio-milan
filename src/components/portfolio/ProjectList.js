import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class Projectlist extends Component {
    state = {
        projects:portfolioData,
        radios: 
        [
            {id:1,value:"javascript"},
            {id:2,value:"css"},
            {id:3,value:"react"},
            {id:4,value:"php"},
            {id:5,value:"bootstrap"},
            {id:6,value:"kotlin"},

        ],
        selectedRadio: ""
    };

    handleRadio = (event) =>{
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }
    render() {
        let {projects, radios, selectedRadio} = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) =>{
                            return (
                                <li key={radio.id}>
                                    <input 
                                    type="radio"
                                    name="radio"
                                    checked = {radio.value == selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        selectedRadio != ""?
                        (
                        projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(project => {
                            return(
                                <Project 
                                    key= {project.id}
                                    item = {project}
                                />
                            )
                        })
                        ):
                        (
                            projects.map(project => {
                                return(
                                    <Project
                                        key={project.id}
                                        item={project}
                                    />
                                )
                            })
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Projectlist;
