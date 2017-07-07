// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-user-history-response/1-0-0.json#
import GdbotsIamGetUserHistoryResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-history-response/GetUserHistoryResponseV1Mixin';
import GdbotsPbjxGetEventsResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-response/GetEventsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserHistoryResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-history-response:1-0-0', GetUserHistoryResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsPbjxGetEventsResponseV1Mixin.create(),
        GdbotsIamGetUserHistoryResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetUserHistoryResponseV1);
MessageResolver.register('acme:iam:request:get-user-history-response', GetUserHistoryResponseV1);
Object.freeze(GetUserHistoryResponseV1);
Object.freeze(GetUserHistoryResponseV1.prototype);
