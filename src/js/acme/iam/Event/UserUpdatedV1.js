import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import NodeUpdatedV1Mixin from '/node-updated-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import UserUpdatedV1Mixin from '/user-updated-v1-mixin';

export default class UserUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-updated:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeUpdatedV1Mixin.create(), 
        UserUpdatedV1Mixin.create()
      ]
    );
  }
}
