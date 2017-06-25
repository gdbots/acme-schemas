import Message from '@gdbots/pbj/Message';
import GdbotsIamCreateRoleV1Mixin from '//CreateRoleV1Mixin';
import GdbotsNcrCreateNodeV1Mixin from '//CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class CreateRoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-role:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrCreateNodeV1Mixin.create(),
        GdbotsIamCreateRoleV1Mixin.create(),
      ]
    );
  }
}
