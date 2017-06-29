// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-response/1-0-0.json#
import GdbotsIamGetRoleResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-response/GetRoleResponseV1Mixin';
import GdbotsNcrGetNodeResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-response/GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', GetRoleResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        GdbotsIamGetRoleResponseV1Mixin.create(),
      ]
    );
  }
}
