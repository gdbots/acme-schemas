import Message from '@gdbots/pbj/Message';
import GdbotsIamDeleteRoleV1Mixin from '//DeleteRoleV1Mixin';
import GdbotsNcrDeleteNodeV1Mixin from '//DeleteNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class DeleteRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:delete-role:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrDeleteNodeV1Mixin.create(),
        GdbotsIamDeleteRoleV1Mixin.create(),
      ]
    );
  }
}
