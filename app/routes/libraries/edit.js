import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class LibrariesEditRoute extends Route {

  model(params) {
    return this.store.findRecord('library', params.library_id);
  }

  @action 
  saveLibrary(library) {
    library.save().then(() => this.transitionTo('libraries'));
  }

  @action
  willTransition(transition) {

    let model = this.controller.get('model');

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
