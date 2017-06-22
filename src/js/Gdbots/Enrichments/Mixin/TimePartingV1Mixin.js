'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import DayOfWeek from '';
import Fb from 'gdbots/pbj/field-builder';
import IntEnumType from 'gdbots/pbj/type/int-enum-type';
import Mixin from 'gdbots/pbj/mixin';
import Month from '';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import TinyIntType from 'gdbots/pbj/type/tiny-int-type';

export default class TimePartingV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:time-parting:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('month_of_year', IntEnumType.create())
        .withDefault(Month.UNKNOWN)
        .instance(Month)
        .build(),
      Fb.create('day_of_month', TinyIntType.create())
        .max(31)
        .build(),
      Fb.create('day_of_week', IntEnumType.create())
        .withDefault(DayOfWeek.UNKNOWN)
        .instance(DayOfWeek)
        .build(),
      Fb.create('is_weekend', BooleanType.create())
        .build(),
      Fb.create('hour_of_day', TinyIntType.create())
        .max(23)
        .build()
    ];
  }
}
