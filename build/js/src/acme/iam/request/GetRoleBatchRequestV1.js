import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleBatchRequestV1Mixin from '//GetRoleBatchRequestV1Mixin';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '//GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-request:1-0-0', this.name,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeBatchRequestV1Mixin.create(),
        GdbotsIamGetRoleBatchRequestV1Mixin.create(),
      ]
    );
  }
}
