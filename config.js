// Map configuration
export const config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3LXZpbmNlbnQiLCJhIjoiY202OW4wNm5yMGlubzJtcTJmMnBxb2x1cSJ9.jrR3Ucv9Nvtc-T_7aKIQCg',
    CSV: '../data/locations.csv',
    title: 'Heatmaps - Number of Children from Households above Different Income Levels',
    description: 'Heatmaps of density of children ages 5-14 from households above different income levels in the United States.',
    sideBarInfo: ["Location_Name"],
    popupInfo: ["Location_Name"],
    token: 'pk.eyJ1IjoiYW5kcmV3d3ZpbmNlbnQiLCJhIjoiY2xkdzZ1ejB4MHRxbDN2bzZ0ZGNvMnY5YiJ9.zqIgFE8xhfvgRqR1GQgK_Q',
    container: 'map',
    defaultShapeSizes: {
        circle: 8,
        square: 8,
        star: 10,
        triangle: 10,
        diamond: 9,
        hexagon: 9,
        pentagon: 9,
        cross: 10
    },
    defaultStrokeWidths: {
        circle: 2,      // Base stroke width for simple shapes
        square: 2,      // Match circle stroke width
        star: 2.5,      // Slightly thicker for complex shapes
        triangle: 2.5,  // Match star stroke width
        diamond: 2,     // Match simple shape stroke width
        hexagon: 2,     // Match simple shape stroke width
        pentagon: 2,    // Match simple shape stroke width
        cross: 2.5      // Match complex shape stroke width
    },
    iconConfig: {
        canvasSize: 32,       // Size of the canvas for map icons
        displaySize: 18,      // Base size for calculations
        mapIconScale: 1,   // Scale factor for icons on the map
        padding: 4,           // Padding around shapes
        strokeScale: 0.5     // Scale factor for stroke widths (smaller = thinner strokes)
    },
    // Define status colors
    statusColors: {
        '#Open':'#00ACC1',
        '#Proposed':'#1E88E5',
        '#Under-Review':'#FFC107',
        '#Closing':'#FB8C00',
        '#Closed':'#C62828',
        '#Repurposed':'#43A047',
        '#Consolidated':'#8E24AA'

    },

    // List of major cities/metro areas for quick navigation
    cities: [
        {name: 'TX - Austin', coordinates: [-97.746, 30.293], zoom: 10},
        {name: 'TX - Dallas', coordinates: [-96.8173, 33.0086], zoom: 10},
        {name: 'TX - Fort Worth', coordinates: [-97.3225, 32.7657], zoom: 10},
        {name: 'TX - Houston', coordinates: [-95.3809, 29.7722], zoom: 9.5},
        {name: 'TX - Midland', coordinates: [-102.1239, 32.013], zoom: 11},
        {name: 'TX - San Antonio', coordinates: [-98.5167, 29.5692], zoom: 10},
        

    ],

    locationLayers: [
        {
            id: 'Public Schools',
            name: 'Public Schools',
            file: 'data/Public_Schools.geojson',
            defaultShape: 'hexagon',  // This location uses hexagons
            defaultChecked: true,
            defaultLabels: false
        },
        {
            id: 'Private Schools',
            name: 'Private Schools',
            file: 'data/Private_Schools.geojson',
            defaultShape: 'circle',  // This location uses hexagons
            defaultChecked: false,
            defaultLabels: false
        }
    ]
};
