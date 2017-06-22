'use strict';

import GetEventsResponseV1Mixin from '/get-events-response-v1-mixin';
import GetRoleHistoryResponse from '/get-role-history-response';
import GetRoleHistoryResponseV1Mixin from '/get-role-history-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleHistoryResponseV1 extends SystemUtils.mixinClass(GetRoleHistoryResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetEventsResponseV1Mixin.create(), 
        GetRoleHistoryResponseV1Mixin.create()
      ]
    );
  }
}
