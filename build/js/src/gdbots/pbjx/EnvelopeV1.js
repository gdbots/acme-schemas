// @link http://acme-schemas.gdbots.io/json-schema/gdbots/pbjx/envelope/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import HttpCode from '@gdbots/schemas/gdbots/pbjx/enums/HttpCode';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class EnvelopeV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx::envelope:1-0-0', EnvelopeV1,
      [
        Fb.create('envelope_id', T.UuidType.create())
          .required()
          .build(),
        Fb.create('ok', T.BooleanType.create())
          .withDefault(true)
          .build(),
        Fb.create('code', T.SmallIntType.create())
          .withDefault(0)
          .build(),
        Fb.create('http_code', T.IntEnumType.create())
          .withDefault(HttpCode.HTTP_OK)
          .classProto(HttpCode)
          .build(),
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('error_name', T.StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create('error_message', T.TextType.create())
          .build(),
        Fb.create('message_ref', T.MessageRefType.create())
          .build(),
        Fb.create('message', T.MessageType.create())
          .build(),
      ],
    );
  }
}

MessageResolver.register('gdbots:pbjx::envelope', EnvelopeV1);
