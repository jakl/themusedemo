$(function(){
  $.Mustache.load('./job-template.htm')

  $("#search-form").on("submit", function(event){
    event.preventDefault();
    query = $(this).serialize()
    callJobsApi(query, function(data){
      console.log(data);
      $('#results').empty().mustache('job-template', data);
    });
  })

  function callJobsApi(query, cb){
    url = 'https://api-v2.themuse.com/jobs?' + query;
    $.getJSON(url, cb)
  }
})
