import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { redirectIfNotLoggedIn } from './utils';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/auth/Auth';

// Set up all routes in the app
FlowRouter.route('/', {
   name: 'App.home',
   action() {
      BlazeLayout.render('App_body', { main: 'App_home' });
   },
});

FlowRouter.route('/student', {
   action() {
      FlowRouter.go('/student/dashboard');
   }
});

FlowRouter.route('/student/Dashboard', {
   action() {
      redirectIfNotLoggedIn('/test');

   }
});

FlowRouter.route('/auth', {
   action() {
      BlazeLayout.render('Auth');
   }
});


FlowRouter.route('/courses', {
   action() {
      //
   }
});


FlowRouter.notFound = {
   action() {
      BlazeLayout.render('App_body', { main: 'App_notFound' });
   },
};
