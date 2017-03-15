<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UserRolesRevoked\UserRolesRevokedV1 as GdbotsIamUserRolesRevokedV1;
use Gdbots\Schemas\Iam\Mixin\UserRolesRevoked\UserRolesRevokedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\UserRolesRevoked\UserRolesRevokedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class UserRolesRevokedV1 extends AbstractMessage implements
    UserRolesRevoked,
    EventV1,
    GdbotsIamUserRolesRevokedV1
  
{
    use EventV1Trait;
    use UserRolesRevokedV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-roles-revoked:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                UserRolesRevokedV1Mixin::create()
            ]
        );
    }
}
