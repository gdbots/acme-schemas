'use strict';

import EchoResponse from '/echo-response';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class EchoResponseV1 extends SystemUtils.mixinClass(EchoResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:echo-response:1-0-0', this.name,
      [
        Fb.create('msg', StringType.create())
          .build()
      ],
      [
        ResponseV1Mixin.create()
      ]
    );
  }
}
