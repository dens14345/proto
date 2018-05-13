import faker from 'faker';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Courses } from '../../../api/courses/courses.js';

import './Courses.html';

Template.Courses.onCreated(function () {
   Meteor.subscribe('courses.all');
});

Template.Courses.helpers({
   courses() {
      return Courses.find({}).fetch();
   },

});

Template.Courses.events({
   'click #btnAddCourse'() {
      let code = faker.random.word();
      let title = faker.random.word();
      let description = faker.lorem.sentence();

      Meteor.call('courses.insert', code, title, description, (err, succ) => {
         (succ) ?
            Bert.alert('Random course inserted', 'success', 'growl-top-right') :
            Bert.alert('Failed to insert course', 'danger', 'growl-top-right')
      });

   }
});