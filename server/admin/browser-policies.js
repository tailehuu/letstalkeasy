customBrowserPolicies = function(){
  BrowserPolicy.content.allowOriginForAll( '*.s3-ap-southeast-1.amazonaws.com' );
  BrowserPolicy.content.allowOriginForAll( 'blob:*' );
}
