import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchResults } from "../pages/search";

interface ViewportState {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}
interface MapProps {
  searchResults: SearchResults[];
}

const Map = (props: MapProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState<SearchResults | null>(null);

  const coordinates = props.searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center ? center.latitude : 37.7577,
    longitude: center ? center.longitude : -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/zoslos/claihqug7002t14nzsdycj16f'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport: ViewportState) =>
        setViewport(nextViewport)
      }
    >
      {props.searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation(null)}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className='z-50'
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
