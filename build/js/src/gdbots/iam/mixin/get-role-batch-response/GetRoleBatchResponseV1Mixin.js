// @link http://acme-schemas.gdbots.io/json-schema/gdbots/iam/mixin/get-role-batch-response/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class GetRoleBatchResponseV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:get-role-batch-response:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('nodes', T.MessageType.create())
        .asAMap()
        .anyOfCuries([
          'gdbots:iam:mixin:role',
        ])
        .build(),
    ];
  }
}