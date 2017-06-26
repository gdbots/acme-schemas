import Message from '@gdbots/pbj/Message';
import GdbotsIamUpdateRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/update-role/UpdateRoleV1Mixin';
import GdbotsNcrUpdateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/update-node/UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-role:1-0-0', UpdateRoleV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
        GdbotsIamUpdateRoleV1Mixin.create(),
      ]
    );
  }
}

