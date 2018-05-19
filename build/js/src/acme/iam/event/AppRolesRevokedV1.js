// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/app-roles-revoked/1-0-0.json#
import GdbotsIamAppRolesRevokedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app-roles-revoked/AppRolesRevokedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class AppRolesRevokedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:app-roles-revoked:1-0-0', AppRolesRevokedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamAppRolesRevokedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AppRolesRevokedV1);
MessageResolver.register('acme:iam:event:app-roles-revoked', AppRolesRevokedV1);
Object.freeze(AppRolesRevokedV1);
Object.freeze(AppRolesRevokedV1.prototype);
