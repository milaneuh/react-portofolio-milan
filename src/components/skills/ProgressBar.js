import React from 'react';

const ProgressBar = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Years of experiences</span>
                <span>1 year</span>
                <span>2 years</span>
            </div>

            <div>
                {
                    props.object.map((item) => {
                        let xpYears =2;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className="languagesList">
                                <li>
                                   {item.value}
                                </li>
                                <div className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;