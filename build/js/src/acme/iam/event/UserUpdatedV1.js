// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-updated/1-0-0.json#
import GdbotsIamUserUpdatedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user-updated/UserUpdatedV1Mixin';
import GdbotsNcrNodeUpdatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-updated/NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UserUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-updated:1-0-0', UserUpdatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
        GdbotsIamUserUpdatedV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:event:user-updated', UserUpdatedV1);
