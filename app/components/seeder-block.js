import Component from '@ember/component';
import { action } from '@ember/object';
import { lte, not, or } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

const MAX_VALUE = 100;

export default class SeederBlockComponent extends Component {

  @tracked counter = null;
  @tracked readyMessage;

  @lte('counter', MAX_VALUE) isCounterValid;
  @not('isCounterValid') isCounterNotValid;

  placeholder = `Max ${MAX_VALUE}`;
  
  generateReady = false;
  deleteReady = false;

  generateInProgress = false;
  deleteInProgress = false;

  @or('isCounterNotValid', 'generateInProgress', 'deleteInProgress') generateIsDisabled;
  @or('generateInProgress', 'deleteInProgress') deleteIsDisabled;

  @action
  generate() {
    if (this.counter && this.isCounterValid) {
      this.seederFn(this.counter);
    }
  }

  @action
  delete() {
    this.destroyerFn();
  }
}
