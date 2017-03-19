<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesRequest\ListAllRolesRequestV1 as GdbotsIamListAllRolesRequestV1;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesRequest\ListAllRolesRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesRequest\ListAllRolesRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class ListAllRolesRequestV1 extends AbstractMessage implements
    ListAllRolesRequest,
    RequestV1,
    GdbotsIamListAllRolesRequestV1
  
{
    use RequestV1Trait;
    use ListAllRolesRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:list-all-roles-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                ListAllRolesRequestV1Mixin::create()
            ]
        );
    }
}
