'use strict';

import RequestFailedResponse from '/request-failed-response';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SmallIntType from 'gdbots/pbj/type/small-int-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';

export default class RequestFailedResponseV1 extends SystemUtils.mixinClass(RequestFailedResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:request-failed-response:1-0-0', this.name,
      [
        Fb.create('error_code', SmallIntType.create())
          .withDefault(2)
          .build(),
        Fb.create('error_name', StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create('error_message', TextType.create())
          .build(),
        Fb.create('prev_error_message', TextType.create())
          .build(),
        Fb.create('stack_trace', TextType.create())
          .build()
      ],
      [
        ResponseV1Mixin.create()
      ]
    );
  }
}
