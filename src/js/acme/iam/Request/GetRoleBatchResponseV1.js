import Message from '@gdbots/pbj/Message';
import GetNodeBatchResponseV1Mixin from '/get-node-batch-response-v1-mixin';
import GetRoleBatchResponseV1Mixin from '/get-role-batch-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleBatchResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeBatchResponseV1Mixin.create(), 
        GetRoleBatchResponseV1Mixin.create()
      ]
    );
  }
}
