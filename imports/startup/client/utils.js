import { FlowRouter } from 'meteor/kadira:flow-router';


export const redirectIfNotLoggedIn = (path) => {
   (!Meteor.userId()) ? FlowRouter.go(path) : null;
};