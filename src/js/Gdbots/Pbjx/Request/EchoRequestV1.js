'use strict';

import EchoRequest from '/echo-request';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class EchoRequestV1 extends SystemUtils.mixinClass(EchoRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:echo-request:1-0-0', this.name,
      [
        Fb.create('msg', StringType.create())
          .build()
      ],
      [
        RequestV1Mixin.create()
      ]
    );
  }
}
