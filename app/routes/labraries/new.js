import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class AboutRoute extends Route {

  model() {
    return this.store.createRecord('library');
  }

  @action
  saveLibrary(newLibrary) {
    newLibrary.save().then(() => this.transitionTo('libraries'));
  }

  @action
  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  }

}

