import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Courses = new Mongo.Collection('courses');

if (Meteor.isServer) {
   Meteor.methods({
      'courses.insert'(code, title, description = '') {
         return Courses.insert({
            code,
            title,
            description,
            dateAdded: new Date(),
            active: true
         });
      },
   });

//   publications
   Meteor.publish('courses.all', () => Courses.find());
}