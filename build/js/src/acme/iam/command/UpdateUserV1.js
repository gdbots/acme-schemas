// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/update-user/1-0-0.json#
import GdbotsIamUpdateUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/update-user/UpdateUserV1Mixin';
import GdbotsNcrUpdateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/update-node/UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-user:1-0-0', UpdateUserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
        GdbotsIamUpdateUserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UpdateUserV1);
MessageResolver.register('acme:iam:command:update-user', UpdateUserV1);
Object.freeze(UpdateUserV1);
Object.freeze(UpdateUserV1.prototype);
