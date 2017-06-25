import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleBatchResponseV1Mixin from '//GetRoleBatchResponseV1Mixin';
import GdbotsNcrGetNodeBatchResponseV1Mixin from '//GetNodeBatchResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeBatchResponseV1Mixin.create(),
        GdbotsIamGetRoleBatchResponseV1Mixin.create(),
      ]
    );
  }
}
