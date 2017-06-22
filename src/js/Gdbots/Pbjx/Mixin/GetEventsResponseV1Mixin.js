'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Event from '/event';
import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import MicrotimeType from 'gdbots/pbj/type/microtime-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetEventsResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:get-events-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('has_more', BooleanType.create())
        .build(),
      /*
       * The last "occurred_at" value from the last event in the "events" list. This can be
       * used as "since" when requesting the next set of events if "has_more" is true.
       */
      Fb.create('last_occurred_at', MicrotimeType.create())
        .useTypeDefault(false)
        .build(),
      Fb.create('events', MessageType.create())
        .asAList()
        .instance(Event)
        .overridable(true)
        .build()
    ];
  }
}
