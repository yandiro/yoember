import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class AdminContactsRoute extends Route {
  model() {
    return this.store.findAll('contact');
  }

  @action
  deleteContact(contactModel) {
    let confirmation = confirm('Are you sure?');

    if (confirmation) {
      contactModel.destroyRecord();
    }
  }
}
