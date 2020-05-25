import Controller from '@ember/controller';

import { action } from '@ember/object';
import { match, not, gte, and } from '@ember/object/computed';


export default class ContactController extends Controller {
  emailAddress = '';
  message = 'asd';
  sendStatus = '';

  @match('emailAddress', /^.+@.+\..+$/)
  isEmailValid;

  // @match('message', /^.{6,}$/)
  // isMessageValid;

  @gte('message.length', 5)
  isMessageValid;

  @and('isMessageValid', 'isEmailValid')
  isDisabled;

  @not('isDisabled')
  isButtonDisabled;

  @action
  sendMessage() {
    alert(`Thank you, ${this.emailAddress}! \n\n Your message: "${this.message}" was sent`)

    this.set('sendStatus', `We got your message and we’ll get in touch soon.`);
    this.set('emailAddress', '');
    this.set('message', '');

  }

}
