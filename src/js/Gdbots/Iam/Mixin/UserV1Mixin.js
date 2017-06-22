'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class UserV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:user:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('first_name', StringType.create())
        .build(),
      Fb.create('last_name', StringType.create())
        .build(),
      Fb.create('email', StringType.create())
        .format(Format.EMAIL)
        .build(),
      Fb.create('email_domain', StringType.create())
        .format(Format.HOSTNAME)
        .build(),
      /*
       * A general format for international telephone numbers.
       * @link https://en.wikipedia.org/wiki/E.164
       */
      Fb.create('phone', StringType.create())
        .asAMap()
        .pattern('^\\+?[1-9]\\d{1,14}$')
        .build(),
      /*
       * Networks is a map that contains handles/usernames on a social network.
       * E.g. facebook:homer, twitter:stackoverflow, youtube:coltrane78.
       */
      Fb.create('networks', StringType.create())
        .asAMap()
        .maxLength(50)
        .pattern('^[\\w\\.-]+$')
        .build(),
      Fb.create('is_blocked', BooleanType.create())
        .build(),
      /*
       * Indicates that the user is a staff member and has access to the cms, dashboard, etc.
       */
      Fb.create('is_staff', BooleanType.create())
        .build(),
      /*
       * A user's roles determine what permissions they'll have when using the system.
       * The role itself is a node which has a set of "allow" and "deny" rules.
       */
      Fb.create('roles', IdentifierType.create())
        .asASet()
        .build()
    ];
  }
}
