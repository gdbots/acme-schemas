import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserBatchRequestV1Mixin from '//GetUserBatchRequestV1Mixin';
import GdbotsNcrGetNodeBatchRequestV1Mixin from '//GetNodeBatchRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-request:1-0-0', this.name,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeBatchRequestV1Mixin.create(),
        GdbotsIamGetUserBatchRequestV1Mixin.create(),
      ]
    );
  }
}
