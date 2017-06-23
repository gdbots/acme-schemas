import Message from '@gdbots/pbj/Message';
import GetNodeResponseV1Mixin from '/get-node-response-v1-mixin';
import GetRoleResponseV1Mixin from '/get-role-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeResponseV1Mixin.create(), 
        GetRoleResponseV1Mixin.create()
      ]
    );
  }
}
