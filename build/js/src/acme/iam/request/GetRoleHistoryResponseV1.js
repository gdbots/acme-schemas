import Message from '@gdbots/pbj/Message';
import GdbotsIamGetRoleHistoryResponseV1Mixin from '//GetRoleHistoryResponseV1Mixin';
import GdbotsPbjxGetEventsResponseV1Mixin from '//GetEventsResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class GetRoleHistoryResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsPbjxGetEventsResponseV1Mixin.create(),
        GdbotsIamGetRoleHistoryResponseV1Mixin.create(),
      ]
    );
  }
}
