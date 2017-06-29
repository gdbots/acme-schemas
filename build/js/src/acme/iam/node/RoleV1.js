// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/role/1-0-0.json#
import GdbotsIamRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/role/RoleV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';

export default class RoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:role:1-0-0', RoleV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamRoleV1Mixin.create(),
      ]
    );
  }
}

GdbotsNcrNodeV1Trait(RoleV1);
