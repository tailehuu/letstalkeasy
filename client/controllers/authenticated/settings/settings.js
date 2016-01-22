Template.settings.helpers({  
	currentUser2 : function() {	    
	    var user  = Meteor.users.findOne({_id : Meteor.userId()});
	    return user;
	  }
});
Template.settings.onRendered( function() {
	  $( "#setting" ).validate({
	    rules: {
	    	password: {
	        required: true
	      },
	      old_password: {
		        required: true
		      },
	      confirm_password: {
	        required: true,
	        equalTo: "#password"
	      }
	    },
	    messages: {
	    	password: {
	        required: ""
	      },
	      old_password: {
		        required: ""
		      },
	      confirm_password: {
	        required: "",
	        equalTo: ""
	      }
	    },
	    submitHandler: function() {
//	    	password = $('[name="password"]').val();
//	    	old_password = $('[name="old_password"]').val();
//	    	if(password.length > 0)
//    		{
//    		Accounts.changePassword(old_password, password, function(err) {
//    	        if (err) {
//	    	          console.log('We are sorry but something went wrong.');
//	    	        }
//	    	      })
//    		}
	    	
    	 var post = {
    		      files: document.getElementById('avatarUpload').files,
    		      profile: {
	    	        	name: $('[name="profilename"]').val(),
	    	        	marked_as_favourites: $("#marked_as_favourites").is(":checked"),
	    	        	i_am_mentioned: $("#i_am_mentioned").is(":checked"),
	    	        	i_get_a_reply: $("#i_get_a_reply").is(":checked"),
	    	        	someone_follows_me: $("#someone_follows_me").is(":checked"),
	    	        	anyone_to_tag_me: $("#anyone_to_tag_me").is(":checked"),
	    	        	location_to_my_posts: $("#location_to_my_posts").is(":checked")
	    	        	}
    		    };
    	 Modules.client.uploadAvatarToAmazonS3( { post: post} );
	    	
	    	
	    	
	    	
	    }
	  });
});

Template.settings.events({
    'submit form': function( event ){	 
	    event.preventDefault();
    }
});
