import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Classes } from './classes.js';

Meteor.methods({
    'classes.insert'(teacherId, studentId, courseId, startDatetime, endDatetime) {
      check(teacherId, Number);
      check(studentId, Number);
      check(courseId, Number);
      check(startDatetime, Date);
      check(endDatetime, Date);
  
      return Classes.insert({
        teacherId,
        studentId,        
        courseId,
        startDatetime,
        endDatetime,
        dateAdded: new Date()
      });
    },
  });
  