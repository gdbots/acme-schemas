import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import DeleteNodeV1Mixin from '/delete-node-v1-mixin';
import DeleteRoleV1Mixin from '/delete-role-v1-mixin';
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
        CommandV1Mixin.create(), 
        DeleteNodeV1Mixin.create(), 
        DeleteRoleV1Mixin.create()
      ]
    );
  }
}
