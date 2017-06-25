import Message from '@gdbots/pbj/Message';
import GdbotsIamGrantRolesToUserV1Mixin from '//GrantRolesToUserV1Mixin';
import GdbotsPbjxCommandV1Mixin from '//CommandV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GrantRolesToUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:grant-roles-to-user:1-0-0', this.name,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamGrantRolesToUserV1Mixin.create(),
      ]
    );
  }
}
