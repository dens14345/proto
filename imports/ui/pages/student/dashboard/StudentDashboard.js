import { Template } from 'meteor/templating';

import { Classes } from '../../../../api/classes/classes.js';

import './StudentDashboard.html';

Template.Navbar.onCreated(function () {
    
});

Template.StudentDashboard.helpers({
    classes() {
        return Classes.find({});
    }
});

Template.StudentDashboard.events({

});