// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/search-users-request/1-0-0.json#
import GdbotsIamSearchUsersRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/search-users-request/SearchUsersRequestV1Mixin';
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';

export default class SearchUsersRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:search-users-request:1-0-0', SearchUsersRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        GdbotsIamSearchUsersRequestV1Mixin.create(),
      ]
    );
  }
}
