import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class ContactRoute extends Route {

  model() {
    return this.store.createRecord('contact');
  }

  @action
  willTransition() {
    this.controller.get('model').rollbackAttributes();
  }

  @action
  sendMessage() {

    let email = this.currentModel.email;
    let message = this.currentModel.message;

    let newContact = this.store.createRecord('contact', { email, message });

    newContact.save()
      .then(() => {
        this.set('sendStatus', `We got your message and we’ll get in touch soon.`);
        this.currentModel.set('email', '');
        this.currentModel.set('message', '');
      })
  }
}
