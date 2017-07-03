<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-roles-granted/1-0-0.json#
namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\UserRolesGranted\UserRolesGrantedV1 as GdbotsIamUserRolesGrantedV1;
use Gdbots\Schemas\Iam\Mixin\UserRolesGranted\UserRolesGrantedV1Mixin as GdbotsIamUserRolesGrantedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class UserRolesGrantedV1 extends AbstractMessage implements
    UserRolesGranted,
    GdbotsPbjxEventV1,
    GdbotsIamUserRolesGrantedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-roles-granted:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsIamUserRolesGrantedV1Mixin::create(),
            ]
        );
    }
}
