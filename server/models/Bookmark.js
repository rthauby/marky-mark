const { Model } = require('objection');

class Bookmark extends Model {
  static get tableName() {
    return 'bookmarks';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    children: {
      relation: Model.HasManyRelation,
      modelClass: Bookmark,
      join: {
        from: 'bookmarks.id',
        to: 'bookmarks.parentId'
      }
    },

    parent: {
      relation: Model.BelongsToOneRelation,
      modelClass: Bookmark,
      join: {
        from: 'bookmarks.parentId',
        to: 'bookmarks.id'
      }
    }
  }
}

module.exports = Bookmark;