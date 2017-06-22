'use strict';

import GetNodeBatchResponseV1Mixin from '/get-node-batch-response-v1-mixin';
import GetRoleBatchResponse from '/get-role-batch-response';
import GetRoleBatchResponseV1Mixin from '/get-role-batch-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleBatchResponseV1 extends SystemUtils.mixinClass(GetRoleBatchResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeBatchResponseV1Mixin.create(), 
        GetRoleBatchResponseV1Mixin.create()
      ]
    );
  }
}
