import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserResponseV1Mixin from '//GetUserResponseV1Mixin';
import GdbotsNcrGetNodeResponseV1Mixin from '//GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
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
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        GdbotsIamGetUserResponseV1Mixin.create(),
      ]
    );
  }
}
