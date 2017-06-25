import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';
import HttpCode from '
Notice: Array to string conversion in /Users/greg/www/schemas/acme-schemas/vendor/twig/twig/lib/Twig/Environment.php(462) : eval()'d code on line 104
Array';

export default class EnvelopeV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx::envelope:1-0-0', this.name,
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
          .instance(HttpCode)
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
          .build()
      ]
    );
  }
}
