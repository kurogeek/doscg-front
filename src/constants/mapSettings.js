const LINE_SYMBOL_CONFIG = {
  icon: {},
  strokeOpacity: 1.0,
  strokeWeight: 2,
  scale: 1
};

const LINE_PATH_CONFIG = {
  clickable: false,
  geodesic: true,
  strokeOpacity: 1,
  strokeColor: "#f00",
  icons: [
    {
      icon: LINE_SYMBOL_CONFIG,
      repeat: "10px"
    }
  ]
};

const mapSettings = {
  streetViewControl: false,
  panControlOptions: false,
  gestureHandling: "cooperative",
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 16,
  minZoom: 2,
  maxZoom: 120,
  styles: []
};

export { mapSettings, LINE_PATH_CONFIG };
