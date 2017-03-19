<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\UpdateRole\UpdateRoleV1 as GdbotsIamUpdateRoleV1;
use Gdbots\Schemas\Iam\Mixin\UpdateRole\UpdateRoleV1Mixin;
use Gdbots\Schemas\Iam\Mixin\UpdateRole\UpdateRoleV1Trait;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class UpdateRoleV1 extends AbstractMessage implements
    UpdateRole,
    CommandV1,
    UpdateNodeV1,
    GdbotsIamUpdateRoleV1
  
{
    use CommandV1Trait;
    use UpdateNodeV1Trait;
    use UpdateRoleV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:update-role:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                UpdateNodeV1Mixin::create(), 
                UpdateRoleV1Mixin::create()
            ]
        );
    }
}
