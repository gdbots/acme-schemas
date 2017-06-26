import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-response/GetUserResponseV1Mixin';
import GdbotsNcrGetNodeResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-response/GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-response:1-0-0', GetUserResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        GdbotsIamGetUserResponseV1Mixin.create(),
      ]
    );
  }
}

