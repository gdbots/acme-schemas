'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class SluggableV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:sluggable:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      /*
       * The "slug" is a secondary identifier, typically used in a url:
       * - MUST be url friendly
       * - SHOULD NOT be case sensitive
       * - SHOULD be unique within the message curie namespace
       * - CAN be changed, but in practice once nodes are published you should avoid it if possible
       */
      Fb.create('slug', StringType.create())
        .format(Format.SLUG)
        .build()
    ];
  }
}
