'use strict';

import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Node from '/node';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class UpdateNodeV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:update-node:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('new_node', MessageType.create())
        .required()
        .instance(Node)
        .overridable(true)
        .build(),
      /*
       * The entire node, as it appeared before it was modified.
       */
      Fb.create('old_node', MessageType.create())
        .instance(Node)
        .overridable(true)
        .build()
    ];
  }
}
