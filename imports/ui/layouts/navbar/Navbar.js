Template.Navbar.onCreated(function () {
   this.autorun(() => {
      // Meteor.subscribe('organizationsPerMember', Meteor.userId());
      Meteor.subscribe('organizations');
      Meteor.subscribe('reports');
      Meteor.subscribe('files');



   });
});

Template.Navbar.helpers({
   // organizations: () => Organizations.find().fetch(),

});

Template.Navbar.events({

});