'use strict';

import GetNodeBatchResponseV1Mixin from '/get-node-batch-response-v1-mixin';
import GetUserBatchResponse from '/get-user-batch-response';
import GetUserBatchResponseV1Mixin from '/get-user-batch-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserBatchResponseV1 extends SystemUtils.mixinClass(GetUserBatchResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-batch-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeBatchResponseV1Mixin.create(), 
        GetUserBatchResponseV1Mixin.create()
      ]
    );
  }
}
