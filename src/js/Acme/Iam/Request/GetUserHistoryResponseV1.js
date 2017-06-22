'use strict';

import GetEventsResponseV1Mixin from '/get-events-response-v1-mixin';
import GetUserHistoryResponse from '/get-user-history-response';
import GetUserHistoryResponseV1Mixin from '/get-user-history-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserHistoryResponseV1 extends SystemUtils.mixinClass(GetUserHistoryResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-history-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetEventsResponseV1Mixin.create(), 
        GetUserHistoryResponseV1Mixin.create()
      ]
    );
  }
}
