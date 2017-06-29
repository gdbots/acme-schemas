// @link http://acme-schemas.gdbots.io/json-schema/gdbots/enrichments/mixin/time-sampling/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class TimeSamplingV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:time-sampling:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('ts_ymdh', T.IntType.create())
        .build(),
      Fb.create('ts_ymd', T.IntType.create())
        .build(),
      Fb.create('ts_ym', T.MediumIntType.create())
        .build(),
    ];
  }
}
