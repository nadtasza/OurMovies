class DataSource {
   

  static searchMovie (keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c7eaaa6b55b97fce1f95df096e32451&query=${keyword}`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        if(responseJson.results.length>0) {
            return Promise.resolve(responseJson.results);
        
        } else {
            return Promise.reject(`"${keyword}" IS NOT FOUND`);
        }
        
    });
    }
}
   
export default DataSource;


