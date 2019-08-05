const { Model } = require('objection');

class Bookmark extends Model {
  static get tableName() {
    return 'bookmarks';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Bookmark;