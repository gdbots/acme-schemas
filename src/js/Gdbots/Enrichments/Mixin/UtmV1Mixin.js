'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class UtmV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:utm:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('utm_source', StringType.create())
        .maxLength(50)
        .pattern('^[\\w\\/\\.:-]+$')
        .build(),
      Fb.create('utm_medium', StringType.create())
        .maxLength(50)
        .pattern('^[\\w\\/\\.:-]+$')
        .build(),
      Fb.create('utm_term', StringType.create())
        .maxLength(100)
        .pattern('^[\\w\\s\\/\\.,:-]+$')
        .build(),
      Fb.create('utm_content', StringType.create())
        .maxLength(50)
        .pattern('^[\\w\\/\\.:-]+$')
        .build(),
      Fb.create('utm_campaign', StringType.create())
        .maxLength(50)
        .pattern('^[\\w\\/\\.:-]+$')
        .build()
    ];
  }
}
