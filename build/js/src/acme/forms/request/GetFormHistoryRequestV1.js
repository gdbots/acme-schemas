// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/request/get-form-history-request/1-0-0.json#
import GdbotsPbjxGetEventsRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-request/GetEventsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetFormHistoryRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:request:get-form-history-request:1-0-0', GetFormHistoryRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsPbjxGetEventsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetFormHistoryRequestV1);
MessageResolver.register('acme:forms:request:get-form-history-request', GetFormHistoryRequestV1);
Object.freeze(GetFormHistoryRequestV1);
Object.freeze(GetFormHistoryRequestV1.prototype);
