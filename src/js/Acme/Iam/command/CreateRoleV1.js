'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import CreateNodeV1Mixin from '/create-node-v1-mixin';
import CreateRole from 'acme/iam/command/create-role';
import CreateRoleV1Mixin from '/create-role-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class CreateRoleV1 extends SystemUtils.mixinClass(CreateRole)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-role:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        CreateNodeV1Mixin.create(), 
        CreateRoleV1Mixin.create()
      ]
    );
  }
}
