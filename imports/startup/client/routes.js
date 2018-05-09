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

FlowRouter.route('/student/dashboard', {
    name: 'Student.dashboard',
   action() {
    //   redirectIfNotLoggedIn('/test');
      BlazeLayout.render('App_body', { main: 'StudentDashboard' });
   }
});

FlowRouter.route('/student/courses', {
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
    name: 'Courses.show',
   action() {
        BlazeLayout.render('App_body', { main: 'Courses' });
   }
});

FlowRouter.route('/courses/:_code', {
    name: 'Course.details',
    action(params, queryParams) {
        BlazeLayout.render('App_body', { main: 'CourseDetails' });
    }
 });

FlowRouter.notFound = {
   action() {
      BlazeLayout.render('App_body', { main: 'App_notFound' });
   },
};
