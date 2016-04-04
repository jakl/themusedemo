$(function(){
  $.Mustache.load('./job-template.htm')

  $("#search-form").on("submit", function(event){
    event.preventDefault();

    callJobsApi(getFormQuery(), function(data){
      console.log(data);
      $('#results').empty().mustache('job-template', data);
    });
  })

  function getFormQuery(){
    return $("#search-form :input")
      .filter(function(index, element) {
        // Filter out blank input fields, that act as wildcards (*)
        return $(element).val() != "";
      })
      .serialize();
  }

  function callJobsApi(query, cb){
    console.log(query);
    var url = 'https://api-v2.themuse.com/jobs?' + query;
    $.getJSON(url, cb)
  }
})
