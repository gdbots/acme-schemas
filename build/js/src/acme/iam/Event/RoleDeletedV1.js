import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import NodeDeletedV1Mixin from '/node-deleted-v1-mixin';
import RoleDeletedV1Mixin from '/role-deleted-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeDeletedV1Mixin.create(), 
        RoleDeletedV1Mixin.create()
      ]
    );
  }
}
