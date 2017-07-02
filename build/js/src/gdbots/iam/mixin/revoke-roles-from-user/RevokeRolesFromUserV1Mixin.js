// @link http://acme-schemas.gdbots.io/json-schema/gdbots/iam/mixin/revoke-roles-from-user/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/types';

export default class RevokeRolesFromUserV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:revoke-roles-from-user:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('node_ref', T.IdentifierType.create())
        .required()
        .build(),
      /*
       * The roles to revoke from the user.
       */
      Fb.create('roles', T.IdentifierType.create())
        .asASet()
        .build(),
    ];
  }
}
