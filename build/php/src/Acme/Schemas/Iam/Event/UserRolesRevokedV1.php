<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-roles-revoked/1-0-0.json#
namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\UserRolesRevoked\UserRolesRevokedV1 as GdbotsIamUserRolesRevokedV1;
use Gdbots\Schemas\Iam\Mixin\UserRolesRevoked\UserRolesRevokedV1Mixin as GdbotsIamUserRolesRevokedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class UserRolesRevokedV1 extends AbstractMessage implements
    UserRolesRevoked,
    GdbotsPbjxEventV1,
    GdbotsIamUserRolesRevokedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-roles-revoked:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsIamUserRolesRevokedV1Mixin::create(),
            ]
        );
    }
}
