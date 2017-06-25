import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserBatchResponseV1Mixin from '//GetUserBatchResponseV1Mixin';
import GdbotsNcrGetNodeBatchResponseV1Mixin from '//GetNodeBatchResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeBatchResponseV1Mixin.create(),
        GdbotsIamGetUserBatchResponseV1Mixin.create(),
      ]
    );
  }
}
