import Message from '@gdbots/pbj/Message';
import GdbotsIamSearchUsersResponseV1Mixin from '//SearchUsersResponseV1Mixin';
import GdbotsNcrSearchNodesResponseV1Mixin from '//SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '//ResponseV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class SearchUsersResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:search-users-response:1-0-0', this.name,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        GdbotsIamSearchUsersResponseV1Mixin.create(),
      ]
    );
  }
}
