<?php

namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\CreateRole\CreateRoleV1 as GdbotsIamCreateRoleV1;
use Gdbots\Schemas\Iam\Mixin\CreateRole\CreateRoleV1Mixin;
use Gdbots\Schemas\Iam\Mixin\CreateRole\CreateRoleV1Trait;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait;

final class CreateRoleV1 extends AbstractMessage implements
    CreateRole,
    CommandV1,
    CreateNodeV1,
    GdbotsIamCreateRoleV1
  
{
    use CommandV1Trait;
    use CreateNodeV1Trait;
    use CreateRoleV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:create-role:1-0-0', __CLASS__,
            [],
            [
                CommandV1Mixin::create(), 
                CreateNodeV1Mixin::create(), 
                CreateRoleV1Mixin::create()
            ]
        );
    }
}
