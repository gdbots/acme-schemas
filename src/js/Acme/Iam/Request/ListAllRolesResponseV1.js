'use strict';

import ListAllRolesResponse from '/list-all-roles-response';
import ListAllRolesResponseV1Mixin from '/list-all-roles-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class ListAllRolesResponseV1 extends SystemUtils.mixinClass(ListAllRolesResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        ListAllRolesResponseV1Mixin.create()
      ]
    );
  }
}
