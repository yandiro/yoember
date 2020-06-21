import Model, { attr } from '@ember-data/model';

import { match, notEmpty, and } from '@ember/object/computed';


export default class LoginModel extends Model {
  @attr('string') email;
  @attr('string') password;

  @match('email', /^.+@.+\..+$/)
  isEmailValid;

  @notEmpty('password') isPasswordValid;

  @and('isPasswordValid', 'isEmailValid')
  isValid;
}
