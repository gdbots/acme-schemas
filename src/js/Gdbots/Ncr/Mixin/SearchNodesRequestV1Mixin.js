'use strict';

import DateTimeType from 'gdbots/pbj/type/date-time-type';
import Fb from 'gdbots/pbj/field-builder';
import Mixin from 'gdbots/pbj/mixin';
import NodeStatus from '';
import SchemaId from 'gdbots/pbj/schema-id';
import StringEnumType from 'gdbots/pbj/type/string-enum-type';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';
import TinyIntType from 'gdbots/pbj/type/tiny-int-type';

export default class SearchNodesRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:search-nodes-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('q', StringType.create())
        .build(),
      /*
       * The number of results to return.
       */
      Fb.create('count', TinyIntType.create())
        .withDefault(25)
        .build(),
      Fb.create('page', TinyIntType.create())
        .min(1)
        .withDefault(1)
        .build(),
      Fb.create('status', StringEnumType.create())
        .instance(NodeStatus)
        .build(),
      Fb.create('created_after', DateTimeType.create())
        .build(),
      Fb.create('created_before', DateTimeType.create())
        .build(),
      Fb.create('updated_after', DateTimeType.create())
        .build(),
      Fb.create('updated_before', DateTimeType.create())
        .build(),
      /*
       * The fields that are being queried as determined by parsing the "q" field.
       */
      Fb.create('fields_used', StringType.create())
        .asASet()
        .pattern('^[\\w\\.-]+$')
        .build(),
      Fb.create('parsed_query_json', TextType.create())
        .build()
    ];
  }
}
