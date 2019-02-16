module.exports = function(form, data, showOverlay) {

    var data = data.response.data;

    if (!TokenMismatch.check(data)) {

        // if(showOverlay) {

            swal({
                title: "Whoops! Error!",
                type: 'error',
                text: data.message,
                position: 'top-end',
                toast: true,
                timer: 4000,
            });
        
        // }

    }

    var errors = data.errors;

    form.find('.invalid-feedback').remove();

    $.each(errors, function(key, value){

    	form.find('input[name='+key+']').addClass('is-invalid').after('<div class="invalid-feedback">'+ value.join(' <br> ') +'</div>');
    	
        form.find('textarea[name='+key+']').addClass('is-invalid').after('<div class="invalid-feedback">'+ value.join(' <br> ') +'</div>');

    	// Because we are using select2 we have to account for the markup that select2 outputs. Hence the .next()
    	form.find('select[name='+key+']').addClass('is-invalid').next().after('<div class="invalid-feedback">'+ value.join(' <br> ') +'</div>');
    	
    	// Incase the select is an array
    	form.find('select[id='+key+']').addClass('is-invalid').next().after('<div class="invalid-feedback">'+ value.join(' <br> ') +'</div>');
	});

}