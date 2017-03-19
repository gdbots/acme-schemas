<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\RoleUpdated\RoleUpdatedV1 as GdbotsIamRoleUpdatedV1;
use Gdbots\Schemas\Iam\Mixin\RoleUpdated\RoleUpdatedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\RoleUpdated\RoleUpdatedV1Trait;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class RoleUpdatedV1 extends AbstractMessage implements
    RoleUpdated,
    EventV1,
    NodeUpdatedV1,
    GdbotsIamRoleUpdatedV1
  
{
    use EventV1Trait;
    use NodeUpdatedV1Trait;
    use RoleUpdatedV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:role-updated:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                NodeUpdatedV1Mixin::create(), 
                RoleUpdatedV1Mixin::create()
            ]
        );
    }
}
