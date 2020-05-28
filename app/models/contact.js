import Model, { attr } from '@ember-data/model';

import { match, not, gte, and } from '@ember/object/computed';


export default class ContactModel extends Model {
  @attr('string') email;
  @attr('string') message;

  @match('email', /^.+@.+\..+$/)
  isEmailValid;

  @gte('message.length', 5)
  isMessageValid;

  @and('isMessageValid', 'isEmailValid')
  isValid;

  @not('isValid')
  isInvalid;
}
