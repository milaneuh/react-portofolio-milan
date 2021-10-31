import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
                <li className="hobby">
                    <i class="fas fa-book"></i>
                    <span>Reading</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-dice-d20"></i>
                    <span>Tabletop Role Playing Games</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-suitcase"></i>
                    <span>Travelling</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-hiking"></i>
                    <span>Hiking</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-file-code"></i>
                    <span>Programming</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;