<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/request/search-forms-request/1-0-0.json#
namespace Acme\Schemas\Forms\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Forms\Mixin\SearchFormsRequest\SearchFormsRequestV1 as GdbotsFormsSearchFormsRequestV1;
use Gdbots\Schemas\Forms\Mixin\SearchFormsRequest\SearchFormsRequestV1Mixin as GdbotsFormsSearchFormsRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class SearchFormsRequestV1 extends AbstractMessage implements
    SearchFormsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    GdbotsFormsSearchFormsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:request:search-forms-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                GdbotsFormsSearchFormsRequestV1Mixin::create(),
            ]
        );
    }
}
