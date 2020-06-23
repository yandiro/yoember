import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class ContactRoute extends Route {

  model() {
    return this.store.createRecord('invitation');
  }

  @action
  didTransition() {
    this.controller.set('headerMessage', 'Coming Soon');
  }

  @action
  willTransition() {
    this.currentModel.rollbackAttributes();
    this.controller.set('responseMessage', '');
  }

  @action
  saveInvitation() {
    const email = this.currentModel.email;

    const newInvitation = this.store.createRecord('invitation', { email });
    newInvitation.save()
      .then(() => {
        this.controller.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.currentModel.set('email', '');
      })
  }


}
