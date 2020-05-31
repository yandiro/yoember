import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class AboutRoute extends Route {

  model() {
    return this.store.createRecord('library');
  }

  renderTemplate() {
    this.render('libraries/form');
  }

  setupController() {
    this.controller.set('title', 'Create a new library');
    this.controller.set('buttonLabel', 'Create');
    this.controller.set('saveLibrary', this.saveLibrary);
  }

  @action
  saveLibrary(newLibrary) {
    newLibrary.save().then(() => this.transitionTo('libraries'));
  }

  @action
  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'

    this.modelFor('libraries/new').rollbackAttributes()
  }

}

