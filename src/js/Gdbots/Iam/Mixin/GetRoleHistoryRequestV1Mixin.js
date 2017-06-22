'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetRoleHistoryRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:get-role-history-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [];
  }
}
