'use strict';

import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Node from '/node';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeBatchResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:get-node-batch-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('nodes', MessageType.create())
        .asAMap()
        .instance(Node)
        .overridable(true)
        .build(),
      /*
       * The "missing_node_refs" field contains a set of node_refs that
       * the batch request failed to retrieve.
       */
      Fb.create('missing_node_refs', IdentifierType.create())
        .asASet()
        .build()
    ];
  }
}
