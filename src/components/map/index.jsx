import { connect } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { ACCESS_KEY, MAPBOX_STYLE_SOURCE } from '../../constants';

mapboxgl.accessToken = ACCESS_KEY;

const DrawMap = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) {
      map.current.remove();
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_STYLE_SOURCE,
      center: [props.location.longitude, props.location.latitude],
      zoom: 5,
    });

  }, [props.location]);

  return (
    <div className="App">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  location: state.locationArgs,
});

export default connect(mapStateToProps)(DrawMap);
