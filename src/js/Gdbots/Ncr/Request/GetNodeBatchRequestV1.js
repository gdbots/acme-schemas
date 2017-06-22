'use strict';

import GetNodeBatchRequest from '/get-node-batch-request';
import GetNodeBatchRequestV1Mixin from '/get-node-batch-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeBatchRequestV1 extends SystemUtils.mixinClass(GetNodeBatchRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:request:get-node-batch-request:1-0-0', this.name,
      [
        /*
         * Context is a map of data that helps the NCR decide where to read/write data from.
         * A common use case is multi-tenant applications.
         */
        Fb.create('context', StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build()
      ],
      [
        RequestV1Mixin.create(), 
        GetNodeBatchRequestV1Mixin.create()
      ]
    );
  }
}
