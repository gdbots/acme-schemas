'use strict';

import Address from '/address';
import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class IpToGeoV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:ip-to-geo:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('ctx_ip', StringType.create())
        .format(Format.IPV4)
        .overridable(true)
        .build(),
      Fb.create('ctx_ip_geo', MessageType.create())
        .instance(Address)
        .build()
    ];
  }
}
