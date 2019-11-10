import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    
    }

    
    handleClick() {
        const title = document.getElementById("title").value;
        const url = "http://www.omdbapi.com/?t=" + title + "&apikey=c9802ed9";

        let ajax = new XMLHttpRequest();

        
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                const response = JSON.parse(this.responseText);

                const divError = document.getElementById("error-msg");
                divError.style = "display: none";
                const divContent = document.getElementById("content-Result");
                divContent.style = "display: none";
                
                if(response.Response === "False"){
                    divError.getElementsByTagName("h3")[0].innerText = "Desculpe, não foi possível encontrar o filme pesquisado!";
                    divError.style = "display: inline";
                }else{
                    divContent.querySelector("img").src = response.Poster;
                    divContent.getElementsByTagName("h5")[0].innerText = response.Title;
                    divContent.getElementsByTagName("h5")[1].innerText = response.Year;
                    divContent.getElementsByTagName("h5")[2].innerText = response.Rated;
                    divContent.getElementsByTagName("h5")[3].innerText = response.Released;
                    divContent.getElementsByTagName("h5")[4].innerText = response.Runtime;
                    divContent.getElementsByTagName("h5")[5].innerText = response.Genre;
                    divContent.getElementsByTagName("h5")[6].innerText = response.Director;
                    divContent.getElementsByTagName("h5")[7].innerText = response.Writer;
                    divContent.getElementsByTagName("h5")[8].innerText = response.Actors;
                    divContent.getElementsByTagName("h5")[9].innerText = response.Plot;
                    divContent.getElementsByTagName("h5")[10].innerText = response.Language;
                    divContent.getElementsByTagName("h5")[11].innerText = response.Country;
                    divContent.getElementsByTagName("h5")[12].innerText = response.Awards;
                    divContent.getElementsByTagName("h5")[13].innerText = response.Type;
                    divContent.getElementsByTagName("h5")[14].innerText = response.BoxOffice;
                    divContent.getElementsByTagName("h5")[15].innerText = response.Production;
                    divContent.style = "display: inline";
                }
            } 
        };

        ajax.open("GET", url, true);
        ajax.send();
        
      
    }
    
    render() {
        return (
            <div>
                <div className="input-field second-wrap">
                    <button className="btn-search" name="submmit" type="button" onClick={this.handleClick}>SEARCH</button>
                </div>
            

            </div>
 
        );
    }
}