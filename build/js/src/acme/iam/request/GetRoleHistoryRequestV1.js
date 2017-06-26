import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleHistoryRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-role-history-request/GetRoleHistoryRequestV1Mixin';
import GdbotsPbjxGetEventsRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/get-events-request/GetEventsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleHistoryRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-request:1-0-0', GetRoleHistoryRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsPbjxGetEventsRequestV1Mixin.create(),
        GdbotsIamGetRoleHistoryRequestV1Mixin.create(),
      ]
    );
  }
}

