'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Envelope from '/envelope';
import HttpCode from '';
import IntEnumType from 'gdbots/pbj/type/int-enum-type';
import MessageRefType from 'gdbots/pbj/type/message-ref-type';
import MessageType from 'gdbots/pbj/type/message-type';
import Schema from 'gdbots/pbj/schema';
import SmallIntType from 'gdbots/pbj/type/small-int-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';
import UuidType from 'gdbots/pbj/type/uuid-type';

export default class EnvelopeV1 extends SystemUtils.mixinClass(Envelope)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:pbjx::envelope:1-0-0', this.name,
      [
        Fb.create('envelope_id', UuidType.create())
          .required()
          .build(),
        Fb.create('ok', BooleanType.create())
          .withDefault(true)
          .build(),
        Fb.create('code', SmallIntType.create())
          .withDefault(0)
          .build(),
        Fb.create('http_code', IntEnumType.create())
          .withDefault(HttpCode.HTTP_OK)
          .instance(HttpCode)
          .build(),
        Fb.create('etag', StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('error_name', StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create('error_message', TextType.create())
          .build(),
        Fb.create('message_ref', MessageRefType.create())
          .build(),
        Fb.create('message', MessageType.create())
          .build()
      ]
    );
  }
}
