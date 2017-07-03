// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-batch-request/1-0-0.json#
import GdbotsIamGetRoleBatchRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-batch-request/GetRoleBatchRequestV1Mixin';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-batch-request/GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
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
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetRoleBatchRequestV1);
MessageResolver.register('acme:iam:request:get-role-batch-request', GetRoleBatchRequestV1);
Object.freeze(GetRoleBatchRequestV1);
Object.freeze(GetRoleBatchRequestV1.prototype);
