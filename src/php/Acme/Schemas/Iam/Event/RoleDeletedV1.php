<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\RoleDeleted\RoleDeletedV1 as GdbotsIamRoleDeletedV1;
use Gdbots\Schemas\Iam\Mixin\RoleDeleted\RoleDeletedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\RoleDeleted\RoleDeletedV1Trait;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class RoleDeletedV1 extends AbstractMessage implements
    RoleDeleted,
    EventV1,
    NodeDeletedV1,
    GdbotsIamRoleDeletedV1
  
{
    use EventV1Trait;
    use NodeDeletedV1Trait;
    use RoleDeletedV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                NodeDeletedV1Mixin::create(), 
                RoleDeletedV1Mixin::create()
            ]
        );
    }
}
