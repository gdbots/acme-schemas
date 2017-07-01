// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/delete-role/1-0-0.json#
import GdbotsIamDeleteRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/delete-role/DeleteRoleV1Mixin';
import GdbotsNcrDeleteNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/delete-node/DeleteNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class DeleteRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:delete-role:1-0-0', DeleteRoleV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrDeleteNodeV1Mixin.create(),
        GdbotsIamDeleteRoleV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:command:delete-role', DeleteRoleV1);