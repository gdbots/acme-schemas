// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-roles-granted/1-0-0.json#
import GdbotsIamUserRolesGrantedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user-roles-granted/UserRolesGrantedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UserRolesGrantedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-granted:1-0-0', UserRolesGrantedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamUserRolesGrantedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(UserRolesGrantedV1);
MessageResolver.register('acme:iam:event:user-roles-granted', UserRolesGrantedV1);
Object.freeze(UserRolesGrantedV1);
Object.freeze(UserRolesGrantedV1.prototype);
