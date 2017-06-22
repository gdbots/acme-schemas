'use strict';

import GetNodeBatchRequestV1Mixin from '/get-node-batch-request-v1-mixin';
import GetUserBatchRequest from '/get-user-batch-request';
import GetUserBatchRequestV1Mixin from '/get-user-batch-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserBatchRequestV1 extends SystemUtils.mixinClass(GetUserBatchRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetNodeBatchRequestV1Mixin.create(), 
        GetUserBatchRequestV1Mixin.create()
      ]
    );
  }
}
