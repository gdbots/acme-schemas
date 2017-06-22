'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SearchUsersSort from '';
import StringEnumType from 'gdbots/pbj/type/string-enum-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TrinaryType from 'gdbots/pbj/type/trinary-type';

export default class SearchUsersRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:search-users-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('sort', StringEnumType.create())
        .withDefault(SearchUsersSort.RELEVANCE)
        .instance(SearchUsersSort)
        .build(),
      Fb.create('is_staff', TrinaryType.create())
        .build(),
      Fb.create('is_blocked', TrinaryType.create())
        .withDefault(2)
        .build()
    ];
  }
}
