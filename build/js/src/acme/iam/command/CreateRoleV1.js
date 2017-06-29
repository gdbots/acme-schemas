// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/create-role/1-0-0.json#
import GdbotsIamCreateRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/create-role/CreateRoleV1Mixin';
import GdbotsNcrCreateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/create-node/CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';

export default class CreateRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-role:1-0-0', CreateRoleV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrCreateNodeV1Mixin.create(),
        GdbotsIamCreateRoleV1Mixin.create(),
      ]
    );
  }
}
