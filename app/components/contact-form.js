import Ember from 'ember';

export default Ember.Component.extend({
    responseMessage: '',
    emailAddress: '',
    isValidEmail: Ember.computed('emailAddress', function() {
      let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(this.get('emailAddress'));
    }),
    message: '',
    isMessageLong: Ember.computed('message', function() {
      return this.get('message').length > 5;
    }),
    isValid: Ember.computed('isValidEmail', 'isMessageLong', function() {
      return this.get('isValidEmail') && this.get('isMessageLong');
    }),
    isDisabled: Ember.computed('isValid', function() {
      return !this.get('isValid');
    }),
    actions: {
      sendMessage() {
          var email = this.get('emailAddress');
          var message = this.get('message');

          alert('Sending your message in progress... ');

          var responseMessage = 'To: ' + email + ', Message: ' + message;
          this.set('responseMessage', responseMessage);
          this.set('emailAddress', '');
          this.set('message', '');
      }
    }
});
