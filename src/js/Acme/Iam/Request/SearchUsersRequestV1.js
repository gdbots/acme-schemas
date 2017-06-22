'use strict';

import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SearchNodesRequestV1Mixin from '/search-nodes-request-v1-mixin';
import SearchUsersRequest from '/search-users-request';
import SearchUsersRequestV1Mixin from '/search-users-request-v1-mixin';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class SearchUsersRequestV1 extends SystemUtils.mixinClass(SearchUsersRequest)
{
  /**
   * @return Schema
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
