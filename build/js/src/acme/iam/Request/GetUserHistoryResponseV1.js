import Message from '@gdbots/pbj/Message';
import GetEventsResponseV1Mixin from '/get-events-response-v1-mixin';
import GetUserHistoryResponseV1Mixin from '/get-user-history-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserHistoryResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-history-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetEventsResponseV1Mixin.create(), 
        GetUserHistoryResponseV1Mixin.create()
      ]
    );
  }
}
