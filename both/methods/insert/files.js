Meteor.methods({
  storePostInDatabase: function( title, url ) {
    check( title, String );
    check( url, String );

    Modules.both.checkUrlValidity( url );

    try {
      Files.insert({
        title: title,
        url: url,
        userId: Meteor.userId(),
        added: new Date() 
      });
    } catch( exception ) {
      return exception;
    }
  }
});
