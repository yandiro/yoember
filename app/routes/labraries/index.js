import Route from '@ember/routing/route';

export default class AboutRoute extends Route {
  
  model() {
    return this.store.findAll('library');
  }

}

