import React, { Component } from 'react';

export default class Results extends Component {
    render() {
        const divStyle = {
            display: 'none',
        };
        return (
            <div>
                <div id="error-msg" style={divStyle}>
                    <h3> </h3>
                </div>
                <div id="content-Result" style={divStyle}>
                    <img src="img" alt="img" />
                    <h3>Movie Info:  </h3>
                    <h4>Title:  </h4><h5> </h5>
                    <h4>Year:  </h4><h5> </h5>
                    <h4>Rated:  </h4><h5> </h5>
                    <h4>Released:  </h4><h5> </h5>
                    <h4>Runtime:  </h4><h5> </h5>
                    <h4>Genre:  </h4><h5> </h5>
                    <h4>Director:  </h4><h5> </h5>
                    
                    <h4>Writer:  </h4><h5> </h5>
                    <h4>Actors:  </h4><h5> </h5>
                    <h4>Plot:  </h4><h5> </h5>
                    <h4>Language:  </h4><h5> </h5>
                    <h4>Country:  </h4><h5> </h5>
                    <h4>Awards: </h4><h5> </h5>
                    <h4>Type:  </h4><h5> </h5>
                    <h4>BoxOffice:  </h4><h5> </h5>
                    <h4>Production:  </h4><h5> </h5>
                </div>
            </div>
        );
    }
}
