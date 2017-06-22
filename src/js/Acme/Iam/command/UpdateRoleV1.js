'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import UpdateNodeV1Mixin from '/update-node-v1-mixin';
import UpdateRole from '/update-role';
import UpdateRoleV1Mixin from '/update-role-v1-mixin';

export default class UpdateRoleV1 extends SystemUtils.mixinClass(UpdateRole)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-role:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        UpdateNodeV1Mixin.create(), 
        UpdateRoleV1Mixin.create()
      ]
    );
  }
}
