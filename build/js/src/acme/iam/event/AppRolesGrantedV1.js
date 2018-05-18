// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/app-roles-granted/1-0-0.json#
import GdbotsIamAppRolesGrantedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app-roles-granted/AppRolesGrantedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class AppRolesGrantedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:app-roles-granted:1-0-0', AppRolesGrantedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamAppRolesGrantedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AppRolesGrantedV1);
MessageResolver.register('acme:iam:event:app-roles-granted', AppRolesGrantedV1);
Object.freeze(AppRolesGrantedV1);
Object.freeze(AppRolesGrantedV1.prototype);
