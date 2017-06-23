import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/Enum/Format';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class GetUserRequestV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:get-user-request:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('email', T.StringType.create())
        .format(Format.EMAIL)
        .build()
    ];
  }
}
