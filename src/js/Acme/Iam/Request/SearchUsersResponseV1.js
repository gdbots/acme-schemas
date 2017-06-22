'use strict';

import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SearchNodesResponseV1Mixin from '/search-nodes-response-v1-mixin';
import SearchUsersResponse from '/search-users-response';
import SearchUsersResponseV1Mixin from '/search-users-response-v1-mixin';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class SearchUsersResponseV1 extends SystemUtils.mixinClass(SearchUsersResponse)
{
  /**
   * @return Schema
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
