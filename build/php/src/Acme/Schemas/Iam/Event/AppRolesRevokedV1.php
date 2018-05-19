<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/app-roles-revoked/1-0-0.json#
namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\AppRolesRevoked\AppRolesRevokedV1 as GdbotsIamAppRolesRevokedV1;
use Gdbots\Schemas\Iam\Mixin\AppRolesRevoked\AppRolesRevokedV1Mixin as GdbotsIamAppRolesRevokedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class AppRolesRevokedV1 extends AbstractMessage implements
    AppRolesRevoked,
    GdbotsPbjxEventV1,
    GdbotsIamAppRolesRevokedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:app-roles-revoked:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsIamAppRolesRevokedV1Mixin::create(),
            ]
        );
    }
}
