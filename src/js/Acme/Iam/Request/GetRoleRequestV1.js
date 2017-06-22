'use strict';

import GetNodeRequestV1Mixin from '/get-node-request-v1-mixin';
import GetRoleRequest from '/get-role-request';
import GetRoleRequestV1Mixin from '/get-role-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleRequestV1 extends SystemUtils.mixinClass(GetRoleRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetNodeRequestV1Mixin.create(), 
        GetRoleRequestV1Mixin.create()
      ]
    );
  }
}
