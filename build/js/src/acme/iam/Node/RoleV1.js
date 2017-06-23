import Message from '@gdbots/pbj/Message';
import NodeV1Mixin from '/node-v1-mixin';
import RoleV1Mixin from '/role-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:role:1-0-0', this.name,
      [],
      [
        NodeV1Mixin.create(), 
        RoleV1Mixin.create()
      ]
    );
  }
}
