import Message from '@gdbots/pbj/Message';
import GdbotsNcrGetNodeBatchResponseV1Mixin from '//GetNodeBatchResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetNodeBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:request:get-node-batch-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeBatchResponseV1Mixin.create(),
      ]
    );
  }
}
