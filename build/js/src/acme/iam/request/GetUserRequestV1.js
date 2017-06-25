import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserRequestV1Mixin from '//GetUserRequestV1Mixin';
import GdbotsNcrGetNodeRequestV1Mixin from '//GetNodeRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-request:1-0-0', this.name,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeRequestV1Mixin.create(),
        GdbotsIamGetUserRequestV1Mixin.create(),
      ]
    );
  }
}
