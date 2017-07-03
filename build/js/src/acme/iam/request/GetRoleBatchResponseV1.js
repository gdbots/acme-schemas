// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-batch-response/1-0-0.json#
import GdbotsIamGetRoleBatchResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-batch-response/GetRoleBatchResponseV1Mixin';
import GdbotsNcrGetNodeBatchResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-batch-response/GetNodeBatchResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', GetRoleBatchResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeBatchResponseV1Mixin.create(),
        GdbotsIamGetRoleBatchResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetRoleBatchResponseV1);
MessageResolver.register('acme:iam:request:get-role-batch-response', GetRoleBatchResponseV1);
Object.freeze(GetRoleBatchResponseV1);
Object.freeze(GetRoleBatchResponseV1.prototype);
