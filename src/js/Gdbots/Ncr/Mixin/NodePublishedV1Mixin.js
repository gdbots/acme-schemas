'use strict';

import DateTimeType from 'gdbots/pbj/type/date-time-type';
import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class NodePublishedV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:node-published:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('slug', StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('published_at', DateTimeType.create())
        .build()
    ];
  }
}
