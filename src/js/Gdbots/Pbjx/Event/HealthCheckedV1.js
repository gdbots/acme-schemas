'use strict';

import EventV1Mixin from '/event-v1-mixin';
import HealthChecked from '/health-checked';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class HealthCheckedV1 extends SystemUtils.mixinClass(HealthChecked)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:event:health-checked:1-0-0', this.name,
      [
        /*
         * A random string that is copied from the "check-health" command and
         * is later validated by whatever process initiated the health check.
         */
        Fb.create('msg', StringType.create())
          .build()
      ],
      [
        EventV1Mixin.create()
      ]
    );
  }
}
