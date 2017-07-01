// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-user-request/1-0-0.json#
import GdbotsIamGetUserRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-request/GetUserRequestV1Mixin';
import GdbotsNcrGetNodeRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-request/GetNodeRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-request:1-0-0', GetUserRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrGetNodeRequestV1Mixin.create(),
        GdbotsIamGetUserRequestV1Mixin.create(),
      ],
    );
  }
}

MessageResolver.register('acme:iam:request:get-user-request', GetUserRequestV1);
