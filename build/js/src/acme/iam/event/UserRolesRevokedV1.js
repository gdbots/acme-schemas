import Message from '@gdbots/pbj/Message';
import GdbotsIamUserRolesRevokedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user-roles-revoked/UserRolesRevokedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UserRolesRevokedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-revoked:1-0-0', UserRolesRevokedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamUserRolesRevokedV1Mixin.create(),
      ]
    );
  }
}

