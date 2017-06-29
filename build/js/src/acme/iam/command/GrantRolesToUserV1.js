// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/grant-roles-to-user/1-0-0.json#
import GdbotsIamGrantRolesToUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/grant-roles-to-user/GrantRolesToUserV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';

export default class GrantRolesToUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:grant-roles-to-user:1-0-0', GrantRolesToUserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamGrantRolesToUserV1Mixin.create(),
      ]
    );
  }
}
