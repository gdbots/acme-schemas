'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserHistoryRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:get-user-history-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [];
  }
}
