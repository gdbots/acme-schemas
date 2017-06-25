import Message from '@gdbots/pbj/Message';
import GdbotsPbjxEventV1 from '//EventV1';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import GdbotsPbjxIndexedV1Mixin from '//IndexedV1Mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class EventExecutionFailedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:event:event-execution-failed:1-0-1', this.name,
      [
        Fb.create('event', T.MessageType.create())
          .anyOfCuries([
            'gdbots:pbjx:mixin:event',
          ])
          .build(),
        Fb.create('error_code', T.SmallIntType.create())
          .withDefault(2)
          .build(),
        Fb.create('error_name', T.StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create('error_message', T.TextType.create())
          .build(),
        Fb.create('prev_error_message', T.TextType.create())
          .build(),
        Fb.create('stack_trace', T.TextType.create())
          .build()
      ],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsPbjxIndexedV1Mixin.create(),
      ]
    );
  }
}
