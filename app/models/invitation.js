import Model, { attr } from '@ember-data/model';

import { match, not } from '@ember/object/computed';


export default class InvitationModel extends Model {
  @attr('string') email;

  @match('email', /^.+@.+\..+$/)
  isValid;

  @not('isValid')
  isDisabled;
}
