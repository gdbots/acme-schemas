'use strict';

import GetNodeBatchRequestV1Mixin from '/get-node-batch-request-v1-mixin';
import GetRoleBatchRequest from '/get-role-batch-request';
import GetRoleBatchRequestV1Mixin from '/get-role-batch-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleBatchRequestV1 extends SystemUtils.mixinClass(GetRoleBatchRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-batch-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetNodeBatchRequestV1Mixin.create(), 
        GetRoleBatchRequestV1Mixin.create()
      ]
    );
  }
}
