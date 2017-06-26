import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class SearchEventsRequestV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:search-events-request:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('q', T.StringType.create())
        .build(),
      /*
       * The number of results to return.
       */
      Fb.create('count', T.TinyIntType.create())
        .withDefault(25)
        .build(),
      Fb.create('page', T.TinyIntType.create())
        .min(1)
        .withDefault(1)
        .build(),
      Fb.create('sort', T.StringEnumType.create())
        .withDefault(SearchEventsSort.RELEVANCE)
        .instance(SearchEventsSort)
        .build(),
      Fb.create('occurred_after', T.DateTimeType.create())
        .build(),
      Fb.create('occurred_before', T.DateTimeType.create())
        .build(),
      /*
       * The fields that are being queried as determined by parsing the "q" field.
       */
      Fb.create('fields_used', T.StringType.create())
        .asASet()
        .pattern('^[\\w\\.-]+$')
        .build(),
      Fb.create('parsed_query_json', T.TextType.create())
        .build(),
    ];
  }
}
