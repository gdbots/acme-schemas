'use strict';

import NodeV1Mixin from '/node-v1-mixin';
import Role from '/role';
import RoleV1Mixin from '/role-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RoleV1 extends SystemUtils.mixinClass(Role)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:role:1-0-0', this.name,
      [],
      [
        NodeV1Mixin.create(), 
        RoleV1Mixin.create()
      ]
    );
  }
}
