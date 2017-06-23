import Message from '@gdbots/pbj/Message';
import GetEventsRequestV1Mixin from '/get-events-request-v1-mixin';
import GetRoleHistoryRequestV1Mixin from '/get-role-history-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleHistoryRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetEventsRequestV1Mixin.create(), 
        GetRoleHistoryRequestV1Mixin.create()
      ]
    );
  }
}
