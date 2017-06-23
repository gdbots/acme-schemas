import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import UserRolesGrantedV1Mixin from '/user-roles-granted-v1-mixin';

export default class UserRolesGrantedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-granted:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        UserRolesGrantedV1Mixin.create()
      ]
    );
  }
}
