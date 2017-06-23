import Message from '@gdbots/pbj/Message';
import GetNodeResponseV1Mixin from '/get-node-response-v1-mixin';
import GetUserResponseV1Mixin from '/get-user-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeResponseV1Mixin.create(), 
        GetUserResponseV1Mixin.create()
      ]
    );
  }
}
