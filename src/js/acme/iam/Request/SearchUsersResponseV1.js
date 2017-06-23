import Message from '@gdbots/pbj/Message';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import SearchNodesResponseV1Mixin from '/search-nodes-response-v1-mixin';
import SearchUsersResponseV1Mixin from '/search-users-response-v1-mixin';

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
        ResponseV1Mixin.create(), 
        SearchNodesResponseV1Mixin.create(), 
        SearchUsersResponseV1Mixin.create()
      ]
    );
  }
}
