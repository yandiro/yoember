import Controller from '@ember/controller';

import { action } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default class IndexController extends Controller {

  emailAddress = '';
  responseMessage = '';

  @match('emailAddress', /^.+@.+\..+$/)
  isValid;

  @not('isValid')
  isDisabled;

  @action
  saveInvitation() {
    alert(`Saving of the following email address is in progress: ${this.emailAddress}`)

    this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    this.set('emailAddress', '');
  }

}
