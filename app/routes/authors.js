import Route from '@ember/routing/route';

import { action } from '@ember/object';

export default class AuthorsRoute extends Route {
  model() {
    return this.store.findAll('author');
  }

  @action
  editAuthor(author) {
    author.set('isEditing', true);
  }

  @action
  cancelAuthorEdit(author) {
    author.set('isEditing', false);
    author.rollbackAttributes();
  }

  @action
  saveAuthor(author) {
    if (author.get('isNotValid')) {
      return;
    }

    author.set('isEditing', false);
    author.save();
  }

}
