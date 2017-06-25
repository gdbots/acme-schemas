import Message from '@gdbots/pbj/Message';
import GdbotsIamUpdateRoleV1Mixin from '//UpdateRoleV1Mixin';
import GdbotsNcrUpdateNodeV1Mixin from '//UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-role:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
        GdbotsIamUpdateRoleV1Mixin.create(),
      ]
    );
  }
}
