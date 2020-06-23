import Route from '@ember/routing/route';

import { action } from '@ember/object';


export default class AboutRoute extends Route {
  
  model() {
    return this.store.findAll('library');
  }

  @action
  deleteLibrary(library) {
    let confirmation = confirm('Are you sure?');

    if (confirmation) {
      library.destroyRecord();
    }
  }

}

