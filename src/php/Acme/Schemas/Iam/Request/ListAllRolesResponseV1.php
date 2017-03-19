<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesResponse\ListAllRolesResponseV1 as GdbotsIamListAllRolesResponseV1;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesResponse\ListAllRolesResponseV1Mixin;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesResponse\ListAllRolesResponseV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait;

final class ListAllRolesResponseV1 extends AbstractMessage implements
    ListAllRolesResponse,
    ResponseV1,
    GdbotsIamListAllRolesResponseV1
  
{
    use ResponseV1Trait;
    use ListAllRolesResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:list-all-roles-response:1-0-0', __CLASS__,
            [],
            [
                ResponseV1Mixin::create(), 
                ListAllRolesResponseV1Mixin::create()
            ]
        );
    }
}
