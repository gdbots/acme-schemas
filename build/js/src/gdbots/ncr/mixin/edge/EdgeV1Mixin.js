import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class EdgeV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:edge:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('from_ref', T.IdentifierType.create())
        .required()
        .build(),
      Fb.create('to_ref', T.IdentifierType.create())
        .required()
        .build(),
      Fb.create('multiplicity', T.StringEnumType.create())
        .withDefault(EdgeMultiplicity.MULTI)
        .instance(EdgeMultiplicity)
        .overridable(true)
        .build(),
      Fb.create('created_at', T.MicrotimeType.create())
        .build()
    ];
  }
}
