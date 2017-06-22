'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import NodeStatus from '';
import SchemaId from 'gdbots/pbj/schema-id';
import StringEnumType from 'gdbots/pbj/type/string-enum-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RenameNodeV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:rename-node:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('node_status', StringEnumType.create())
        .instance(NodeStatus)
        .build(),
      Fb.create('new_slug', StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('old_slug', StringType.create())
        .format(Format.SLUG)
        .build()
    ];
  }
}
