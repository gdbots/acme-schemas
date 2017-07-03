// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-request/1-0-0.json#
import GdbotsIamGetRoleRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-request/GetRoleRequestV1Mixin';
import GdbotsNcrGetNodeRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-request/GetNodeRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-request:1-0-0', GetRoleRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeRequestV1Mixin.create(),
        GdbotsIamGetRoleRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetRoleRequestV1);
MessageResolver.register('acme:iam:request:get-role-request', GetRoleRequestV1);
Object.freeze(GetRoleRequestV1);
Object.freeze(GetRoleRequestV1.prototype);
