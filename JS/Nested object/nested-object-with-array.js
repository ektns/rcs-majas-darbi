const iPhone15ProMax = {
  brand: "Apple",
  model: "iPhone 15 Pro Max",
  releaseDate: "September 22, 2023",
  specifications: {
    dimensions: {
      weight: "221 g",
      height: "15.99 cm",
      width: "7.67 cm",
      depth: "0.825 cm",
    },
    screen: {
      displayTechnology: "Super Retina XDR OLED",
      screenSize: "6.7",
      panelResolution: "2796x1290,",
      displayProtection: "Ceramic Shield",
      refreshRate: "120 Hz",
    },
    processor: {
      processorType: "Hexa-Core",
      chipset: "Apple A17 Pro",
      processor: "2x3.78 GHz + 4",
    },
    sensors: [
      "Light Sensor",
      "Gyroscope",
      "Accelerometer",
      "Barometer",
      "Proximity sensor",
      "Ultra Wideband",
    ],
    customerReviews: [
      {
        username: "user1",
        rating: 3,
        comment: "It's ok",
      },
      {
        username: "user2",
        rating: 3.5,
        comment: "Not bad",
      },
    ],
  },
};

const chipset = iPhone15ProMax.specifications.processor.chipset;
console.log(chipset);

const ultraWideband = iPhone15ProMax.specifications.sensors[5];
console.log(ultraWideband);
