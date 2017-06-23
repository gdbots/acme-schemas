import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import RevokeRolesFromUserV1Mixin from '/revoke-roles-from-user-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RevokeRolesFromUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:revoke-roles-from-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        RevokeRolesFromUserV1Mixin.create()
      ]
    );
  }
}
