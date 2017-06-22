'use strict';

import GetNodeBatchResponse from '/get-node-batch-response';
import GetNodeBatchResponseV1Mixin from '/get-node-batch-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeBatchResponseV1 extends SystemUtils.mixinClass(GetNodeBatchResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:request:get-node-batch-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeBatchResponseV1Mixin.create()
      ]
    );
  }
}
