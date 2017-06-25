import Message from '@gdbots/pbj/Message';
import GdbotsIamCreateUserV1Mixin from '//CreateUserV1Mixin';
import GdbotsNcrCreateNodeV1Mixin from '//CreateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class CreateUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-user:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrCreateNodeV1Mixin.create(),
        GdbotsIamCreateUserV1Mixin.create(),
      ]
    );
  }
}
