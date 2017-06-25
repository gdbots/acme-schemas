import Message from '@gdbots/pbj/Message';
import GdbotsIamUserRolesGrantedV1Mixin from '//UserRolesGrantedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

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
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsIamUserRolesGrantedV1Mixin.create(),
      ]
    );
  }
}
