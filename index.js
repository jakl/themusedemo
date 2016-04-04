$(function(){
  $.Mustache.load('./job-template.htm')

  $("#search-form").on("submit", function(event){
    event.preventDefault();
    query = $(this).serialize()
    console.log(query);
    callJobsApi(query, function(data){
      console.log(data);
      $('#results').mustache('job-template', data);
    });
  })

  function callJobsApi(query, cb){
    url = 'https://api-v2.themuse.com/jobs?' + query;
    $.getJSON(url, cb)

    // Example data
    full_url = "https://api-v2.themuse.com/jobs?company=Outbrain&company=Ogilvy&category=Account+Management&category=Creative+%26+Design&level=Internship&level=Mid+Level&location=Auckland%2C+New+Zealand&location=Bakersfield%2C+CA&page=1&descending=true&flexible=true";
    serialize = "company=a&location=a&category=a&level=a&descending=on&flexible=on";
  }
})
