<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\RoleDeleted\RoleDeletedV1 as GdbotsIamRoleDeletedV1;
use Gdbots\Schemas\Iam\Mixin\RoleDeleted\RoleDeletedV1Mixin as GdbotsIamRoleDeletedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1 as GdbotsNcrNodeDeletedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1Mixin as GdbotsNcrNodeDeletedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class RoleDeletedV1 extends AbstractMessage implements
    RoleDeleted,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeDeletedV1,
    GdbotsIamRoleDeletedV1
  
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(), 
                GdbotsNcrNodeDeletedV1Mixin::create(), 
                GdbotsIamRoleDeletedV1Mixin::create()
            ]
        );
    }
}
