'use strict';

import GetEventsRequestV1Mixin from '/get-events-request-v1-mixin';
import GetRoleHistoryRequest from '/get-role-history-request';
import GetRoleHistoryRequestV1Mixin from '/get-role-history-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleHistoryRequestV1 extends SystemUtils.mixinClass(GetRoleHistoryRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-history-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetEventsRequestV1Mixin.create(), 
        GetRoleHistoryRequestV1Mixin.create()
      ]
    );
  }
}
