import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import GrantRolesToUserV1Mixin from '/grant-roles-to-user-v1-mixin';
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
        CommandV1Mixin.create(), 
        GrantRolesToUserV1Mixin.create()
      ]
    );
  }
}
