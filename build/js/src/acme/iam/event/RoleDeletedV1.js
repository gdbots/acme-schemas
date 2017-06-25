import Message from '@gdbots/pbj/Message';
import GdbotsIamRoleDeletedV1Mixin from '//RoleDeletedV1Mixin';
import GdbotsNcrNodeDeletedV1Mixin from '//NodeDeletedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', this.name,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeDeletedV1Mixin.create(),
        GdbotsIamRoleDeletedV1Mixin.create(),
      ]
    );
  }
}
