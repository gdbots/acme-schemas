import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import SearchUsersSort from '';
import T from '@gdbots/pbj/Type';

export default class SearchUsersRequestV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:search-users-request:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('sort', T.StringEnumType.create())
        .withDefault(SearchUsersSort.RELEVANCE)
        .instance(SearchUsersSort)
        .build(),
      Fb.create('is_staff', T.TrinaryType.create())
        .build(),
      Fb.create('is_blocked', T.TrinaryType.create())
        .withDefault(2)
        .build()
    ];
  }
}
