import Message from '@gdbots/pbj/Message';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
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
        GdbotsPbjxResponseV1Mixin.create(),
      ]
    );
  }
}
