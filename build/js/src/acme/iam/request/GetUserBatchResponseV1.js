// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-user-batch-response/1-0-0.json#
import GdbotsIamGetUserBatchResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-batch-response/GetUserBatchResponseV1Mixin';
import GdbotsNcrGetNodeBatchResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-batch-response/GetNodeBatchResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-response:1-0-0', GetUserBatchResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeBatchResponseV1Mixin.create(),
        GdbotsIamGetUserBatchResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetUserBatchResponseV1);
MessageResolver.register('acme:iam:request:get-user-batch-response', GetUserBatchResponseV1);
Object.freeze(GetUserBatchResponseV1);
Object.freeze(GetUserBatchResponseV1.prototype);
