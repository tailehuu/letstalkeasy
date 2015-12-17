Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    yieldTemplates: {
        header: {to: 'header'},
        footer: {to: 'footer'},
    }
});

Router.map(function() {
    this.route('posts', {
        path: '/',
    });

    this.route('photos');
    this.route('videos');
    this.route('about-us');
    this.route('support');
    this.route('privacy');
    this.route('terms');
});