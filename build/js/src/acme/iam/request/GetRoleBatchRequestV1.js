import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleBatchRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-batch-request/GetRoleBatchRequestV1Mixin';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-batch-request/GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-request:1-0-0', GetRoleBatchRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeBatchRequestV1Mixin.create(),
        GdbotsIamGetRoleBatchRequestV1Mixin.create(),
      ]
    );
  }
}

