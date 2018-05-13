import { Meteor } from 'meteor/meteor';

// import { Courses } from '../imports/api/courses/courses';
import { Courses } from "../../api/courses/courses";

Meteor.startup(() => {
// Seed Courses
   if (Courses.find().count() === 0) {
      let dateAdded = new Date();
      [
         { code: "MATH-101", title: "Mathematics 101", description: "Math 101 Description", dateAdded: dateAdded },
         { code: "ENG-101", title: "English 101", description: "English 101 Description", dateAdded: dateAdded },
         { code: "GEO-101", title: "Geometry 101", description: "Geometry 101 Description", dateAdded: dateAdded },
      ].forEach(function (course) {
         Courses.insert(course);
      });
   }
   // console.log(Courses.find({}));
});
