class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
         .search-container {
            max-width: 1000px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 8px;
            border-radius: 8px;
            display: flex;
            position: absoluted;
            top: 10px;
            background-color: black;
        }
        
        .search-container > input {
            width: 80%;
            padding: 8px;
            border: 0;
            border-bottom: 1px solid purple;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid purple;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: purple;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 18%;
            cursor: pointer;
            margin-left: auto;
            padding: 15px;
            background-color: purple;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 1000px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 1px;
                
            }
        
            .search-container > button {
                width: 100%;
            }
        
        </style>
        <center><div id="search-container" class="search-container">
        <input placeholder="Search for Movie Titles" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button><center>
    </div>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
