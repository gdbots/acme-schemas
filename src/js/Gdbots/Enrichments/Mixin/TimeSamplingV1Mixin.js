'use strict';

import Fb from 'gdbots/pbj/field-builder';
import IntType from 'gdbots/pbj/type/int-type';
import MediumIntType from 'gdbots/pbj/type/medium-int-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class TimeSamplingV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:time-sampling:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('ts_ymdh', IntType.create())
        .build(),
      Fb.create('ts_ymd', IntType.create())
        .build(),
      Fb.create('ts_ym', MediumIntType.create())
        .build()
    ];
  }
}
