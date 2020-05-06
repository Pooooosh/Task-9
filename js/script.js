jQuery(document).ready(function($){
    $('#survey-form').on('submit', function(e){
        e.preventDefault();
        var message = $('#message').val();
        if(message == ""){
            alert("Please input text!")
        }
        else{
        $('#tasks').prepend("<p>" + message + "</p>")
        }
    });
})

