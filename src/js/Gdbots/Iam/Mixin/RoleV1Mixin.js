'use strict';

import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RoleV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:role:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('_id', IdentifierType.create())
        .required()
        .build(),
      /*
       * The "allowed" field is a set of actions that a user will be granted.
       * Although the string can be anything it is best practice to use the
       * curies of the pbjx commands and requests from your application.
       * E.g. "acme:blog:command:publish-article" or "acme:blog:command:*"
       */
      Fb.create('allowed', StringType.create())
        .asASet()
        .pattern('^[a-z0-9_\\*\\.:-]+$')
        .build(),
      /*
       * The "denied" field works just like the "allowed" field with the
       * exception that these rules take precedence and deny a user's
       * ability to perform the action.
       */
      Fb.create('denied', StringType.create())
        .asASet()
        .pattern('^[a-z0-9_\\*\\.:-]+$')
        .build()
    ];
  }
}
