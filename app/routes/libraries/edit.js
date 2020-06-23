import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class LibrariesEditRoute extends Route {

  model(params) {
    return this.store.findRecord('library', params.library_id);
  }

  renderTemplate() {
    this.render('libraries/form');
  }

  setupController() {
    this.controller.set('title', 'Edit library');
    this.controller.set('buttonLabel', 'Save changes');
    this.controller.set('saveLibrary', this.saveLibrary);

  }

  @action
  saveLibrary(library) {
    library.save().then(() => this.transitionTo('libraries'));
  }

  @action
  willTransition(transition) {

    let model = this.modelFor('libraries/edit');


    if (model.get('hasDirtyAttributes')) {
      let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

      if (confirmation) {
        model.rollbackAttributes();
      } else {
        transition.abort();
      }
    }
  }

}
