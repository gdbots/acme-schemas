import Message from '@gdbots/pbj/Message';
import RequestV1Mixin from '/request-v1-mixin';
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
        RequestV1Mixin.create()
      ]
    );
  }
}
