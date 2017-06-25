import Message from '@gdbots/pbj/Message';
import GdbotsIamSearchUsersRequestV1Mixin from '//SearchUsersRequestV1Mixin';
import GdbotsNcrSearchNodesRequestV1Mixin from '//SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '//RequestV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class SearchUsersRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:search-users-request:1-0-0', this.name,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        GdbotsIamSearchUsersRequestV1Mixin.create(),
      ]
    );
  }
}
