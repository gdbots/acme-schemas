'use strict';

import Address from '/address';
import BooleanType from 'gdbots/pbj/type/boolean-type';
import GeoPointType from 'gdbots/pbj/type/geo-point-type';
import Schema from 'gdbots/pbj/schema';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class AddressV1 extends SystemUtils.mixinClass(Address)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:geo::address:1-0-1', this.name,
      [
        Fb.create('geo_hash', StringType.create())
          .maxLength(20)
          .pattern('^\\w+$')
          .build(),
        Fb.create('geo_point', GeoPointType.create())
          .build(),
        /*
         * Indicates if a verification has been run on this address.
         */
        Fb.create('verified', BooleanType.create())
          .build(),
        /*
         * Indicates if this is a valid adddress or not. Generally only true if the
         * verified field is also true.
         */
        Fb.create('is_verified', BooleanType.create())
          .build(),
        Fb.create('street1', StringType.create())
          .build(),
        Fb.create('street2', StringType.create())
          .maxLength(20)
          .build(),
        Fb.create('po_box', StringType.create())
          .maxLength(20)
          .build(),
        Fb.create('city', StringType.create())
          .maxLength(100)
          .build(),
        /*
         * A two letter alpha or numeric code indicating the region, e.g. "CA".
         * @link http://www.maxmind.com/download/geoip/misc/region_codes.csv
         */
        Fb.create('region', StringType.create())
          .pattern('^[A-Z0-9]{2}$')
          .build(),
        /*
         * The full name of the region, e.g. "California".
         */
        Fb.create('region_name', StringType.create())
          .maxLength(150)
          .build(),
        Fb.create('postal_code', StringType.create())
          .maxLength(30)
          .pattern('^[\\w\\s-]+$')
          .build(),
        Fb.create('country', StringType.create())
          .pattern('^[A-Z]{2}$')
          .build(),
        Fb.create('continent', StringType.create())
          .build()
      ]
    );
  }
}
