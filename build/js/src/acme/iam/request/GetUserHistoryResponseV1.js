import Message from '@gdbots/pbj/Message';
import GdbotsIamGetUserHistoryResponseV1Mixin from '//GetUserHistoryResponseV1Mixin';
import GdbotsPbjxGetEventsResponseV1Mixin from '//GetEventsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
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
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsPbjxGetEventsResponseV1Mixin.create(),
        GdbotsIamGetUserHistoryResponseV1Mixin.create(),
      ]
    );
  }
}
