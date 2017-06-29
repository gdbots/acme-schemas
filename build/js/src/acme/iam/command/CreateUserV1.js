// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/create-user/1-0-0.json#
import GdbotsIamCreateUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/create-user/CreateUserV1Mixin';
import GdbotsNcrCreateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/create-node/CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
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
      ]
    );
  }
}
