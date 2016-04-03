;(function(){
  $("#search-form").on("submit", function(event){
    event.preventDefault();
    console.log( $( this ).serialize() );
  })

  function callJobsAPI(query){
    url = 'https://api-v2.themuse.com/jobs?page=1'
    full_url = "https://api-v2.themuse.com/jobs?company=Outbrain&company=Ogilvy&category=Account+Management&category=Creative+%26+Design&level=Internship&level=Mid+Level&location=Auckland%2C+New+Zealand&location=Bakersfield%2C+CA&page=1&descending=true&flexible=true"
    serialize = company=a&location=a&category=a&level=a&descending=on&flexible=on
    $.getJSON(url, function(data){
      names = ""
      console.log(data);
      for(i = 0; i < data.results.length; i++){
        names += data.results[i].name + "\n"
      }
      $('#example').text(names);
    })
  }

})()
