var APP_DATA = {
  "scenes": [
    {
      "id": "0-vhod",
      "name": "Vhod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -3.0855207129368054,
        "pitch": 0.25596094874578057,
        "fov": 1.3633411682890908
      },
      "linkHotspots": [
        {
          "yaw": 2.997734048112447,
          "pitch": 0.8056006608208985,
          "rotation": 6.283185307179586,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hodnik",
      "name": "Hodnik",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -3.0633799640186936,
        "pitch": 0.130463114330027,
        "fov": 1.3633411682890908
      },
      "linkHotspots": [
        {
          "yaw": 1.4700714266219856,
          "pitch": 0.900859012057392,
          "rotation": 0,
          "target": "0-vhod"
        },
        {
          "yaw": 3.1355455979879094,
          "pitch": 0.8678057832806054,
          "rotation": 0,
          "target": "2-hodnik-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hodnik-2",
      "name": "Hodnik 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.023595846445651603,
          "pitch": 0.8709000542511909,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
