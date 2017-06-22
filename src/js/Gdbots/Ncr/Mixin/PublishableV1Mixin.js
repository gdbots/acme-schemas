'use strict';

import DateTimeType from 'gdbots/pbj/type/date-time-type';
import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class PublishableV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:publishable:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('published_at', DateTimeType.create())
        .build()
    ];
  }
}
