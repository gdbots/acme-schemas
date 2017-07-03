// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/update-role/1-0-0.json#
import GdbotsIamUpdateRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/update-role/UpdateRoleV1Mixin';
import GdbotsNcrUpdateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/update-node/UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
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
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UpdateRoleV1);
MessageResolver.register('acme:iam:command:update-role', UpdateRoleV1);
Object.freeze(UpdateRoleV1);
Object.freeze(UpdateRoleV1.prototype);
