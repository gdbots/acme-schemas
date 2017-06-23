import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import NodeUpdatedV1Mixin from '/node-updated-v1-mixin';
import RoleUpdatedV1Mixin from '/role-updated-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-updated:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeUpdatedV1Mixin.create(), 
        RoleUpdatedV1Mixin.create()
      ]
    );
  }
}
