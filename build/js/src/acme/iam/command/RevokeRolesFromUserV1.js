import Message from '@gdbots/pbj/Message';
import GdbotsIamRevokeRolesFromUserV1Mixin from '//RevokeRolesFromUserV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RevokeRolesFromUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:revoke-roles-from-user:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamRevokeRolesFromUserV1Mixin.create(),
      ]
    );
  }
}
