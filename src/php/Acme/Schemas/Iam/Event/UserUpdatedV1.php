<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UserUpdated\UserUpdatedV1 as GdbotsIamUserUpdatedV1;
use Gdbots\Schemas\Iam\Mixin\UserUpdated\UserUpdatedV1Mixin as GdbotsIamUserUpdatedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1 as GdbotsNcrNodeUpdatedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Mixin as GdbotsNcrNodeUpdatedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class UserUpdatedV1 extends AbstractMessage implements
    UserUpdated,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeUpdatedV1,
    GdbotsIamUserUpdatedV1
  
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-updated:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(), 
                GdbotsNcrNodeUpdatedV1Mixin::create(), 
                GdbotsIamUserUpdatedV1Mixin::create()
            ]
        );
    }
}
