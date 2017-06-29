// @link http://acme-schemas.gdbots.io/json-schema/gdbots/iam/mixin/delete-role/1-0-0.json#
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';

export default class DeleteRoleV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:delete-role:1-0-0');
  }
}
