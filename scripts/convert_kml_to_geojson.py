import os
from fastkml import kml
from geojson import Feature, FeatureCollection, Point
import json

def convert_kml_to_geojson(kml_path):
    # Read KML file
    with open(kml_path, 'rb') as kml_file:
        doc = kml_file.read()
    
    # Parse KML
    k = kml.KML()
    k.from_string(doc)
    
    # Extract features
    features = []
    
    # Helper function to process placemarks
    def process_placemarks(container):
        for feature in container.features():
            if hasattr(feature, 'features'):
                process_placemarks(feature)
            else:
                # Get coordinates
                coords = list(feature.geometry.coords)[0]
                
                # Create Point feature
                point = Point(coordinates=[coords[0], coords[1]])
                
                # Get properties
                properties = {}
                
                # Get name from extended data or name attribute
                name = None
                if hasattr(feature, 'extended_data') and feature.extended_data:
                    for data in feature.extended_data.elements:
                        if data.name == 'n':
                            name = data.value
                            break
                if not name and hasattr(feature, 'name'):
                    name = feature.name
                if name:
                    properties['name'] = name
                
                # Get description
                if hasattr(feature, 'description') and feature.description:
                    properties['description'] = feature.description
                
                # Get styleUrl
                if hasattr(feature, 'styleUrl') and feature.styleUrl:
                    properties['styleUrl'] = feature.styleUrl
                
                # Create Feature
                geojson_feature = Feature(geometry=point, properties=properties)
                features.append(geojson_feature)
    
    # Process all features in the KML
    for document in k.features():
        process_placemarks(document)
    
    # Create FeatureCollection
    feature_collection = FeatureCollection(features)
    
    # Create output path
    output_path = kml_path.replace('.kml', '.geojson')
    
    # Write GeoJSON file
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(feature_collection, f, indent=2)
    
    print(f"Converted {os.path.basename(kml_path)} to GeoJSON successfully!")
    return output_path

def main():
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Get the data directory (one level up + data)
    data_dir = os.path.join(os.path.dirname(script_dir), 'data')
    
    # KML files to convert
    kml_files = [
        os.path.join(data_dir, 'Public_Schools.kml'),
        os.path.join(data_dir, 'Private_Schools.kml')
    ]
    
    # Convert each KML file
    for kml_file in kml_files:
        try:
            convert_kml_to_geojson(kml_file)
        except Exception as e:
            print(f"Error converting {os.path.basename(kml_file)}: {str(e)}")

if __name__ == '__main__':
    main()
