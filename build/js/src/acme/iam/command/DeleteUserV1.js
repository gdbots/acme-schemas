import Message from '@gdbots/pbj/Message';
import GdbotsIamDeleteUserV1Mixin from '//DeleteUserV1Mixin';
import GdbotsNcrDeleteNodeV1Mixin from '//DeleteNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class DeleteUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:delete-user:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrDeleteNodeV1Mixin.create(),
        GdbotsIamDeleteUserV1Mixin.create(),
      ]
    );
  }
}
