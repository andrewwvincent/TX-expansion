// Map configuration
export const config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYW5kcmV3LXZpbmNlbnQiLCJhIjoiY202OW4wNm5yMGlubzJtcTJmMnBxb2x1cSJ9.jrR3Ucv9Nvtc-T_7aKIQCg',
    CSV: '../data/locations.csv',
    center: [-97.7431, 30.2672], // Austin coordinates
    zoom: 11,
    title: 'Heatmaps - Number of Children from Households above Different Income Levels',
    description: 'Heatmaps of density of children ages 5-14 from households above different income levels in the United States.',
    sideBarInfo: ["Location_Name"],
    popupInfo: ["Location_Name"],
    locationLayers: [
        {
            id: 'available',
            name: 'No Current Reuse',
            file: 'data/No_Current_Reuse.kml',
            color: '#26ff00',  // Green
            shape: 'circle',
            size: 16,
            defaultChecked: false,
            defaultLabels: false
        },
        {
            id: 'under_review',
            name: 'Under Consideration',
            file: 'data/Under_Consideration.kml',
            color: '#ff8c00',  // Orange
            shape: 'circle',
            size: 16,
            defaultChecked: false,
            defaultLabels: false
        },
        {
            id: 'unavailable',
            name: 'Unavailable',
            file: 'data/Unavailable.kml',
            color: '#ff0400',  // Red
            shape: 'circle',
            size: 16,
            defaultChecked: false,
            defaultLabels: false
        },
        {
            id: 'private',
            name: 'Private Schools',
            file: 'data/Private_Schools.kml',
            color: '#0000ff',  // Blue
            shape: 'circle',
            size: 16,
            defaultChecked: false,
            defaultLabels: false
        }
    ]
};
