'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class TaggableV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:common:mixin:taggable:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      /*
       * Tags is a map that categorizes data or tracks references in
       * external systems. The tags names should be consistent and descriptive,
       * e.g. fb_user_id:123, salesforce_customer_id:456.
       */
      Fb.create('tags', StringType.create())
        .asAMap()
        .pattern('^[\\w\\/\\.:-]+$')
        .build()
    ];
  }
}
