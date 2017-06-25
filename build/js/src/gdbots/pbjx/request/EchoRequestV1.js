import Message from '@gdbots/pbj/Message';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class EchoRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:echo-request:1-0-0', this.name,
      [
        Fb.create('msg', T.StringType.create())
          .build()
      ],
      [
        GdbotsPbjxRequestV1Mixin.create(),
      ]
    );
  }
}
