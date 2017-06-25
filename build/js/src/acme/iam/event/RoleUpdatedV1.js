import Message from '@gdbots/pbj/Message';
import GdbotsIamRoleUpdatedV1Mixin from '//RoleUpdatedV1Mixin';
import GdbotsNcrNodeUpdatedV1Mixin from '//NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-updated:1-0-0', this.name,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
        GdbotsIamRoleUpdatedV1Mixin.create(),
      ]
    );
  }
}
