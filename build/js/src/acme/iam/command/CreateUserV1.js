// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/create-user/1-0-0.json#
import GdbotsIamCreateUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/create-user/CreateUserV1Mixin';
import GdbotsNcrCreateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/create-node/CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class CreateUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-user:1-0-0', CreateUserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrCreateNodeV1Mixin.create(),
        GdbotsIamCreateUserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(CreateUserV1);
MessageResolver.register('acme:iam:command:create-user', CreateUserV1);
Object.freeze(CreateUserV1);
Object.freeze(CreateUserV1.prototype);
