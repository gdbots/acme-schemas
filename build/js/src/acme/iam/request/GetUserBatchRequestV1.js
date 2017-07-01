// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-user-batch-request/1-0-0.json#
import GdbotsIamGetUserBatchRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-batch-request/GetUserBatchRequestV1Mixin';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-batch-request/GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-request:1-0-0', GetUserBatchRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeBatchRequestV1Mixin.create(),
        GdbotsIamGetUserBatchRequestV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:request:get-user-batch-request', GetUserBatchRequestV1);