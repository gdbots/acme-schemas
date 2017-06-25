import Message from '@gdbots/pbj/Message';
import GdbotsIamUserRolesRevokedV1Mixin from '//UserRolesRevokedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UserRolesRevokedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-revoked:1-0-0', this.name,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamUserRolesRevokedV1Mixin.create(),
      ]
    );
  }
}
