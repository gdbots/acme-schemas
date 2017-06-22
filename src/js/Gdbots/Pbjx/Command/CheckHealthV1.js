'use strict';

import CheckHealth from '/check-health';
import CommandV1Mixin from '/command-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class CheckHealthV1 extends SystemUtils.mixinClass(CheckHealth)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:command:check-health:1-0-0', this.name,
      [
        /*
         * A random string that will be validated to match after
         * the event "health-checked" is triggered. (ping-pong)
         */
        Fb.create('msg', StringType.create())
          .build()
      ],
      [
        CommandV1Mixin.create()
      ]
    );
  }
}
