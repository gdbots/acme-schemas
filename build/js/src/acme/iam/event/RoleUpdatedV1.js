// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/role-updated/1-0-0.json#
import GdbotsIamRoleUpdatedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/role-updated/RoleUpdatedV1Mixin';
import GdbotsNcrNodeUpdatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-updated/NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RoleUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-updated:1-0-0', RoleUpdatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
        GdbotsIamRoleUpdatedV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:event:role-updated', RoleUpdatedV1);
