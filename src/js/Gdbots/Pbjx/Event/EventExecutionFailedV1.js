'use strict';

import Event from '/event';
import EventExecutionFailed from '/event-execution-failed';
import EventV1Mixin from '/event-v1-mixin';
import IndexedV1Mixin from '/indexed-v1-mixin';
import MessageType from 'gdbots/pbj/type/message-type';
import Schema from 'gdbots/pbj/schema';
import SmallIntType from 'gdbots/pbj/type/small-int-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';

export default class EventExecutionFailedV1 extends SystemUtils.mixinClass(EventExecutionFailed)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:event:event-execution-failed:1-0-1', this.name,
      [
        Fb.create('event', MessageType.create())
          .instance(Event)
          .build(),
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
        EventV1Mixin.create(), 
        IndexedV1Mixin.create()
      ]
    );
  }
}
