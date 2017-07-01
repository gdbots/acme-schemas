// @link http://acme-schemas.gdbots.io/json-schema/gdbots/pbjx/request/request-failed-response/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class RequestFailedResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:request-failed-response:1-0-0', RequestFailedResponseV1,
      [
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
          .build(),
      ],
      [
        GdbotsPbjxResponseV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('gdbots:pbjx:request:request-failed-response', RequestFailedResponseV1);