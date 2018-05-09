import { Template } from 'meteor/templating';

import { Courses } from '../../../api/courses/courses.js';

import './Courses.html';

Template.Courses.onCreated(function () {

});

Template.Courses.helpers({
    courses() {
        return Courses.find({});
    }
});

Template.Courses.events({

});