/* eslint-disable unused-imports/no-unused-vars */

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "100vw",
    height: "400px",
    borderRadius: "15px",
    borderColor: "#7874F2",
    borderWidth: "2px",
};

const center = {
    lat: 41.00824,
    lng: 28.978359,
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAnHNX_kANW6oxjdcDoOs8VVwDAOsbA9ZY",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(Map);
