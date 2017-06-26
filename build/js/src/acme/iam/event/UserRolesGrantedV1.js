import Message from '@gdbots/pbj/Message';
import GdbotsIamUserRolesGrantedV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user-roles-granted/UserRolesGrantedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
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
      ]
    );
  }
}

