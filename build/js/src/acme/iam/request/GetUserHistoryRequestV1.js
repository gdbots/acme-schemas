// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-user-history-request/1-0-0.json#
import GdbotsIamGetUserHistoryRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-history-request/GetUserHistoryRequestV1Mixin';
import GdbotsPbjxGetEventsRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-request/GetEventsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserHistoryRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-history-request:1-0-0', GetUserHistoryRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsPbjxGetEventsRequestV1Mixin.create(),
        GdbotsIamGetUserHistoryRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetUserHistoryRequestV1);
MessageResolver.register('acme:iam:request:get-user-history-request', GetUserHistoryRequestV1);
Object.freeze(GetUserHistoryRequestV1);
Object.freeze(GetUserHistoryRequestV1.prototype);
