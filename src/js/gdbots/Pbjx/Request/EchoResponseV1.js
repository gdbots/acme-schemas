import Message from '@gdbots/pbj/Message';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class EchoResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx:request:echo-response:1-0-0', this.name,
      [
        Fb.create('msg', T.StringType.create())
          .build()
      ],
      [
        ResponseV1Mixin.create()
      ]
    );
  }
}
