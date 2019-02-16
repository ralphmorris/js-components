module.exports = {

    check: function(data) {

        if(typeof data == "undefined") {

        	return false;

        }

        if (data.token_mismatch) {

            this.showMessage();

            return true;

        }

        return false;
        
    },

    showMessage: function() {

        swal({
            title: "Your session has expired.",
            type: 'error',
            text: "Please refresh your browser and try again.",
        });

    }

};