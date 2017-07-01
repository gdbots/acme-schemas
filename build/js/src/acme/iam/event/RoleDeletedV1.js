// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/role-deleted/1-0-0.json#
import GdbotsIamRoleDeletedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/role-deleted/RoleDeletedV1Mixin';
import GdbotsNcrNodeDeletedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-deleted/NodeDeletedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RoleDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', RoleDeletedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeDeletedV1Mixin.create(),
        GdbotsIamRoleDeletedV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:event:role-deleted', RoleDeletedV1);
