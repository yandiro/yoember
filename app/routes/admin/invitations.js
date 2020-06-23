import Route from '@ember/routing/route';
import { action } from '@ember/object';


export default class AdminInvitationsRoute extends Route {

  model() {
    return this.store.findAll('invitation');
  }

  @action
  deleteInvitation(invitationModel) {
    let confirmation = confirm('Are you sure?');

    if (confirmation) {
      invitationModel.destroyRecord();
    }
  }
  
}
