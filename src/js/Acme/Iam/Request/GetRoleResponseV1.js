'use strict';

import GetNodeResponseV1Mixin from '/get-node-response-v1-mixin';
import GetRoleResponse from '/get-role-response';
import GetRoleResponseV1Mixin from '/get-role-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleResponseV1 extends SystemUtils.mixinClass(GetRoleResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeResponseV1Mixin.create(), 
        GetRoleResponseV1Mixin.create()
      ]
    );
  }
}
