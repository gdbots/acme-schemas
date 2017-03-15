<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UserRolesGranted\UserRolesGrantedV1 as GdbotsIamUserRolesGrantedV1;
use Gdbots\Schemas\Iam\Mixin\UserRolesGranted\UserRolesGrantedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\UserRolesGranted\UserRolesGrantedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class UserRolesGrantedV1 extends AbstractMessage implements
    UserRolesGranted,
    EventV1,
    GdbotsIamUserRolesGrantedV1
  
{
    use EventV1Trait;
    use UserRolesGrantedV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-roles-granted:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                UserRolesGrantedV1Mixin::create()
            ]
        );
    }
}
