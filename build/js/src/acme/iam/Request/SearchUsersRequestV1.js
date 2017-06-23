import Message from '@gdbots/pbj/Message';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import SearchNodesRequestV1Mixin from '/search-nodes-request-v1-mixin';
import SearchUsersRequestV1Mixin from '/search-users-request-v1-mixin';

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
        RequestV1Mixin.create(), 
        SearchNodesRequestV1Mixin.create(), 
        SearchUsersRequestV1Mixin.create()
      ]
    );
  }
}
