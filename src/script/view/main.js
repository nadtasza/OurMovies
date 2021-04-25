import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
    
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("#movieList");
    
           
    
  const onButtonSearchClicked = async () => {
      if (searchElement.value.length==0){
        fallbackResult("please insert a title");
      }else{
              try{
                const result = await DataSource.searchMovie(searchElement.value);
                renderResult(result);
              } catch (message) {
                fallbackResult(message)
           
            }
      }
  };


    
  
  const renderResult = results => {
        movieListElement.innerHTML = "";
        results.forEach(movie => {
            const {title,poster_path,release_date,popularity,original_language,id,overview,vote_average}=movie;
            const movieElement = document.createElement("div");
            movieElement.setAttribute("class","movie col-md-4");
            movieElement.innerHTML=`
                  <div class="row">  
                    <div class="col-sm-12 mb-3">
                      <div class="card">
                        <img class="card-img-top poster" src="https://image.tmdb.org/t/p/original/${poster_path}" class="img-fluid"" alt="poster">                        
                        <div class="card-body movie-info">
                          <h4>${title}</h4>
                          <h6>${release_date}</h6>
                        </div>
                        
                        </div> 
                          <br>
                          <center><a href="#" class="btn btn-success" data-toggle="modal" data-target="#modaldetailmovie${id}" >Show Details</a></center> 
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="modal fade" id="modaldetailmovie${id}" tabindex="-1" role="dialog" aria-labelledby="modaldetailmovie" aria-hidden="true">
                      <div class="modal-dialog  modal-dialog-centered  modal-lg" role="document">
                        <div class="modal-content">

                            <div class="modal-header">
                              <h5 class="modal-title" id="modaldetailmovieLabel showDetail">MOVIE DETAILS</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>

                            <div class="modal-body">            
                              <div class="container-fluid">
                                <div class="row">

                                  <div class="col-md-3">
                                    <img src="https://image.tmdb.org/t/p/original/${poster_path}" class="img-fluid">
                                  </div>

                                  <div class="col-md">
                                    <ul class="list-group">
                                      <li class="list-group-item"><h4>${title}</h4></li>
                                      <li class="list-group-item"><strong>Release Date :</strong> ${release_date}</li>
                                      <li class="list-group-item"><strong>Popularity :</strong> ${popularity}</li>
                                      <li class="list-group-item"><strong>Language :</strong> ${original_language}</li>
                                      <li class="list-group-item"><strong>Vote Average :</strong> ${vote_average}</li>
                                      <li class="list-group-item"><strong>Plot :</strong><br> ${overview}</li>
                                    </ul>
                                  </div>

                                </div>
                              </div>
                            </div>

                            <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>   
                            </div>
                        </div>
                      </div>
                    </div>
             `;
            movieListElement.appendChild(movieElement);
           
           
          });   
  };

 const fallbackResult = message => {
    movieListElement.innerHTML = "";
    movieListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };
  searchElement.clickEvent = onButtonSearchClicked;


  
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
         $('#toTopBtn').fadeIn();
      } else {
                $('#toTopBtn').fadeOut();
        }
    });
  
    $('#toTopBtn').click(function() {
       $("html, body").animate({
          scrollTop: 0
        }, 1000);
        return false;
    });
  });

};

export default main;
    
