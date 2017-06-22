<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\UserDeleted\UserDeletedV1 as GdbotsIamUserDeletedV1;
use Gdbots\Schemas\Iam\Mixin\UserDeleted\UserDeletedV1Mixin as GdbotsIamUserDeletedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1 as GdbotsNcrNodeDeletedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1Mixin as GdbotsNcrNodeDeletedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class UserDeletedV1 extends AbstractMessage implements
    UserDeleted,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeDeletedV1,
    GdbotsIamUserDeletedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-deleted:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(), 
                GdbotsNcrNodeDeletedV1Mixin::create(), 
                GdbotsIamUserDeletedV1Mixin::create()
            ]
        );
    }
}
