// js/data.js
const AZoomStore = {
  cars: [
    { id: "C01", name: "Economy Hatchback", rate: 45, status: "Available", image: "images/car1.jpg" },
    { id: "C02", name: "Comfort Sedan", rate: 65, status: "Reserved", image: "images/car2.jpg" },
    { id: "C03", name: "Family SUV", rate: 85, status: "Rented", image: "images/car3.jpg" },
    { id: "C04", name: "Luxury Sedan", rate: 120, status: "Pending Inspection", image: "images/car4.jpg" }
  ],
  locations: [
    "Main HQ Carpark (Orchard)",
    "Downtown Hub Carpark (Marina)"
  ],
  // Pre-stored dummy reservation for testing billing & pickup
  reservations: [
    {
      bookingId: "AZ-9821",
      customerName: "Sarah Tan",
      carId: "C02",
      pickupDate: "2026-10-10",
      returnDate: "2026-10-13",
      returnLocation: "Main HQ Carpark (Orchard)",
      baseCost: 195,
      damageFee: 50,
      damageNotes: "Minor scratch on front bumper",
      status: "Pending Inspection"
    }
  ]
};