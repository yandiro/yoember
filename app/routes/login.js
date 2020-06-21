import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


import firebase from 'firebase/app';

export default class LoginRoute extends Route {

  beforeModel(transition) {
    this.get('session').prohibitAuthentication('index');
  }

  model() {
    return this.store.createRecord('login');
  }

  @service
  session

  @action
  didTransition() {
    this.controller.set('buttonLabel', 'Sign in');
  }

  @action
  willTransition() {
    this.controller.get('model').rollbackAttributes();
  }

  @action
  async signIn() {
    if (this.controller.get('buttonLabel') == 'Please wait. Validating...')
    return;
    
    const email = this.controller.get('model').email;
    const password = this.controller.get('model').password;
        
    this.controller.set('buttonLabel', 'Please wait. Validating...');
    
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.controller.set('buttonLabel', 'Sign in');
        this.controller.set('loginFailed', false);
      })

      .catch((err) => {
        this.controller.set('buttonLabel', 'Sign in');
        this.controller.set('loginFailed', true);
      });
  }

}
