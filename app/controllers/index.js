import Ember from 'ember';

export default Ember.Controller.extend({
    responseMessage: '',
    emailAddress: '',
    isValid: Ember.computed('emailAddress', function() {
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(this.get('emailAddress'));
    }),
    isDisabled: Ember.computed('isValid', function() {
        return !this.get('isValid');
    }),
    actualEmailAddress: Ember.computed('emailAddress', function() {
        console.log(`actual email address ${this.get('emailAddress')}`);
    }),
    emailAddressChanged: Ember.observer('emailAddress', function() {
        console.log(`email address is changed ${this.get('emailAddress')}`);
    }),
    actions: {
      saveInvitation() {
        let inviteEmail = this.get('emailAddress');
        this.set('emailAddress', '');
        alert(`Invitation email "${inviteEmail}" is saved`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${inviteEmail}`);
      }
    }
});
