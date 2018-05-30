// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-roles-revoked/1-0-0.json#
import GdbotsIamUserRolesRevokedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user-roles-revoked/UserRolesRevokedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
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
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(UserRolesRevokedV1);
MessageResolver.register('acme:iam:event:user-roles-revoked', UserRolesRevokedV1);
Object.freeze(UserRolesRevokedV1);
Object.freeze(UserRolesRevokedV1.prototype);