<?php

namespace Acme\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1 as GdbotsIamRoleV1;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1Mixin;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait;

final class RoleV1 extends AbstractMessage implements
    Role,
    NodeV1,
    GdbotsIamRoleV1
  
{
    use NodeV1Trait;
    use RoleV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:node:role:1-0-0', __CLASS__,
            [],
            [
                NodeV1Mixin::create(), 
                RoleV1Mixin::create()
            ]
        );
    }
}
