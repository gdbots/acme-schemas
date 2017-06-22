'use strict';

import EdgeMultiplicity from '';
import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import MicrotimeType from 'gdbots/pbj/type/microtime-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringEnumType from 'gdbots/pbj/type/string-enum-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class EdgeV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:edge:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('from_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('to_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('multiplicity', StringEnumType.create())
        .withDefault(EdgeMultiplicity.MULTI)
        .instance(EdgeMultiplicity)
        .overridable(true)
        .build(),
      Fb.create('created_at', MicrotimeType.create())
        .build()
    ];
  }
}
