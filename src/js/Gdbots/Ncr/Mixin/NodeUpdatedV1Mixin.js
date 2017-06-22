'use strict';

import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Node from '/node';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class NodeUpdatedV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:node-updated:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node_ref', IdentifierType.create())
        .required()
        .build(),
      Fb.create('slug', StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('new_etag', StringType.create())
        .maxLength(100)
        .pattern('^[\\w\\.:-]+$')
        .build(),
      Fb.create('old_etag', StringType.create())
        .maxLength(100)
        .pattern('^[\\w\\.:-]+$')
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
