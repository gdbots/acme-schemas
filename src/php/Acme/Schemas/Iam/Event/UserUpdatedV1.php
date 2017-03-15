<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UserUpdated\UserUpdatedV1 as GdbotsIamUserUpdatedV1;
use Gdbots\Schemas\Iam\Mixin\UserUpdated\UserUpdatedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\UserUpdated\UserUpdatedV1Trait;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class UserUpdatedV1 extends AbstractMessage implements
    UserUpdated,
    EventV1,
    NodeUpdatedV1,
    GdbotsIamUserUpdatedV1
  
{
    use EventV1Trait;
    use NodeUpdatedV1Trait;
    use UserUpdatedV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-updated:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                NodeUpdatedV1Mixin::create(), 
                UserUpdatedV1Mixin::create()
            ]
        );
    }
}
