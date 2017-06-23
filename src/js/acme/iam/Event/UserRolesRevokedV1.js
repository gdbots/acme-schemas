import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import UserRolesRevokedV1Mixin from '/user-roles-revoked-v1-mixin';

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
        EventV1Mixin.create(), 
        UserRolesRevokedV1Mixin.create()
      ]
    );
  }
}
