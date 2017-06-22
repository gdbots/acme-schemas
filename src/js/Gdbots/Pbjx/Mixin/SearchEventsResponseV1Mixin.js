'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Event from '/event';
import Fb from 'gdbots/pbj/field-builder';
import FloatType from 'gdbots/pbj/type/float-type';
import IntType from 'gdbots/pbj/type/int-type';
import MediumIntType from 'gdbots/pbj/type/medium-int-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class SearchEventsResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:search-events-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      /*
       * The total number of events matching the search.
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
       * The maximum score of a matching event from the entire search.
       */
      Fb.create('max_score', FloatType.create())
        .build(),
      Fb.create('events', MessageType.create())
        .asAList()
        .instance(Event)
        .overridable(true)
        .build()
    ];
  }
}
