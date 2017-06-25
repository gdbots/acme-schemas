import Message from '@gdbots/pbj/Message';
import GdbotsIamRoleV1Mixin from '//RoleV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Schema from '@gdbots/pbj/Schema';

export default class RoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:role:1-0-0', this.name,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamRoleV1Mixin.create(),
      ]
    );
  }
}
