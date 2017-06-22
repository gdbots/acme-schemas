'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import MicrotimeType from 'gdbots/pbj/type/microtime-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import TinyIntType from 'gdbots/pbj/type/tiny-int-type';

export default class GetEventsRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:get-events-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('stream_id', IdentifierType.create())
        .required()
        .build(),
      /*
       * Return events since this time (exclusive greater than if forward=true, less than if forward=false)
       */
      Fb.create('since', MicrotimeType.create())
        .useTypeDefault(false)
        .build(),
      /*
       * The number of events to return.
       */
      Fb.create('count', TinyIntType.create())
        .withDefault(25)
        .build(),
      /*
       * When true, the events are read from oldest to newest, otherwise newest to oldest.
       */
      Fb.create('forward', BooleanType.create())
        .build()
    ];
  }
}
