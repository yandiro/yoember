import Controller from '@ember/controller';

import { action } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default class IndexController extends Controller {

  emailAddress = '';
  responseMessage = '';
  headerMessage = 'Coming Soon';

  @match('emailAddress', /^.+@.+\..+$/)
  isValid;

  @not('isValid')
  isDisabled;

  @action
  saveInvitation() {

    const email = this.emailAddress;

    const newInvitation = this.store.createRecord('invitation', { email });
    newInvitation.save()
    .then(() => {
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    })
  }

}
