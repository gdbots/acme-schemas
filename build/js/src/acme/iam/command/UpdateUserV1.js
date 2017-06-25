import Message from '@gdbots/pbj/Message';
import GdbotsIamUpdateUserV1Mixin from '//UpdateUserV1Mixin';
import GdbotsNcrUpdateNodeV1Mixin from '//UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-user:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
        GdbotsIamUpdateUserV1Mixin.create(),
      ]
    );
  }
}
