'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:get-user-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('email', StringType.create())
        .format(Format.EMAIL)
        .build()
    ];
  }
}
