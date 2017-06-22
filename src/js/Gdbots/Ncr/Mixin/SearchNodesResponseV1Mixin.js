'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Fb from 'gdbots/pbj/field-builder';
import FloatType from 'gdbots/pbj/type/float-type';
import IntType from 'gdbots/pbj/type/int-type';
import MediumIntType from 'gdbots/pbj/type/medium-int-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Node from '/node';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class SearchNodesResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:search-nodes-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      /*
       * The total number of nodes matching the search.
       */
      Fb.create('total', IntType.create())
        .build(),
      Fb.create('has_more', BooleanType.create())
        .build(),
      /*
       * How long in milliseconds it took to run the query.
       */
      Fb.create('time_taken', MediumIntType.create())
        .build(),
      /*
       * The maximum score of a matching node from the entire search.
       */
      Fb.create('max_score', FloatType.create())
        .build(),
      Fb.create('nodes', MessageType.create())
        .asAList()
        .instance(Node)
        .overridable(true)
        .build()
    ];
  }
}
