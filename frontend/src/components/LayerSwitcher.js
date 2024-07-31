import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const LayerSwitcher = ({ map }) => {
  const [selectedLayer, setSelectedLayer] = useState('3d-buildings');

  useEffect(() => {
    if (!map || !map.loaded()) return;

    const switchLayer = (layerId) => {
      const style = map.getStyle();
      const layers = style.layers;

      layers.forEach((layer) => {
        const id = layer.id;
        if (id === layerId) {
          map.setLayoutProperty(id, 'visibility', 'visible');
        } else {
          map.setLayoutProperty(id, 'visibility', 'none');
        }
      });
    };

    const addLayerSwitcher = () => {
      const layerSwitcher = document.createElement('div');
      layerSwitcher.className = 'mapboxgl-ctrl-group mapboxgl-ctrl';
      layerSwitcher.innerHTML = `
        <select id="layerSwitcher">
          <option value="3d-buildings">3D Buildings</option>
          <option value="sky">Sky</option>
          <option value="road-network">Road Network</option>
        </select>
      `;

      layerSwitcher.addEventListener('change', (e) => {
        const layerId = e.target.value;
        setSelectedLayer(layerId);
        switchLayer(layerId);
      });

      if (map.getContainer()) {
        map.getContainer().appendChild(layerSwitcher);
      }
    };

    addLayerSwitcher();
  }, [map]);

  useEffect(() => {
    if (map && selectedLayer) {
      switchLayer(selectedLayer);
    }
  }, [map, selectedLayer]);

  const switchLayer = (layerId) => {
    const style = map.getStyle();
    const layers = style.layers;

    layers.forEach((layer) => {
      const id = layer.id;
      if (id === layerId) {
        map.setLayoutProperty(id, 'visibility', 'visible');
      } else {
        map.setLayoutProperty(id, 'visibility', 'none');
      }
    });
  };

  return null;
};

export default LayerSwitcher;
