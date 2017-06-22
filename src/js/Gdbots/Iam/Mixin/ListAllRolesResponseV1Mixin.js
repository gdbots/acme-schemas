'use strict';

import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class ListAllRolesResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:list-all-roles-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('roles', IdentifierType.create())
        .asASet()
        .build()
    ];
  }
}
